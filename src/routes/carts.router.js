import { Router } from 'express';
import { getCarts, saveCart, updateCart } from '../controllers/carts.controller.js';

const router = Router();

router.get('/', getCarts);
router.post('/', saveCart);
router.put('/:cid/:pid', updateCart);

export default router;