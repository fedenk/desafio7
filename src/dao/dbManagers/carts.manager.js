import { cartsModel } from './models/carts.model.js';

export default class Carts {
    constructor() {
        console.log('Working carts with DB');
    }

    getAll = async () => {
        const carts = await cartsModel.find().lean();
        return carts;
    }

    save = async (cart) => {
        const result = await cartsModel.create(cart);
        return result;
    }

    update = async (cid, cart) => {
        const result = await cartsModel.updateOne({ _id: cid }, cart);
        return result;
    }

    getById = async (cid) => {
        const result = await cartsModel.findOne(cid);
        return result;
    }
    //updateProduct(??)
    //getById
    //deleteAll
    //deleteById

}