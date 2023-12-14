import express from 'express';
import handlebars from 'express-handlebars';
import usersRouter from './routes/users.router.js';
import cartsRouter from './routes/carts.router.js';
import productsRouter from './routes/products.router.js';
import __dirname from './utils.js';
import configs from './config/config.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

try {
    await mongoose.connect(configs.mongoUrl);
    console.log('DB connected');
} catch (error) {
    console.log(error.message);
}

app.use('/api/users', usersRouter);
app.use('/api/carts', cartsRouter);
app.use('/api/products', productsRouter);



app.listen(configs.port, () => console.log('Server running'));