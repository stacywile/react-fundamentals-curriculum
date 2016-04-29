var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index.js');

function Detail(props) {
    return(
        <div>
        <p>{props.city}</p>
        <p>{props.weather.weather[0].description}</p>
        <p>min temp: {props.weather.temp.min} degrees</p>
        <p>max temp: {props.weather.temp.max} degrees</p>
        <p>humidity: {props.weather.humidity}</p>
        </div>
    )
}


module.exports = Detail;