const WeatherForecast = async () => {
  const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?id=3435907&lang=es&units=metric&appid=bbf8e3e4e4b29b00771fc2b9882c2114')
  const data = await response.json()
  
  console.log(data.list)
  
  document.getElementById('debug').innerHTML = `
  <pre class="is-size-4">
    ${JSON.stringify(data.list, null, 2)}
  </pre>
  `
  
}

export default WeatherForecast()