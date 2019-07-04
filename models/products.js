'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    option: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Products.associate = function (models) {
    Products.hasMany(models.OrderProducts, { foreignKey: 'productId' });
  };

  // Products.create({
  //   name: "café americano",
  //   price: 5.00,
  //   option: "bebida",
  //   type: "café da manhã"
  // })
  // Products.create({
  //   name: "suco de fruta natural",
  //   price: 7.00,
  //   option: "bebida",
  //   type: "café da manhã"
  // })
  // Products.create({
  //   name: "sanduíche presunto e queijo",
  //   price: 10.00,
  //   option: "sanduíche",
  //   type: "café da manhã"
  // })
  // Products.create({
  //   name: "burger simples bovino",
  //   price: 10.00,
  //   option: "sanduíche",
  //   type: "resto do dia"
  // })
  // Products.create({
  //   name: "queijo",
  //   price: 1.00,
  //   option: "adicional",
  //   type: "resto do dia"
  // })
  // Products.create({
  //   name: "bebida gaseificada 500ml",
  //   price: 7.00,
  //   option: "bebida",
  //   type: "resto do dia"
  // })
  // Products.create({
  //   name: "batata frita",
  //   price: 5.00,
  //   option: "acompanhamento",
  //   type: "resto do dia"
  // })

  return Products;
};