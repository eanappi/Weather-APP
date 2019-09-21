const WeatherDay = async () => {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?id=3435907&lang=es&units=metric&appid=bbf8e3e4e4b29b00771fc2b9882c2114')
  const json = await response.json()

  const temp = json.main.temp
  const humidity = json.main.humidity
  const description = json.weather[0].description
  const icon = json.weather[0].icon

  document.querySelector('#WeatherDay').innerHTML = `
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="http://openweathermap.org/img/wn/${icon}@2x.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1 class="title"><strong>${temp} ºC</strong></p>
          <h2 class="subtitle is-capitalized">${description}</h2>
          <p>${humidity} % de húmedad</p>
        </div>
      </div>
    </article>
  `
}

export default WeatherDay()