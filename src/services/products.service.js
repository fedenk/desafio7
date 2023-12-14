import Products from "../dao/dbManagers/products.manager.js";

const productsManager = new Products();

const getProducts = async () => {
    const products = await productsManager.getAll();
    return products;
}

const saveProduct = async (product) => {

        await productsManager.save(product);
        return product;
}

const productById = async (pid) => {
    const product = await productsManager.getById(pid);
    if(!product){
        console.log ('invalid id');
    }else{
        return product;
    }
}

export {
    getProducts,
    saveProduct,
    productById
}