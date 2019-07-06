let facts = null;

function getKittyImage() {

  let select = document.getElementById("breeds");

  let value = select.options[select.selectedIndex].value;

  let url;

  if(value === "all"){
    url = "https://api.thecatapi.com/v1/images/search";
  } else{
    url = "https://api.thecatapi.com/v1/images/search?breed_id=" + value;
  }

  let settings = {
    "async": true,
    "crossDomain": true,
    "url": url,
    "method": "GET",
    "headers": {
      "x-api-key": "935bb962-872d-4566-ab2e-7860f6b349f5"
    }
  }

  $.ajax(settings).done(function(response) {
    $('#catImg').attr('src', response[0].url);
  });
}


function getDoggoImage() {
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://dog.ceo/api/breeds/image/random",
    "method": "GET"
  };

  $.ajax(settings).done(function(response) {
    $('#doggoImg').attr('src', response.message);
  })
}

function getFacts() {

  if (facts != null) {
    let randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("catfact").innerHTML = randomFact.text;
    return;
  }

  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts",
    "method": "GET",
    "contentType": "application/json"
  };


  $.ajax(settings).done(function(response) {
    facts = response.all;
    let randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("catfact").innerHTML = randomFact.text;
  });
}

function populateSelection() {
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.thecatapi.com/v1/breeds",
    "method": "GET",
    "headers": {
      "x-api-key": "935bb962-872d-4566-ab2e-7860f6b349f5"
    }
  }

  $.ajax(settings).done(function(response) {
    let select = document.getElementById("breeds");
    for (breed of response) {
      let element = document.createElement("option");
      element.textContent = breed.name;
      element.value = breed.id;
      select.appendChild(element);
    }
  });
}
