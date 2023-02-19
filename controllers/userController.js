const { body } = require('express-validator');
const db = require('../models');

const User = db.users;

const getUser = async(req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let response = await User.findOne({where: {Username: username, Password: password}});
    if (!response) {
        return res.status(400).send({ error: 'Users not found' });
    }
    res.redirect('/equipment/getmap');
};

const user_create_get = (req, res, next) => {
    res.render('form/register', {title: "Create Account"});
};

const insertNewUser = async (req, res, next) => {
    let userid = req.body.userid;
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;

    console.log(userid)

    let user = await User.findOne({where:{UserId: userid}})
    if (user) {
        res.status(400).send({ error: "A user with the same ID already exists" });
      } else {
        try {
          let newUser = await User.create({UserId: userid, username: username, email: email, password: password});
          res.status(200).send(newUser);
        } catch (error) {
          res.status(500).send({ error: "Failed to insert a new user" + error});
        }
      }
}

module.exports = {
    getUser, user_create_get, insertNewUser
};