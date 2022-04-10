const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//routes
const armorRoutes = require('./API/Routes/armor.routes')
const bootRoutes = require('./API/Routes/boot.routes');
const helmetRoutes = require('./API/Routes/helmet.routes')
const legRoutes = require('./API/Routes/leg.routes')



app.set('port', 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api', armorRoutes);
app.use('/api', bootRoutes);
app.use('/api', helmetRoutes);
app.use('/api', legRoutes);



module.exports = app;