import { v4 as uuidv4 } from 'uuid';

export class Invoice {

    /**
     * Creates an instance of Invoice.
     * @param {string} user UUID of the user of this invoice.
     * @param {number} totalSum Total sum of this invoice without shipping.
     * @param {number} totalShipping Total shipping cost of this invoice.
     * @param {Date} date Date when this invoice was made.
     * @param {Item[]} items List of items included in this invoice.
     * @memberof Invoice
     */
    constructor(user, totalSum, totalShipping, date, items) {
        this.user = user;
        this.totalSum = totalSum;
        this.totalShipping = totalShipping;
        this.sumWithShipping = totalSum + totalShipping;
        this.date = date;
        this.items = items;
        this.uuid = uuidv4();
    }


    // Documentation of properties
    /**
     * Unique indetifier of the user of this invoice.
     * @type {string}
     * @memberof Invoice
     */
    user;

    /**
     * Total sum of this invoice.
     * @type {number}
     * @memberof Invoice
     */
    totalSum;

    /**
     * Total shipping cost of this invoice.
     * @type {number}
     * @memberof Invoice
     */
    totalShipping;

    /**
     * Total sum with shipping added.
     * @type {number}
     * @memberof Invoice
     */
    sumWithShipping;

    /**
     * Date when this invoice was made.
     * @type {Date}
     * @memberof Invoice
     */
    date;

    /**
     * All items included in this invoice.
     * @type {Item[]}
     * @memberof Invoice
     */
    items;

    /**
     * Unique indetifier of this invoice.
     * @type {string}
     * @memberof Invoice
     */
    uuid;
}
