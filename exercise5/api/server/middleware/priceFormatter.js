/** 
 * @typedef {object} bodyParameters
 * @property {{integer: number | string, decimal: number | string}} price
 * @property {{integer: number | string, decimal: number | string}} shipping
 */
/** 
 * 
 * @param {import('express').Request<,, bodyParameters>} req
 * 
 * @type {import('express').RequestHandler}
 */
export const priceAndShippingFormatter = (req, res, next) => {
    var { price, shipping } = req.body;
    if (price) {
        price.integer = price.integer.toString();
        price.decimal = price.decimal.toString();
        req.body.price = price;
    }
    if (shipping) {
        shipping.integer = shipping.integer.toString();
        shipping.decimal = shipping.decimal.toString();
        req.body.shipping = shipping;
    }

    next();
};