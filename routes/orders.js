const router = require('express').Router();
const Orders = require('../controllers/orders');

router.get("/", Orders.getOrders);
router.get("/:id", Orders.getOrdersById);
router.post("/", Orders.postOrders);
router.put("/:id", Orders.putOrders);
router.delete("/:id", Orders.deleteOrders);

module.exports = router;

// router.get("/", (req, res) => {
//     Orders.findAll({
//         include: [{ model: OrderProducts, include: [Products]}, User]
//     })
//     .then(order => res.send(order));
// });

// router.get("/:id", (req, res) => {
//     Orders.findByPk(req.params.id, { include: [{ model: OrderProducts, include: [Products]}, User] })
//     .then(order => {
//         order ? res.send(order) : res.sendStatus(404)
//     });
// });

// router.post("/", (req, res) => {
//     Orders.create({
//         status: "pending",
//         uid: req.body.uid
//     })
//         .then((order) => {
//             for (item of req.body.items) {
//                 Products.findOne({
//                     where: {
//                         name: item.name
//                     }
//                 })
//             }
//         })
//         .then((product) => {
//             OrderProducts.create({ orderId: order.id, productId: product.id });
//         })
//     res.status(201).send(order);
// });

// router.put("/:id", (req, res) => {
//     Orders.update({ ...req.body }, { where: { id: req.params.id } })
//     .then(() => {
//         Orders
//             .findByPk(req.params.id)
//             .then(order => res.send(order))
//     });
// });

// router.delete("/:id", (req, res) => {
//     Orders.destroy({ where: { id: req.params.id } })
//     .then(() => res.sendStatus(200));
// });