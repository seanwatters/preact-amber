import { h, render } from 'preact';
import './index.css';
import App from './src/App.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log(App)
  render(h(App), document.getElementById('app'));
})
