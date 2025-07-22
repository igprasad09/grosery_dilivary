const express = require('express');
const CartRoutes = require('./routes/cart');
const UserRoutes = require('./routes/user');
const cors = require('cors');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1',CartRoutes);
app.use('/user',UserRoutes)


app.listen(3000, console.log('server is running.....'))