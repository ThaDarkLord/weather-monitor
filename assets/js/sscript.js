console.log('hello world')

// cd32736e7276363245716182999a0ea0 weather api key
var apiKey = 'cd32736e7276363245716182999a0ea0';
var city;

    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      })
