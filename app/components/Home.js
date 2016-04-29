var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index.js');
var GetCityContainer = require('../containers/GetCityContainer');


function Home() {
    return(

        <div style={styles.input}>
        <GetCityContainer />
        </div>

    )
}
module.exports = Home;