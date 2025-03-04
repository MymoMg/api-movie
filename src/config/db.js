const {Sequelize} = require("sequelize")
require("dotenv").config()

// if (!process?.env?.DB_NAME ||  !process?.env?.DB_USERNAME || !process?.env?.DB_PASSWORD || !process?.env?.DB_HOST || !process?.env?.PORT)
//     throw new Error("manque env variables")

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host:process.env.DB_HOST,
    dialect:"postgres"
});

sequelize.authenticate()
.then(() => console.log("Connexion OK"))
.catch(err => console.log(err));

sequelize.sync()

module.exports = sequelize