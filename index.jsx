var React = require('react');
var ReactDOM = require('react-dom');
var MyComponent = require('./components/hello_world.jsx');
var Autocomplete = require('./components/autocomplete.jsx');
var WeatherClock = require('./components/weather-clock.jsx');
var Tabs = require('./components/tabs.jsx');

var data = [
    'apples',
    'oranges',
    'tree',
    'pear',
    'grapefruit',
    'asadf'
];

var data = [
  {
    content: 'aijsviasiasmioamibomadiofbmiodfmogas aseat 2323 23',
    title: 'An Ardvark'
  },
  {
    content: '23r4232 2sas4e w4 asoeapmaspa pw3po omm asndismivms',
    title: 'Blue Bees'
  },
  {
    content: 'm0 mk z302 23o20 o3-23 2]2;3r2] 3[le.f[pself[p a[p3w[a[pw3k ta[a]]]]]]]',
    title: 'Chill Cows'
  }
];

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Tabs data={data} />, document.getElementById('main'));
});
