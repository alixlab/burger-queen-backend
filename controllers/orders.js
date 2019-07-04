const models = require('../models');
const Orders = models.Orders;
const OrderProducts = models.OrderProducts;
const Products = models.Products;
const User = models.User;

const getOrders = (req, res) => Orders.findAll({
    include: [{ model: OrderProducts, include: [Products] }, User]
})
    .then(order => res.send(order));

const getOrdersById = (req, res) => Orders.findByPk(req.params.id, {
    include: [{ model: OrderProducts, include: [Products] }, User]
})
    .then(order => {
        order ? res.send(order) : res.sendStatus(404)
    });

const postOrders = (req, res) => Orders.create(req.body, { include: [OrderProducts] })
    .then(order => {
        res.status(201).send(order);
    })

const putOrders = (req, res) => Orders.update({ ...req.body }, { where: { id: req.params.id } })
    .then(() => {
        Orders
            .findByPk(req.params.id)
            .then(order => res.send(order))
    });

const deleteOrders = (req, res) => Orders.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200));

module.exports = {
    getOrders,
    getOrdersById,
    postOrders,
    putOrders,
    deleteOrders
}