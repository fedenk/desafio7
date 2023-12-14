import { Router } from 'express';
import { getProducts, saveProduct, getProduct } from '../controllers/products.controller.js';

const router = Router();

router.get('/', getProducts);
router.post('/',saveProduct);
router.get('/:pid',getProduct );

export default router;