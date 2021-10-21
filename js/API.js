document.querySelectorAll("button")[0].addEventListener('click', function(e){
    event.preventDefault();
  console.log(document.querySelectorAll('input')[0].value)
    var data = JSON.stringify({
        "parentIntent": "",
        "input": document.querySelectorAll('input')[0].value,
        "streamName": "HR Assist.ai"
        });
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log(this.responseText);
      }
    });
    
    xhr.open("POST", "https://bots.kore.ai/api/v1.1/rest/streams/st-10356dfe-12f1-5bbc-bbc3-4aa414912640/findIntent?fetchConfiguredTasks=false");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("auth", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzLWY4MTQ4NTY2LTNlNjgtNTIzNC05NDhmLTdmZjdmZjI2ZTA4NSJ9.95y60Y2tdYLzii3HPXmyy9IDv6qHBNQNP73cbIWsEI4");
    xhr.setRequestHeader("bot-language", "en");
    
    xhr.send(data);
    // document.querySelectorAll('input')[1].value = 
})


// var data = JSON.stringify({
//   "parentIntent": "",
//   "input": "Apply Leave",
//   "streamName": "HR Assist.ai"
// });

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function() {
//   if(this.readyState === 4) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("POST", "https://bots.kore.ai/api/v1.1/rest/streams/st-10356dfe-12f1-5bbc-bbc3-4aa414912640/findIntent?fetchConfiguredTasks=false");
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.setRequestHeader("auth", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzLWY4MTQ4NTY2LTNlNjgtNTIzNC05NDhmLTdmZjdmZjI2ZTA4NSJ9.95y60Y2tdYLzii3HPXmyy9IDv6qHBNQNP73cbIWsEI4");
// xhr.setRequestHeader("bot-language", "en");

// xhr.send(data);

// var request = require('request');
// var options = {
//   'method': 'POST',
//   'url': 'https://bots.kore.ai/api/v1.1/rest/streams/st-10356dfe-12f1-5bbc-bbc3-4aa414912640/findIntent?fetchConfiguredTasks=false',
//   'headers': {
//     'Content-Type': 'application/json',
//     'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzLWY4MTQ4NTY2LTNlNjgtNTIzNC05NDhmLTdmZjdmZjI2ZTA4NSJ9.95y60Y2tdYLzii3HPXmyy9IDv6qHBNQNP73cbIWsEI4',
//     'bot-language': 'en'
//   },
//   body: JSON.stringify({
//     "parentIntent": "",
//     "input": "Apply Leave",
//     "streamName": "HR Assist.ai"
//   })

// };
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body);
// });