var React = require('react');
var ReactDOM = require('react-dom');
var MyComponent = require('./components/hello_world.jsx');
var Autocomplete = require('./components/autocomplete.jsx');

var data = [
    'apples',
    'oranges',
    'tree',
    'pear',
    'grapefruit',
    'asadf'
];

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Autocomplete data={data} />, document.getElementById('main'));
});
