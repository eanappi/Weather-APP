const WeatherForecast = async () => {
  const response = await fetch('https://api.openweathermap.org/data/2.5/forecast/daily?id=3435907&lang=es&units=metric&cnt=5&appid=bbf8e3e4e4b29b00771fc2b9882c2114')
  const data = await response.json()

  const weekName = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

//document.write(`<pre>${JSON.stringify(data.list[0], null, 2)}</pre>`)

/*
{
  "dt": 1569164400,
  "sunrise": 1569145788,
  "sunset": 1569189354,
  "temp": {
    "day": 20.65,
    "min": 6.85,
    "max": 21.39,
    "night": 6.85,
    "eve": 17.4,
    "morn": 15.81
  },
  "pressure": 1030.88,
  "humidity": 28,
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "cielo claro",
      "icon": "01d"
    }
  ],
  "speed": 2.99,
  "deg": 49,
  "clouds": 0
}

*/


  let template = `
    ${data.list.slice(1).map(forecastDaily => {
      let icon = forecastDaily.weather[0].icon
      let tempDay = forecastDaily.temp.day.toString().slice(0, -1)
      let tempMin = forecastDaily.temp.min.toString().slice(0, -1)
      let tempMax = forecastDaily.temp.max.toString().slice(0, -1)
      let description = forecastDaily.weather[0].description
      let weekDay = weekName[new Date(forecastDaily.dt * 1000).getDay()]

      return `
        <div class="column">
          <div class="card is-transparent-50 is-rounded-25">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="http://openweathermap.org/img/w/${icon}.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">${tempDay} ºC</p>
                  <p class="subtitle is-6">${tempMin} / ${tempMax} ºC</p>
                </div>
              </div>
          
              <div class="content is-capitalized">
                <p>${description}</p>
                <h2 class="subtitle is-6">${weekDay}</h2>
              </div>
            </div>
          </div>
        </div>
      `
    }).join('')} 
  `
  document.querySelector('#WeatherForecast').innerHTML = template
  
}

export default WeatherForecast()









