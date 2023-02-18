const db = require('../models');
// const associate = require("../models/Associations/modelAssociations");
const sequelize = require('sequelize');

const users = db.users;

const getUsers = async (req, res) => {
    let response = await users.findAll({});
};

module.exports = {
    getUsers
}