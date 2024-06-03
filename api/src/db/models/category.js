'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Admin, Product }) {
      this.belongsTo(Admin, { foreignKey: 'adminId', as: 'admin' });
      this.hasMany(Product, { foreignKey: 'categoryId', as: 'products' });
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          min: 2,
        },
      },
      adminId: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Category',
    },
  );
  return Category;
};
