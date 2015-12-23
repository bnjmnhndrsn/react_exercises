var React = require('react');


var Clock = React.createClass({
    getInitialState: function(){
        return {
            time: new Date()
        };
    },
    componentDidMount: function(){
        setInterval(function(){
            this.interval = this.setState({time: new Date()});
        }.bind(this), 50);
    },
    componentWillUnmount: function(){
        clearInterval(this.interval);
    },
    render: function(){
        return <span>{this.state.time.toString()}</span>;
    }
});

var WeatherWidget = React.createClass({
    getInitialState: function(){
        return {
            temperature: null,
            status: 'loading'
        };
    },
    baseParams: ['appid=645c5d39c7603f17e23fcaffcea1a3c1', 'units=imperial', 'callback=weatherCallback'],
    _getUrl: function(lat, lon){
        var root = 'http://api.openweathermap.org/data/2.5/weather?';
        var params = this.baseParams.concat([
            'lat=' + lat,
            'lon=' + lon,
        ]);
        return root + params.join('&');
    },
    componentDidMount: function(){
        navigator.geolocation.getCurrentPosition(function(position){
            this.getCurrentWeather(position.coords.latitude, position.coords.longitude);
        }.bind(this));
    },
    onWeatherLoad: function(data){
        this.setState({
            temperature: data.main.temp,
            status: 'loaded'
        });
    },
    getCurrentWeather: function(lat, lon){
        var url = this._getUrl(lat, lon);
        var self = this;
        window.weatherCallback = this.onWeatherLoad.bind(this);
        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            eval(request.responseText);
          } else {
              self.setState({status: 'error'});
          }
        };

        request.onerror = function() {
            self.setState({status: 'error'});
        };

        request.send();
    },
    render: function(){
        var text;
        switch(this.state.status) {
            case 'loaded':
                text = this.state.temperature;
                break;
            case 'error':
                text = 'error';
                break;
            case 'loading':
                text = 'loading'
                break;
        }
        return <div>{text}</div>;
    }
});

var WeatherClock = React.createClass({
    render: function(){
        return (
            <div>
                <Clock />
                <WeatherWidget />
            </div> 
        );
    }
});

module.exports = WeatherClock;
