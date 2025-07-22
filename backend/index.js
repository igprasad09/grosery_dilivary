const express = require('express');
const CartRoutes = require('./routes/cart');
const UserRoutes = require('./routes/user');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000; 


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1',CartRoutes);
app.use('/user',UserRoutes)


app.listen(port, console.log('server is running.....'))