var React = require('react');

var Header = React.createClass({
    handleClick: function(){
        debugger;
        this.props.changeSelection(this.props.idx);
    },
    render: function(){
        var text;
        if (this.props.isSelected) {
            text = <em>{this.props.text}</em>;
        } else {
            text = <span>{this.props.text}</span>;
        }
        return <li onClick={this.handleClick}>{text}</li>
    }
});

var Tabs = React.createClass({
    getInitialState: function(){
        return {
            idx: 0
        }
    },
    changeSelection: function(i){
        this.setState({idx: i});
    },
    render: function(){
        var self = this;
        var body = this.props.data[this.state.idx].content;
        var headers = this.props.data.map(function(datum, i){
            return (<Header 
                        key={i} 
                        idx={i}
                        changeSelection={self.changeSelection} 
                        text={datum.title} 
                        isSelected={i === self.state.idx}
                    />
            );
        });
        return (
            <div>
                <ul>{headers}</ul>
                <article>{body}</article>
            </div>
        )
    }
});

module.exports = Tabs;
