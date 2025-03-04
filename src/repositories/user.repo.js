const User = require('../models/user.model');

class UserRepo {
    async createUser(email, password) {
        return await User.create({email, password});
    }

    async findUserByEmail(email) {
        return await User.findOne({where: {email} });
    }
}

module.exports = new UserRepo();