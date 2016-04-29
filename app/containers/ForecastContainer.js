var React = require('react');
var getCurrentWeather = require('../helpers/api').getCurrentWeather;
var getForecast = require('../helpers/api').getForecast;
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      forecastData: {}
    }
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentDidMount: function () {
    this.makeRequest(this.props.routeParams.city)
  },
  componentWillReceiveProps: function (nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  },
  makeRequest: function (city) {
    getForecast(city)
      .then(function (forecastData) {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
      }.bind(this));
  },
  handleClick: function (weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  },
  render: function () {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        handleClick={this.handleClick}
        forecastData={this.state.forecastData} />
    )
  }
});

module.exports = ForecastContainer;