var express = require ("express");
var htmlRoutes = require("./routes/htmlRoutes");
var apiRoutes = require("./routes/apiRoutes")
var app = express();
const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/scraper');

app.use(express.static("public"));

var PORT = process.env.PORT || 8000;

app.use('/', htmlRoutes);

app.use("/api", apiRoutes);


app.listen(PORT, function(){
    console.log("listening on port " + PORT)
})

