var apiKey = "ecf05eb98aee0572391da1c4901b75ec";
var dashButton =document.querySelector("#dash-button");
var cityEntered = document.querySelector("#enter-city");


function getWeather() {
    var city = cityEntered.value.trim();
    var apiCall = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    
    
   
    


//AJAX Call

$.ajax({
    url: apiCall,
    method: "GET",
})

    .then(function(response) {
        
        // Log the city entered
        console.log(city);
        //Store city in local storage
        localStorage.setItem("city", JSON.stringify(city));

        // Log the apiCall
        console.log(apiCall);

        //Log response object
        console.log(response);

        // Transfer content to HTML
        $(".city").text(response.name + " Weather Details");
        $(".wind-speed").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temperature").text("Temperature (K): " + (response.main.temp) );
        // $(".uv-index").text("Uv Index: " + response.main.uv)

    });

   
};


function getForecast() {
    var city = cityEntered.value.trim();
    var apiCall = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;
    

//AJAX Call

$.ajax({
    url: apiCall,
    method: "GET",
})

    .then(function(response) {
        
        // Log the city entered
        console.log(city);
        //Store city in local storage
        localStorage.setItem("city", JSON.stringify(city));

        // Log the apiCall
        console.log(apiCall);

        //Log response object
        console.log(response);

        // Transfer content to HTML
        //Day 1
        $(".city1").text(response.city.name);
        $(".temperature1").text("Temperature: " + response.list[0].main.temp);
        $(".humidity1").text("Humidity: " + response.list[0].main.humidity);
        $(".date1").text("Date: " + response.list[0].dt_txt);

        //Day 2
        $(".city2").text(response.city.name);
        $(".temperature2").text("Temperature: " + response.list[8].main.temp);
        $(".humidity2").text("Humidity: " + response.list[8].main.humidity);
        $(".date2").text("Date: " + response.list[8].dt_txt);

        //Day 3
        $(".city3").text(response.city.name);
        $(".temperature3").text("Temperature: " + response.list[16].main.temp);
        $(".humidity3").text("Humidity: " + response.list[16].main.humidity);
        $(".date3").text("Date: " + response.list[16].dt_txt);

        //Day 4
        $(".city4").text(response.city.name);
        $(".temperature4").text("Temperature: " + response.list[24].main.temp);
        $(".humidity4").text("Humidity: " + response.list[24].main.humidity);
        $(".date4").text("Date: " + response.list[24].dt_txt);

        //Day5
        $(".city5").text(response.city.name);
        $(".temperature5").text("Temperature: " + response.list[32].main.temp);
        $(".humidity5").text("Humidity: " + response.list[32].main.humidity);
        $(".date5").text("Date: " + response.list[32].dt_txt);
        // $(".temperature").text("Temperature (K): " + response.main.temp);
        // $(".uv-index").text("Uv Index: " + response.main.uv)

    });

   
};

dashButton.addEventListener("click", function(event) {
    event.preventDefault();
    getWeather();
    getForecast();
});


// localStorage.setItem("cityEntered", JSON.stringify(city));

// $("#dash-button").on("click", getWeather());
