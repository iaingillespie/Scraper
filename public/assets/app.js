
$("#scrape").click(function(){

  $.ajax({
      url: "/api/scrape",
      method: "GET"
  } ).then(function(response){
      console.log(response)
  })

})

function getArticles(){
    $.get('/api/articles', function(data){
       //populate dom
        console.log(data)
        populate(data);
    })
}

getArticles();

function populate(data) {
    data.forEach(article => {
        $('#content').append(article.title)
    })
}