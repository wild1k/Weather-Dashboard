



function currentWeather(citySearch) {
  //runs the url and apikey to get the info about current weather conditions
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    citySearch +
    "&appid=0f0ff44f9855a128ad820b3c8620b6db&units=imperial";
  
//runs the APi to get history of searched displayed on page
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    //gives the information of city name
    // $("#cityHistory").text(response.name);
 
    
    
    //current temp
    $("#temp").text(response.main.temp);
    $("#humidity").text(response.main.humidity);
    $("#windSpd").text(response.wind.speed);
    $("#currentCity").text(response.name);

 

    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/uvi/forecast?appid=0f0ff44f9855a128ad820b3c8620b6db&lat=" +
        response.coord.lat +
        "&lon=" +
        response.coord.lon,
      method: "GET",
    }).then(function (response) {
      //gives the information of city name
      $("#uvIdx").text(response[0].value)
      
      
      // $("#uvIdx").text(response.value);
      var uvColor = $("#uvIdx").text();
      if (uvColor < 3) {
        $("#uvIdx").css("background-color", "green");
      } else if (uvColor < 6) {
        $("#uvIdx").css("background-color", "yellow");
      } else {
        $("#uvIdx").css("background-color", "red");
      }
      });
      
    });

    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        citySearch +
        "&appid=0f0ff44f9855a128ad820b3c8620b6db",
      method: "GET",
    }).then(function (response) {
    
      var resultWeather = response.list
   for (let i = 0; i< resultWeather.length; i++) {
    var desc = resultWeather[i].weather[i].description
    var temp = resultWeather[i].main.temp
        // $("#desc").text(desc)
        $("#tempFore").text(temp)
    console.log(resultWeather[i].main.temp);
   }
        
        
      
    });

    //try to get info on the cards and pull city name
  };

  $(document).on("click", "cityHistory", function (event){
    
    if ($("enter")=== "click") {
      cities = $("#citySearch").val()
      cities.push(cityLi)
    } else if (li === "click"){
      cities = $("#cityHistory")
    }
cityLi.addClass("list-group-item cityHistory")
cityLi.attr("currentCity", cities[0])



  })

var cities = [];
var cityLi = $("<li>")
function search(city, event) {
  //prevents submit button from refreshing the page
  event.preventDefault();
  //calls the info for the city put in the search bar
  
  // puts the name of the city below the search bar
  cities.push($("#citySearch").val())
  $("#cityHistory").empty()
  .append(cityLi)

  

    for (let i= 0;  i < cities.length; i++) {
    
    cityLi.addClass("list-group-item")
    cityLi.text(cities[i])
    $("#cityHistory").prepend(cityLi)


}
  


}
 
//this function handles finding city weather when submit button is clicked
$("#enter").on("click", function(){
  currentWeather($("#citySearch").val());
  $('#cityHistory').prepend('<li class="list-group-item" onclick="currentWeather(this.innerText)">'+ $("#citySearch").val() +'</li>')
}) 


