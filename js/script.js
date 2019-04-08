// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var input = $('#search-term').val();
    var searchURL = "https://api.giphy.com/v1/gifs/search?q="+input+"&rating=pg&api_key=dc6zaTOxFJmzC"
   $.ajax({
        url: searchURL,
        method: "GET",
        success: function(response) {
            $('body').append("<img src=" + response.data[0].images.original.url + ">");
            
        },
    }); 
  
  
});

