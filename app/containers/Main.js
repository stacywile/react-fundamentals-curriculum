var React = require('react');
var styles = require('../styles/index.js');

var Main = React.createClass({
  render: function () {
    return (
        <div style={styles.container}>
        <h1 style={styles.title}>Enter a City and State</h1>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;