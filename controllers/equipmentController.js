const db = require('../models');
// const associate = require("../models/Associations/modelAssociations");
const sequelize = require('sequelize');

const users = db.users;

const getUsers = async (req, res) => {
    let response = await users.findAll({});
    if (!response) {
        return res.status(400).send({ error: 'Users not found' });
    }
    res.status(200).send(response);
};

module.exports = {
    getUsers
}