const WeatherForecast = async () => {
  const response = await fetch('https://api.openweathermap.org/data/2.5/forecast/daily?id=3435907&lang=es&units=metric&cnt=4&appid=bbf8e3e4e4b29b00771fc2b9882c2114')
  const data = await response.json()
  
  document.write(`<pre>${JSON.stringify(data, null, 2)}</pre>`)
  
}

export default WeatherForecast()