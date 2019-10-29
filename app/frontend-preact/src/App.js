import { Component, h } from 'preact';

import amberLogo from './assets/amberLogo.png';
import preactLogo from './assets/preactLogo.png';
import './App.css';

import { HelloAmber } from './components/HelloAmber';
import { HelloPreact } from './components/HelloPreact';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={preactLogo} id="preact-logo" alt="Preact Logo" />
          <div />
          <img src={amberLogo} id="amber-logo" alt="Amber Logo" />
        </header>
        <body>
          <div>Preact Amber</div>
          <HelloPreact />
          <HelloAmber />
        </body>
      </div>
    );
  }
}
