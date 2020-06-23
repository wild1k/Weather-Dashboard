       
       
       
    function currentWeather(citySearch) {
   
       
       
     
    
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=0f0ff44f9855a128ad820b3c8620b6db&units=imperial";


        //runs the url and apikey to get the info
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        //gives the information of city name
        $("#cityHistory").text(response.name);
        
        //current temp
        $("#temp").text(response.main.temp);
        $("#humidity").text(response.main.humidity);
        $("#windSpd").text(response.wind.speed)

       
       
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=0f0ff44f9855a128ad820b3c8620b6db&lat=" +  response.coord.lat   +"&lon=" + response.coord.lon,
            method: "GET"
          }).then(function(response) {
              //gives the information of city name
              
              $("#uvIdx").text(response[0].value);
              
              
             })

             

             $.ajax({
                url: "http://api.openweathermap.org/data/2.5/forecast?q=" + response.city.name + "&appid=0f0ff44f9855a128ad820b3c8620b6db",
                method: "GET"
              }).then(function(response) {
                  
                  

                  $("#temp1").text(response.main.temp[0]);
                   console.log("#temp1")
                  
                 })

                 //try to get info on the cards and pull city name
    








})   }
            
//this function handles finding city weather when submit button is clicked
        $("#enter").on("click", function(event){
        //     //prevents submit button from refreshing the page
            event.preventDefault();
            //calls the info for the city put in the search bar
            currentWeather($("#citySearch").val())
            //puts the name of the city below the search bar
        //    $("#citySearch").prepend("#cityHistory")

        //      let currentCity = $("#currentCity")
        //     $("#citySearch").append("#currentCity")

            // $(currentCity).textcontent =
           

    })
    

