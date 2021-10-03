import createItemSchema from './schemas/CreateItem.schema.json';
import modifyItemSchema from './schemas/ModifyItem.schema.json';
import createUserSchema from './schemas/CreateUser.schema.json';
import createInvoiceSchema from './schemas/CreateInvoice.schema.json';
import Ajv from 'ajv';

const ajv = new Ajv();
const createItemValidator = ajv.compile(createItemSchema);
const modifyItemValidator = ajv.compile(modifyItemSchema);
const createUserValidator = ajv.compile(createUserSchema);
const createInvoiceValidator = ajv.compile(createInvoiceSchema);


/**
 * Check if create item request body is valid.
 * @type {import('express').RequestHandler}
 */
export const createItemValidatorMw = (req, res, next) => {
    const validationResult = createItemValidator(req.body);
    if (validationResult) next();
    else res.sendStatus(400);
};


/**
 * Check if modify item request body is valid.
 * @type {import('express').RequestHandler}
 */
export const modifyItemValidatorMw = (req, res, next) => {
    const validationResult = modifyItemValidator(req.body);
    if (validationResult) next();
    else res.sendStatus(400);
};


/**
 * Check if create user request body is valid.
 * @type {import('express').RequestHandler}
 */
export const createUserValidatorMw = (req, res, next) => {
    const validationResult = createUserValidator(req.body);
    if (validationResult) next();
    else res.sendStatus(400);
};


/**
 * Check if create invoice request body is valid.
 * @type {import('express').RequestHandler}
 */
 export const createInvoiceValidatorMw = (req, res, next) => {
    const validationResult = createInvoiceValidator(req.body);
    if (validationResult) next();
    else res.sendStatus(400);
};