// declared
var choiceCity = document.getElementById("choiceCity");
var choiceBtn = document.getElementById("user-form");
var currentTopic = document.getElementById("currentTopic");
var cityName = document.getElementById('cityName');
var tempData = document.getElementById('temp-data')
var windData = document.getElementById('wind-data');
var humidity = document.getElementById('humidity');
var date = document.getElementById('date');
var cityTemp = document.getElementById('cityTemp');
var cityWind = document.getElementById('cityWind')
var cityHumidity = document.getElementById('cityHumidity')
var date1 = document.getElementById('date1')
var day1Temp = document.getElementById('day1Temp')
var day1Wind =document.getElementById('day1Wind')
var day1Humidity = document.getElementById('day1Humidity')

var date2 = document.getElementById('date2')
var day2Temp = document.getElementById('day2Temp')
var day2Wind =document.getElementById('day2Wind')
var day2Humidity = document.getElementById('day2Humidity')

var date3 = document.getElementById('date3')
var day3Temp = document.getElementById('day3Temp')
var day3Wind =document.getElementById('day3Wind')
var day3Humidity = document.getElementById('day3Humidity')

var date4 = document.getElementById('date4')
var day4Temp = document.getElementById('day4Temp')
var day4Wind =document.getElementById('day4Wind')
var day4Humidity = document.getElementById('day4Humidity')

var archive = document.getElementById('archive')
// cd32736e7276363245716182999a0ea0 weather api key
var apiKey = "cd32736e7276363245716182999a0ea0";


function callWeather(event) {
  event.preventDefault();
  var selectedCity = choiceCity.value;
  var requestedUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=imperial`;

  var selectedCity = choiceCity.value;

  fetch(requestedUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

    
    cityName.textContent = data.name
    cityName.setAttribute('style', 'font-size: 27px')
    tempData.textContent = 'Temp: '+data.main.temp+ ' F' 
    windData.textContent = 'Wind: '+data.wind.deg+ ' MPH'
    humidity.textContent = 'Humidity: '+data.main.humidity + '%'

      
  // fetch request gets a list of all the repos for the node.js organization
   var lat = data.coord.lat;
   var lon = data.coord.lon;

   var f5dayUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

  fetch(f5dayUrl)
    .then(function (response2) {
      return response2.json();
        })
    .then(function (f5data) {
      console.log(f5data);
      for (var i = 0; i < f5data.list.length; i += 8){

        date.textContent = f5data.list[2].dt_txt
        date.setAttribute('style', 'font-size: 27px');
        cityTemp.textContent = 'Temp: '+ f5data.list[2].main.temp + ' F'
        cityWind.textContent = 'Wind: '+ f5data.list[2].wind.speed + ' MPH'
        cityHumidity.textContent = 'Humidity: '+ f5data.list[2].main.humidity + '%'

        

        date1.textContent = f5data.list[10].dt_txt
        date1.setAttribute('style', 'font-size: 27px');
        day1Temp.textContent = 'Temp: '+ f5data.list[10].main.temp + ' F'
        day1Wind.textContent = 'Wind: '+ f5data.list[10].wind.speed + ' MPH'
        day1Humidity.textContent = 'Humidity: '+ f5data.list[10].main.humidity + '%'

        date2.textContent = f5data.list[18].dt_txt
        date2.setAttribute('style', 'font-size: 27px');
        day2Temp.textContent = 'Temp: '+ f5data.list[18].main.temp + ' F'
        day2Wind.textContent = 'Wind: '+ f5data.list[18].wind.speed + ' MPH'
        day2Humidity.textContent = 'Humidity: '+ f5data.list[18].main.humidity + '%'

        date3.textContent = f5data.list[26].dt_txt
        date3.setAttribute('style', 'font-size: 27px');
        day3Temp.textContent = 'Temp: '+ f5data.list[26].main.temp + ' F'
        day3Wind.textContent = 'Wind: '+ f5data.list[26].wind.speed + ' MPH'
        day3Humidity.textContent = 'Humidity: '+ f5data.list[26].main.humidity + '%'

        date4.textContent = f5data.list[34].dt_txt
        date4.setAttribute('style', 'font-size: 27px');
        day4Temp.textContent = 'Temp: '+ f5data.list[34].main.temp + ' F'
        day4Wind.textContent = 'Wind: '+ f5data.list[34].wind.speed + ' MPH'
        day4Humidity.textContent = 'Humidity: '+ f5data.list[34].main.humidity + '%'

      }
      var archiveCity1 = document.createElement('button');
        archiveCity1.textContent = selectedCity;
        archive.appendChild(archiveCity1);
        archive.addClass('col-12')

        archiveCity1.addEventListener('click', function(){

        })
    });
  });
}

choiceBtn.addEventListener("submit", callWeather);
function dataRetriever() {
  
}


var currentDay = document.getElementById('')
// create previous button section that houses previously viewed cities that once clicked will populate information again

// create function that get data for temp and appeneds to all cards
// create a functiont that gets data for widn and appends to all cards
// create function that gets data for humidity and appends to all cards
// display dates on cards
// Id sections that I want information to append to
// dayjs ?
