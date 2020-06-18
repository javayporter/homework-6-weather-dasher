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
        $(".temperature").text("Temperature (K): " + response.main.temp);
        // $(".uv-index").text("Uv Index: " + response.main.uv)

    });

   
};

dashButton.addEventListener("click", function(event) {
    event.preventDefault();
    getWeather();
});


localStorage.setItem("cityEntered", JSON.stringify(city));

// $("#dash-button").on("click", getWeather());
