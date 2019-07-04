const router = require('express').Router();
const Products = require('../controllers/products');

router.get("/", Products.getProducts);
router.get("/:id", Products.getProductsById);
router.post("/", Products.postProducts);
router.put("/:id", Products.putProducts);
router.delete("/:id", Products.deleteProducts);

module.exports = router;