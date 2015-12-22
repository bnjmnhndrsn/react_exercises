var MyComponent = require('.components/hello_world');
var Autocomplete = require('.components/autocomplete');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyComponent />, document.getElementById('main'));
});