const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const MedicinalPlan = require('../models/MedicinalPlan');

const connection = new Sequelize(dbConfig);
MedicinalPlan.init(connection);

module.exports = connection;
