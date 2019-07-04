let keywords = ["cats", "cat", "kitty", "kitten", "Siamese"];
let tags = 'cats,cat,kitty,kitten,siamese'

function getImage(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.thecatapi.com/v1/images/search",
        "method": "GET",
        "headers": {
          "x-api-key": "935bb962-872d-4566-ab2e-7860f6b349f5"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        $('#catImg').attr('src', response[0].url);
      });
      
}