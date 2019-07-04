const models = require('../models');
const Products = models.Products;

const getProducts = (req, res) => Products.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] }
})
    .then(product => res.send(product));

const getProductsById = (req, res) => Products.findByPk(req.params.id, {
    attribute: { exclude: ['createdAt', 'updatedAt'] }
})
    .then(product => {
        product ? res.send(product) : res.sendStatus(404)
    });

const postProducts = (req, res) => Products.create(req.body)
    .then(product => {
        res.status(201).send(product);
    });

const putProducts = (req, res) => Products.update({ ...req.body }, { where: { id: req.params.id } })
    .then(() => {
        Products
            .findByPk(req.params.id)
            .then(product => res.send(product))
    });

const deleteProducts = (req, res) => Products.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200));

module.exports = {
    getProducts,
    getProductsById,
    postProducts,
    putProducts,
    deleteProducts
}