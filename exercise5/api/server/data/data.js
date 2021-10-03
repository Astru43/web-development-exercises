import { Item } from './item';
import { v4 as uuidv4 } from 'uuid';
import { User } from './user';
import { Invoice } from './invoice';

export class DataHolder {

    /**
     * Creates or gets an instance of ``DataHolder``.
     */
    constructor() {
        if (DataHolder.instance) {
            return DataHolder.instance;
        }
        DataHolder.instance = this;

        /**
         * Array of invoices.
         * @type {Invoice[]}
         * @memberof DataHolder
         */
        this.invoices = [];

        /**
         * Array of users.
         * @type {User[]}
         * @memberof DataHolder
         */
        this.users = [];

        /**
         * Array of items.
         * @type {Item[]}
         * @memberof DataHolder
         */
        this.items = [
            new Item({
                item: 0,
                uuid: uuidv4()
            }),
            new Item({
                seller: 'Test',
                uuid: uuidv4()
            }),
            new Item({ uuid: uuidv4() }),
            new Item({ uuid: uuidv4() }),

            new Item({ uuid: uuidv4() }),
            new Item({ uuid: uuidv4() }),
            new Item({ uuid: uuidv4() }),
            new Item({ uuid: uuidv4() }),

            new Item({ uuid: uuidv4() }),
            new Item({ uuid: uuidv4() }),
            new Item({ uuid: uuidv4() }),
            new Item({ uuid: uuidv4() })
        ];

    }

    /**
     * Creates new ``Item`` object and adds it to the items list.
     * @param  {string} uuid Uuid string of the new item.
     * @param  {{item: number | string | undefined, seller: number | string | undefined, description: string | undefined, category: string[] | undefined, price: {integer: string, decimal: string}, shipping: {integer: string, decimal: string}, rating: number | undefined, img: string | undefined} | undefined} ItemInitializer Object used to initialize the new item object.
     * @return  {Item} Returns the newly generated ``Item`` object.
     * @memberof DataHolder
     */
    addItem(uuid, { item, seller, description, category, price, shipping, rating, img } = {}) {
        var newItem = new Item({
            item,
            seller,
            description,
            category,
            price,
            shipping,
            rating,
            img,
            uuid
        });
        this.items.push(newItem);
        return newItem;
    }

    /**
     * Creates new ``User`` object and adds it to the users list.
     * @param {{firstName: string, lastName: string, address: string, phone: string, email: string}} userInfo Object including all required user information.
     * @return {User} Returns the newly generated ``User`` object.
     * @memberof DataHolder
     */
    addUser({ firstName, lastName, address, phone, email }) {
        var newUser = new User(firstName, lastName, address, phone, email);
        this.users.push(newUser);
        return newUser;
    }

    /**
     * Creates new ``Invoice`` object and adds it to the invoices list.
     * @param {{user: string, items: Item[]}} invoiceInfo Object that includes the bought items and the user who bought them.
     * @return {Invoice} Returns the newly generated ``Invoice`` object.
     * @memberof DataHolder
     */
    addInvoice({ user, items }) {
        var totalSum = 0;
        var totalShipping = 0;
        items.forEach((item) => {
            totalSum += Number(item.price.integer);
            totalSum += Number(item.price.decimal) / 100;

            totalShipping += Number(item.shipping.integer);
            totalShipping += Number(item.shipping.decimal) / 100;
        });

        var newInvoice = new Invoice(user, totalSum, totalShipping, new Date(), items);
        this.invoices.push(newInvoice);
        return newInvoice;
    }
}
