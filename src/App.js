import AppHeader from './AppHeader.js'
import WeatherDay from './WeatherDay.js'

const App = () => {
  return `
    <section class="hero is-fullheight is-warning">
      ${AppHeader}
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns">
            <div class="column"></div>
            <div class="column" id="WeatherDay"></div>
            <div class="column"></div>
          </div>

          <div class="columns">
            <div class="column">
              First column
            </div>
            <div class="column">
              Second column
            </div>
            <div class="column">
              Third column
            </div>
            <div class="column">
              Fourth column
            </div>
          </div>

        </div>
      </div>
    </section>
  `
}

export default App()