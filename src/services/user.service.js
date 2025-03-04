const  UserRepo = require('../repositories/user.repo');
require("dotenv").config()

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserService {
    async register(email, password) {
        const user = await UserRepository.createUser(email, password);
        return user;
    }
    async login(email, password) {
        const user = await UserRepo.findUserByEmail(email);
        if (!user) 
            throw new Error('Utilisateur pas trouvé');

        const isPwdValid = await bcrypt.compare(password, user.password);
        if (!isPwdValid)
            throw new Error('Mot de passe erroné')

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {expiresIn:'1'});
        return token;
    }
}