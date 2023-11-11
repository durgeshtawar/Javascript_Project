let user_input = document.querySelector('input');
let btn = document.querySelector('button');
let icon = document.querySelector('.icon');
let weatherData = document.querySelector('.weather');
let temperature = document.querySelector('.temp');
let desc = document.querySelector('.description');



btn.addEventListener('click', ()=>{
    let city = user_input.value
    getWeatherData(city)
});

const getWeatherData =async(city)=>{
    const response=  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`4f20c98e7fd82b290085aff988ad366f`}&units-metric`)
  const data =  await response.json()
  console.log(data);
 
  const weathericon = data.weather[0].icon
  icon.innerHTML = `<img src=${`https://openweathermap.org/img/wn/${weathericon}.png`} alt="weatherimage" /> `

  const cityName = data.cityName
  const countryName = data.sys.country
  city.innerHTML = `${cityName}, ${countryName}`
 const tempdata = data.main.temp
 temperature.innerHTML = `{tempdata} °C`

 const weatherdesc = data.weather[0].desc
 desc.innerHTML = `${weatherdesc}`
 }