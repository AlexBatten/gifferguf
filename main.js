import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Giffer!</h1>
    <div>
        <img src="https://media3.giphy.com/media/1ET7hRlCcZLuE/giphy.gif" alt="jif vs gif">
    </div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p> this site is a test of how javascript, css and html can work together</p>
  </div>
`

setupCounter(document.querySelector('#counter'))
