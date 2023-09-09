const apiKey = "5fdd6b0755a0a8afa899afa99a75d62a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.getElementById("city-name");
const search = document.getElementById("search-btn");
const situationImg = document.getElementById("condition");

const condition = document.getElementById("condition");

let weatherInfo = () =>{
    fetch(apiUrl+city.value+`&appid=${apiKey}`)
    .then((data) => data.json())
    .then((item) => {

        //for sunrise
        let rise = item.sys.sunrise;
        var rise_date = new Date(rise * 1000);
        var r_hours = rise_date.getHours();
        var r_minutes = rise_date.getMinutes();
        if(r_minutes.toString().length==1 || r_minutes.toString().length==0){
            r_minutes = "0"+r_minutes;
        }
        var r_seconds = rise_date.getSeconds();
        if(r_seconds.toString().length==1 || r_seconds.toString().length==0){
            r_seconds = "0"+r_seconds;
        }
        var sunriseTime = r_hours+':'+r_minutes+":"+r_seconds;
        document.getElementById("rise").innerHTML = ": "+sunriseTime;

        //for sunset
        let set = item.sys.sunset;
        var set_date = new Date(set * 1000);
        var s_hours = set_date.getHours();
        var s_minutes = set_date.getMinutes();
        if(s_minutes.toString().length==1 || s_minutes.toString().length==0){
            s_minutes = "0"+s_minutes;
        }
        var s_seconds = set_date.getSeconds();
        if(s_seconds.toString().length==1 || s_seconds.toString().length==0){
            s_seconds = "0"+s_seconds;
        }
        var sunsetTime = s_hours+':'+s_minutes+":"+s_seconds;
        document.getElementById("set").innerHTML = ": "+sunsetTime;
        document.querySelector(".city").innerHTML = item.name;
        document.querySelector(".temp").innerHTML = Math.round(item.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML = item.main.humidity+"%";
        document.querySelector(".wind").innerHTML = item.wind.speed+" km/h";
        
        if(item.weather[0].main =='Clouds'){
            situationImg.src = "images/clouds.png";
        }
        else if(item.weather[0].main =='Clear'){
            situationImg.src = "images/clear.png";
        }
        else if(item.weather[0].main =='Rain'){
            situationImg.src = "images/rain.png";
        }
        else if(item.weather[0].main =='Drizzle'){
            situationImg.src = "images/drizzle.png";
        }
        else if(item.weather[0].main =='Mist'){
            situationImg.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.getElementById("cond").innerHTML = ": "+item.weather[0].main;
    });
}

search.addEventListener("click",weatherInfo);