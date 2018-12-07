var express = require("express");
var router = express.Router();
// require cheerio
// axios 

router.get("/scrape", function(req, res){
    // do scraping
    res.send("scrape complete!")
})



module.exports = router