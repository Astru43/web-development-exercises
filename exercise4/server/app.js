import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

var app = express();

import productsRouter from './routes/products';
import userRouter from './routes/user';
import invoiceRouter from './routes/invoice';


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use(cors());

// Add all custom routers.
app.use('/products', productsRouter);
app.use('/user', userRouter);
app.use('/invoice', invoiceRouter);


app.get('/favicon.ico', (req, res) => res.status(204));

export default app;
