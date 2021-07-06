const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Finance extends Model { }

Finance.init(
  {
    bucket: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'finance',
  }
);

module.exports = Finance;