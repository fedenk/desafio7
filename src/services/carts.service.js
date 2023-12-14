import Carts from "../dao/dbManagers/carts.manager.js";
import Products from "../dao/dbManagers/products.manager.js";

const cartsManager = new Carts();
const productsManager = new Products();

const getCarts = async () => {
    const carts = await cartsManager.getAll();
    return carts;
}

const saveCart = async () => {
    const cart = await cartsManager.save();
    return cart;
}

const updateCart = async (cid,pid,quantity) => {
    
}

export {
    getCarts,
    saveCart,
    updateCart
}