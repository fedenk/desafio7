import { saveProduct as saveProductService, getProducts as getProductsService,
         productById as productByIdService } from "../services/products.service.js";

const getProducts = async (req,res) => {
    try {
        const products = await getProductsService();
        res.send({payload: products});
    } catch (error) {
        res.status(500).send({ error: error.message});
    }
}

const saveProduct = async (req,res) => {
    try {
        const { title, description, code, price, status, stock, category, image } = req.body;
        
        const product = await saveProductService({
            title,
            description,
            code,
            price,
            status,
            stock,
            category,
            image
        });
            res.send({payload: product});
        
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

const getProduct = async (req,res) => {
    try {
        const pid = req.params.pid;
        await productByIdService(pid);
        res.send({payload: pid});
    } catch (error) {
        res.status(500).send({ error: error.message});
    }
}

export {
    getProducts,
    saveProduct,
    getProduct
}