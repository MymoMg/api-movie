const UserRepo = require('../repositories/user.repo');
require("dotenv").config()

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//inscription utilisateur
async function register(email, password) {
    const user = await UserRepo.createUser(email, password);
    return user;
}

//connexion utilisateur
async function login(email, password) {
    const user = await UserRepo.findUserByEmail(email);
    if (!user) 
        throw new Error('Utilisateur pas trouvé');

    const isPwdValid = await bcrypt.compare(password, user.password);
    if (!isPwdValid)
        throw new Error('Mot de passe erroné')

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {expiresIn:'1'});
    return token;
}

module.exports = {register, login}