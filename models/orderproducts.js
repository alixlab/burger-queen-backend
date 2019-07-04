'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProducts = sequelize.define('OrderProducts', {
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  OrderProducts.associate = function(models) {
    OrderProducts.belongsTo(models.Orders, {foreignKey:'orderId'});
    OrderProducts.belongsTo(models.Products, {foreignKey:'productId'});
  };
  return OrderProducts;
};