var express = require("express");
var router = express.Router();
var cheerio = require("cheerio");
var axios = require("axios");
var models = require('../models');



router.get("/scrape", function(req, res){
    axios.get('https://www.nytimes.com/').then(result =>{
       
        const $ = cheerio.load(result.data);
        $('article h2').each((i, ele) => {
           
            const article = {
                title: $(ele).text(),
                summary: $(ele).parent().siblings('p').text(),
                url: $(ele).parent().parent().attr('href'),

            }
            //store in database
            models.Article.create(article).then(reponse => { console.log("created")})
            
        })
        res.send("scrape complete!")
    })

})

router.get("/articles", function(req, res){
    models.Article.find({}).then(result => {
        console.log(result);
        res.send(result)
    })
})



module.exports = router