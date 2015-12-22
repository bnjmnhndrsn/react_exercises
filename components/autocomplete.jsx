var React = require('react');

var Autocomplete = React.createClass({
    getInitialState: function(){
        return {
            showList: true,
            query: ''
        }
    },
    _getFilteredData: function(){
        var query = this.state.query;
        return this.props.data.filter(function(item){
            return !!item.match(query);
        });
    },
    openMenu: function(e){
        this.setState({showList: true});
    },
    handleClick: function(e){
        this.setState({
            query: e.target.innerText,
            showList: false
        });
    },
    handleChange: function(e){
        this.setState({query: e.target.value});
    },
    render: function () {
        var results = this._getFilteredData().map(function(datum, i){
            return <li onClick={this.handleClick} key={i}>{datum}</li>;
        }.bind(this));
        
        var menu = this.state.showList ? <ul>{results}</ul> : null;
        
        return (
            <div>
                <input value={this.state.query} type="text" onChange={this.handleChange} onClick={this.openMenu}/>
                {menu}
            </div>
        );
    }
});

module.exports = Autocomplete;