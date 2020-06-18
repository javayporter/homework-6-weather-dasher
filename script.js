var apiKey = "ecf05eb98aee0572391da1c4901b75ec";
var cityEntered = document.getElementById("enter-city").text;

$("#dash-button").on("click", getWeather());

function getWeather() {
    var apiCall = "https://api.openweathermap.org/data/2.5/weather?q=" + cityEntered + "&appid=" + apiKey;

//AJAX Call

$.ajax({
    url: apiCall,
    method: "GET",
})

    .then(function(response) {
        
        // Log the apiCall
        console.log(apiCall)

        //Log response object
        console.log(response);

        // Transfer content to HTML
        $(".city").text(response.name + " Weather Details");
        $(".wind-speed").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temperature").text("Temperature (K) " + response.main.temp);
        // $(".uv-index").text("Uv Index: " + response.main.uv)

    });

   
};
