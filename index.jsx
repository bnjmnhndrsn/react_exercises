var React = require('react');
var ReactDOM = require('react-dom');
var MyComponent = require('./components/hello_world.jsx');
var Autocomplete = require('./components/autocomplete.jsx');
var WeatherClock = require('./components/weather-clock.jsx');

var data = [
    'apples',
    'oranges',
    'tree',
    'pear',
    'grapefruit',
    'asadf'
];

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<WeatherClock />, document.getElementById('main'));
});
