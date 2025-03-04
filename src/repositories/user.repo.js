const User = require('../models/user.model');


async function createUser(email, password) {
    return await User.create({email, password});
}

async function findUserByEmail(email) {
    return await User.findOne({where: {email} });
}

module.exports = {createUser, findUserByEmail};