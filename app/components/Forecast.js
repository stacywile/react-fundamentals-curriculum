var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index.js');
var utils = require('../helpers/utils');
var getDate = utils.getDate;

function DayItem (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div onClick={props.handleClick}>
      <img src={'images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h3>{date}</h3>
    </div>
  )
}

function ForecastUI (props) {
  return (
    <div>
      <h2>{props.city}</h2>
        {props.forecast.list.map(function (listItem) {
          return <DayItem key={listItem.dt} day={listItem} handleClick={props.handleClick.bind(null, listItem)} />
        })}
    </div>
  )
}

function Forecast(props) {
     console.log(props)
  return props.isLoading === true
    ? <div> Loading </div>
    : <ForecastUI city={props.city} forecast={props.forecastData} handleClick={props.handleClick} />

}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}

module.exports = Forecast