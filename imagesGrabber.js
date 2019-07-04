let keywords = ["cats", "cat", "kitty", "kitten", "Siamese"];
let tags = 'cats,cat,kitty,kitten,siamese'

function getImage(){
    // let keyword = keywords[Math.floor(Math.random()*keywords.length)];

    // $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", 
    // {
    //     tags: keyword,
    //     tagmode: "any",
    //     format: "json"
    // },
    // function(data) {
    //     let rnd = Math.floor(Math.random() * data.items.length);
    //     let src = data.items[rnd]['media']['m'].replace("_m", "_b");
    //     $('#catImg').attr("src", src);
    // });

}


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