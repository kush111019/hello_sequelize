'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employer.init({
    employerId: DataTypes.NUMBER,
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    isExists: DataTypes.BOOLEAN,
    eid: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'employer',
  });
  return employer;
};