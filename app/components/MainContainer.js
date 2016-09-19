var React = require('React');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var transparentBg = require('../styles').transparentBg;

function MainContainer(props){
	return(
		<div className="jumbotron col-sm-8 col-sm-offset-2 text-center" style={transparentBg}>
			{props.children}
		</div>
	);
}
module.exports = MainContainer;