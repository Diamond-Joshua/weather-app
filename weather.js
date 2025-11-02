const apiKey= '9d345819dce0e7cd50740ae557fa2df0';
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
let input = document.querySelector('input');
let weatherBtn = document.querySelector('button');
let weatherImage = document.querySelector('img');
console.log(weatherImage);
async function weather(city){
  let response = await fetch(apiUrl + city +`&appid=${apiKey}`) ;
  let data = await response.json();
  if (response.status == 404){
    document.querySelector('.error').style.display = 'block'
    document.querySelector('.details').style.display = 'none'
  } else {
    document.querySelector('.city__name').textContent = data.name;
  document.querySelector('.city__temp').textContent = Math.round(data.main.temp) + '°C';
  document.querySelector('.nature__info h2').textContent = data.main.humidity + '%';
  document.querySelector('.wind__speed h2').textContent = data.wind.speed + 'Km/h';
  console.log(data);
  if (data.weather[0].main == 'Clouds') {
    weatherImage.src = 'cloudy.png';
  } else if (data.weather[0].main == 'Rain') {
    weatherImage.src = 'rain.png';
  }else if (data.weather[0].main == 'Drizzle') {
  weatherImage.src = 'drizzle.png';
}else if (data.weather[0].main == 'Clear') {
  weatherImage.src = 'clear.png';
}else if (data.weather[0].main == 'Snow') {
  weatherImage.src = 'snow.png';
}
document.querySelector('.details').style.display = 'block'
document.querySelector('.error').style.display = 'none'
  }
  
}
weatherBtn.addEventListener('click', ()=>{
  weather(input.value)
})