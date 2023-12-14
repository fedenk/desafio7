import { productsModel } from './models/products.model.js';

export default class Products {
    constructor() {
        console.log('Working products with DB');
    }

    async getAll() {
        return productsModel.find();
    }

    async save(product) {
        productsModel.create(product);
        return product;
    }

    async getById(pid) {
        productsModel.findOne(pid);
        return pid;
    }

    //deleteById
    //updateById
}