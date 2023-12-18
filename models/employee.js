const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('company_workers', 'root', 'Takkupulto22@', {
  host: 'localhost',
  dialect: 'mysql' 
});

const employee = sequelize.define('employee', {
  employeeId:{
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  salary:{
    type: DataTypes.INTEGER
  }
},
);

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = employee;
