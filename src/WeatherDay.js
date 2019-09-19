const WeatherDay = async () => {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?id=3435907&lang=es&units=metric&appid=bbf8e3e4e4b29b00771fc2b9882c2114')
  const json = await response.json()

  const temp = json.main.temp
  const humidity = json.main.humidity
  const description = json.weather[0].description
  const icon = json.weather[0].icon

  console.log(temp)

  let template = await `
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="http://openweathermap.org/img/wn/${icon}@2x.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1 class="title"><strong>Temperatura: ${temp} ºC</strong></p>
          <h2 class="subtitle">Húmedad: ${humidity} %</h2>
          <p>${description}</p>
        </div>
      </div>
    </article>
  `

  return resolve(template)
}

export default WeatherDay()