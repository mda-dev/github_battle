var React = require('react');
var PropTypes = React.PropTypes;
var MainContainer = require('./MainContainer');

var Loading = React.createClass({
	getDefaultProps: function () {
		return {
			alertClass: 'info',
			append: null
		}
	},

	render: function() {
		return (
			<MainContainer>
				<div className="col-sm-8 col-sm-offset-2">
					<div className="loader"></div>
					<div className={"alert alert-"+ this.props.alertClass} role="alert">
						{this.props.children}
					</div>
				</div>
				{this.props.append}
			</MainContainer>
		);
	}

});

module.exports = Loading;