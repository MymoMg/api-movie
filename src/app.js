const express = require('express')
const app = express();
const sequelize = require('./config/db');
const userRoutes = require('./routes/user.router')

app.use(express.json());

app.use('/auth', userRoutes);

app.listen(3004, () => console.log("start"))
