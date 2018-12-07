
$("#scrape").click(function(){

  $.ajax({
      url: "/api/scrape",
      method: "GET"
  } ).then(function(response){
      console.log(response)
  })

})