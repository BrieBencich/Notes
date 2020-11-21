const express = require('express'); 
const apiRoutes = require('./routes/apiRoutes'); 
const htmlRoutes = require('./routes/htmlRoutes'); 
const path = require("path"); 

//Create App/PORT 
const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true})); 
app.use(express.static('Develop/public')); 
app.use('/api', apiRoutes); 
app.use('/', htmlRoutes); 

//Start PORT 
app.listen(PORT, () => console.log(`Listen on PORT: ${PORT}`)); 

