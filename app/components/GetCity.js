var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index.js');

function InputField(props) {
    return(
    <input type='text' style={styles.input} onChange={props.onUpdateCity} value={props.city} placeholder='Deadwood, SD'/>
    )
}

function Button (props) {
  return (
    <button type='button'
      style={styles.button}
      className='btn btn-success'
      onClick={props.onSubmitCity}>
        {props.children}
    </button>
  )
}

function GetCity (props) {
    if (props.direction)styles.city.flexDirection = props.direction;
    return (
        <div style={styles.city}>
            <InputField
              onUpdateCity={props.onUpdateCity}
              city={props.city} />
            <Button
              onSubmitCity={props.onSubmitCity}>
                Get Weather
            </Button>
        </div>
    )
}

GetCity.propTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = GetCity;