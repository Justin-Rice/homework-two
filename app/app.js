
function getWeather(cityZip){
    $("#content #WeatherContainer").html(``);

    //each day of the week 
    // $.get(`http://api.weatherapi.com/v1/current.json?key=6d9495112b8448b4a22202948211309&q=${cityZip}&aqi=no
    $.get(`http://api.weatherapi.com/v1/forecast.json?key=2d6c3cdfeee14008b4e153345211509&q=${cityZip}&days=8&aqi=no&alerts=no
    `, function(data){
    console.log(data.forecast);
    $.each(data.forecast.forecastday, function(idx, days){

        // $("#content #WeatherContainer").html(`<p>${days.astro.sunrise}</p>`);
        $("#content #WeatherContainer").append(`
        <div class="day">
        <h1></h1>
        <h2>Weather Forecast for: ${days.date}</h2>

        <div class="condition">
            <h3>${days.day.condition.text}</h3>
            <img src="${days.day.condition.icon}"/>
        </div>

        <h4>High: <span>${days.day.maxtemp_f}&#176;F</span> 
        &nbsp 
        low: <span>${days.day.mintemp_f}&#176;F</span></h4>
        <h4>High: <span>${days.day.maxtemp_c}&#176;C </span>
        &nbsp 
        low:<span> ${days.day.mintemp_c}&#176;C </span></h4>
        <h5> Temprature Average: <span>${days.day.avgtemp_f} F</span> / <span>${days.day.avgtemp_f} C</span> </h5>
        <h5>Average Humidity: <span>${days.day.avghumidity}%</span></h5>
        <h5>Chance of Rain: <span>${days.day.daily_chance_of_rain}%</span></h5>
        <h5>Maximum Windspeed: <span> ${days.day.maxwind_mph} MPH </span> /<span> ${days.day.maxwind_kph} KPH</span> </h5>
        <h5>Visibility: <span>${days.day.avgvis_miles} M </span> / <span>${days.day.avgvis_km} Km</span></h5>
        <h5>Expected Precipitation: <span>${days.day.totalprecip_in} in</span> /  <span>${days.day.totalprecip_mm} mm</span></h5>
        <h5>Time of Sunrise: <span>${days.astro.sunrise}</span></h5> <h5>Time of Sunset: <span>${days.astro.sunrise}</span></h5>
       

        

        </div>
        
        `)

        return(idx !== 6);
    })

    
    }).fail(function(e){
        console.log(e);
    });
}
function addEventListener(){
    $("#submit").click(function (e){
        e.preventDefault();
        let cityZipName= $("#cityZip").val();
        console.log(cityZipName)
        getWeather(cityZipName);
    })
   
}


$(document).ready(function () {
    addEventListener();


});