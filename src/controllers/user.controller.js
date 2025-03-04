const UserService = require('../services/user.service');

//gestion inscription
async function register(req, res) {
    try{
        const {email, password} = req.body;
        const user = await UserService.register(email, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

//gestion connexion
async function login(req, res) {
    try {
        const {email, password} = req.body;
        const token = await UserService.login(email, password);
        res.json({token});
    } catch (error) {
        res.status(401).json({error : error.message});
    }
}

module.exports = {register, login};