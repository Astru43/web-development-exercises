import { Router as _router } from 'express';
import { DataHolder } from '../data/data';
import { createInvoiceValidatorMw } from '../middleware/SchemaValidators';

const router = _router();
var data = new DataHolder();

// Get one of user's invoices.
router.get('/:user/:invoice', (req, res) => {
    // Find the user's invoice from all invoices
    const invoice = data.invoices.find((invoice) => invoice.user === req.params.user && invoice.uuid === req.params.invoice);
    if (invoice) res.json(invoice);
    else res.sendStatus(404);
});

// Get all invoices of a user.
router.get('/:user', (req, res) => {
    // Filter invoices to contain only the user's invoices
    const invoices = data.invoices.filter((invoice) => invoice.user === req.params.user);
    if (invoices.length === 0) res.sendStatus(404);
    else res.json(invoices);
});

// Create new invoice for a user.
router.post('/', createInvoiceValidatorMw, (req, res) => {
    // Convert all item uuid to actual item objects from the items list.
    var items = [];
    req.body.items.forEach((val) => {
        const item = data.items.find((item) => item.uuid === val);
        if (item) items.push(item);
    });

    // Return if no items were found.
    if (items.length === 0) return res.status(500).send('Couldn\'t find any of the given items');

    // Reassign items with the actual item objects.
    req.body.items = items;

    // Add the invoice
    var addedInvoice = data.addInvoice(req.body);
    res.json(addedInvoice);
});

// Delete one of user's invoices.
router.delete('/:user/:invoice', (req, res) => {
    // Find the invoice to be deleted.
    var deletedItemIndex = data.invoices.findIndex((invoice) => invoice.user === req.params.user && invoice.uuid === req.params.invoice);

    // Respond if no invoice was found.
    if (deletedItemIndex === -1) res.sendStatus(404);
    else {
        // Remove the found invoice and return it as response.
        var deletedItem = data.invoices.splice(deletedItemIndex, 1);
        res.json(deletedItem[0]);
    }
});

export default router;
