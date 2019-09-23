import WeatherDay from './WeatherDay.js'
import WeatherForecast from './WeatherForecast.js'
import useBackgroundTimeOfDay from './useBackgroundTimeOfDay.js'

const App = () => {
  return `
    <section class="hero is-fullheight has-background ${useBackgroundTimeOfDay}">
      <div class="hero-head">
        <nav class="navbar">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src="public/logo.png" alt="Weather New Style">
            </a>
            <h1 class="title navbar-item has-text-white">Weather New Style</h1>
          </div>
        </nav>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns">
            <div class="column"></div>
            <div class="column" id="WeatherDay">
              <a class="button is-large is-text is-warning is-loading">Loading ...</a>
            </div>
            <div class="column"></div>
          </div>

          <div class="columns" id="WeatherForecast">
            <a class="button is-large is-text is-warning is-loading">Loading ...</a>
          </div>

        </div>
      </div>
    </section>
  `
}

export default App()