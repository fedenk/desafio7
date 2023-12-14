import { getCarts as getCartsService, saveCart as saveCartService,
         updateCart as updateCartService } from "../services/carts.service.js";

const getCarts = async (req,res) => {
    try {
        const carts = await getCartsService();
        res.send({ payload: carts });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const saveCart = async (req,res) => {
    try {
        const cart = await saveCartService();
        res.send({payload : cart });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const updateCart = async (req,res) => {
    try {
        const pid = req.params.pid;
        const cid = req.params.cid;
        const quantity = req.query.quantity;
   
        const cart = await updateCartService(pid,cid,quantity);
        res.send({payload: cart});
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

export{
    getCarts,
    saveCart,
    updateCart
}