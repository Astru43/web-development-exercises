import { Router as _router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { DataHolder } from '../data/data';
import { priceAndShippingFormatter } from '../middleware/priceFormatter';
import { createItemValidatorMw, modifyItemValidatorMw } from '../middleware/schemaValidators';

const router = _router();
var data = new DataHolder();

// Get items based on search results.
router.get('/search', (req, res) => {
    console.log(req.query);
    var { items } = data;

    if (typeof req.query.searchString === 'string') {
        // Filter using users search string.
        const { searchString } = req.query;
        items = items.filter((item) => {
            var includedInTitle = item.item.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
            var includedInDesc = item.description.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
            var includedInSeller = item.seller.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
            return includedInTitle || includedInDesc || includedInSeller;
        });
    }
    if (typeof req.query.seller === 'string') {
        // Filter using seller/manufacturer.
        items = items.filter((item) => item.seller.toLocaleLowerCase().includes(req.query.seller.toLocaleLowerCase()));
    } else if (Array.isArray(req.query.seller)) {
        // Filter for multiple sellers/manufacturers.
        const sellers = req.query.seller.map((seller) => seller.toLocaleLowerCase());
        console.log(sellers);
        items = items.filter((item) => {
            const lowerCase = item.seller.toLocaleLowerCase();
            return sellers.includes(lowerCase);
        });
    }
    // Filter using categories eather as string or as an array.
    if (Array.isArray(req.query.category)) {
        const categories = req.query.category;
        items = items.filter((item) => categories.every((category) => item.category.includes(category)));
    } else if (typeof req.query.category === 'string') {
        const categories = req.query.category.split(',');
        items = items.filter((item) => categories.every((category) => item.category.includes(category)));
    }

    // Return filtered items list.
    res.json(items);
});

// Get item by its uuid.
router.get('/:uuid', (req, res) => {
    var item = data.items.find((item) => item.uuid === req.params.uuid);
    if (item) res.json(item);
    else res.sendStatus(404);
});

// Get all items.
router.get('/', (req, res) => {
    res.json(data.items);
});

// Modify existing item.
router.put('/:uuid', modifyItemValidatorMw, priceAndShippingFormatter, (req, res) => {
    var itemIndex = data.items.findIndex((item) => item.uuid === req.params.uuid);

    if (itemIndex === -1) res.sendStatus(404);
    else {
        data.items[itemIndex].setItem(req.body);
        res.json(data.items[itemIndex]);
    }
});

// Create a new item.
router.post('/', createItemValidatorMw, priceAndShippingFormatter, (req, res) => {
    console.log(req.body);
    var addedItem = data.addItem(uuidv4(), req.body);
    res.json(addedItem);
});

router.delete('/:uuid', (req, res) => {
        // Find the item to be deleted.
        var deletedItemIndex = data.items.findIndex((item) => item.uuid === req.params.uuid);

        // Respond if no item was found.
        if (deletedItemIndex === -1) res.sendStatus(404);
        else {
            // Remove the found item and return it as response.
            var deletedItem = data.items.splice(deletedItemIndex, 1);
            res.json(deletedItem[0]);
        }
});

export default router;
