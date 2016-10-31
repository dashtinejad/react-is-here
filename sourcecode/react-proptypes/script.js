var AppComponent = React.createClass({
    render: function () {
        return <h1>Hello {this.props.name}</h1>;
    },

    propTypes: {
        name: React.PropTypes.string.isRequired
    }
});

ReactDOM.render(<AppComponent />, document.getElementById('app'));