import * as data from './data.json';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';


export class Item {

    /**
     * Creates an instance of Item.
     * @param  {{item: number | string | undefined, seller: number | string | undefined, description: string | undefined, category: string[] | undefined, price: {integer: string, decimal: string} | undefined, shipping: {integer: string, decimal: string} | undefined, rating: number | undefined, img: string | undefined, uuid: string | undefined}} ItemInitializer
     */
    constructor({ item, seller, description, category, price, shipping, rating, img, uuid }) {

        /* Check if item type is string and assing it if it is else 
           check if is number and look for it in data list. */
        if (typeof item === 'string') this.item = item;
        // Use ternary operator to check that item is not bigger than the array.
        else if (typeof item === 'number') this.item = data.titels[item > data.titels.length ? data.titels.length - 1 : item];
        else this.item = data.titels[Math.floor(Math.random() * data.titels.length)];

        // Check seller the same way as item above.
        if (typeof seller === 'string') this.seller = seller;
        // Use ternary operator to check that seller is not bigger than the array.
        else if (typeof seller === 'number') this.seller = data.sellers[seller > data.sellers.length ? data.sellers.length - 1 : seller];
        else this.seller = data.sellers[Math.floor(Math.random() * 24)];

        // Check if desciption is string and use it or get a random one from data.
        if (typeof description === 'string') this.description = description;
        else this.description = data.descriptions[Math.floor(Math.random() * data.descriptions.length)];

        // Check if category is an array and use it or get one rondom value from data and make array of it.
        if (Array.isArray(category)) this.category = category;
        else this.category = [data.categories[Math.floor(Math.random() * data.categories.length)]];

        // Set the price and shipping price for the item.
        if (price) {
            price.decimal = price.decimal.padStart(2, '0');
            this.price = price;
        } else {
            this.price = {
                integer: Math.floor(Math.random() * 1000).toString(),
                decimal: Math.floor(Math.random() * 100).toString()
                    .padStart(2, '0')
            };
        }
        if (shipping) {
            shipping.decimal = shipping.decimal.padStart(2, '0');
            this.shipping = shipping;
        } else {
            this.shipping = {
                integer: Math.floor(Math.random() * 100).toString(),
                decimal: Math.floor(Math.random() * 100).toString()
                    .padStart(2, '0')
            };
        }

        // Set item rating.
        if (rating) this.rating = rating;
        else this.rating = Math.floor(Math.random() * 4 + 1) + Math.round((Math.random() + Number.EPSILON) * 100) / 100;

        // Get all images and assign one of them at random to be item image or if img is provided use that as image.
        if (img) this.img = img;
        else {
            var images = this.getImages();
            this.img = `res/${images[Math.floor(Math.random() * images.length)]}`;
        }

        // Assign the given uuid or generate a new one.
        if (uuid) this.uuid = uuid;
        else this.uuid = uuidv4();
    }


    /**
     * Get a list of image names.
     * @private This fucntion is ment to be used inside the ``Item`` class.
     * @returns  {string[]} Image names as ``string[]``
     */
    getImages() {
        // eslint-disable-next-line no-sync
        return fs.readdirSync('./res');
    }

    /**
     * Assign the new values their corresponding properties.
     * @param  {{item: number | string | undefined, seller: number | string | undefined, description: string | undefined, category: string[] | undefined, price: {integer: string, decimal: string} | undefined, shipping: {integer: string, decimal: string} | undefined, rating: number | undefined, img: string | undefined, uuid: string | undefined}} ItemSetter object with all values that need to be reset.
     */
    setItem({ item, seller, description, category, price, shipping, rating, img } = {}) {
        if (item) this.item = item;
        if (seller) this.seller = seller;
        if (description) this.description = description;
        if (category) this.category = category;
        if (price) {
            price.decimal = price.decimal.padStart(2, '0');
            this.price = price;
        }
        if (shipping) {
            shipping.decimal = shipping.decimal.padStart(2, '0');
            this.shipping = shipping;
        }
        if (rating) this.rating = rating;
        if (img) this.img = img;
    }


    // Documentaion of properties.
    /**
     * Titel/Name of the item.
     * @type {string}
     * @memberof Item
     */
    item;

    /**
     * Seller or manufacturer of the item.
     * @type {string}
     * @memberof Item
     */
    seller;

    /**
     * Description of the item.
     * @type {string}
     * @memberof Item
     */
    description;

    /**
     * Categories in which the item is included.
     * @type {string[]}
     * @memberof Item
     */
    category;

    /**
     * Price of the item.
     * @type {{integer: string, decimal: string}}
     * @memberof Item
     */
    price;

    /**
     * Price of the shipping.
     * @type {{integer: string, decimal: string}}
     * @memberof Item
     */
    shipping;


    /**
     * The rating of the item.
     * @type {number}
     * @memberof Item
     */
    rating;

    /**
     * Path on the website to the image.
     * @type {string}
     * @memberof Item
     */
    img;

    /**
     * Unique identifier of the item
     * @type {string}
     * @memberof Item
     */
    uuid;

}
