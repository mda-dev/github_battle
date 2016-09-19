var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
	render: function(){
		return(
			<div className="jumbotron col-sm-12 text-center" style={transparentBg}>
				<div className="page-header">
					<h1>Github Battle <small>version 1.0</small> </h1>
				</div>
				<p className="lead">Who is the code master?</p>
				<Link to="/playerOne">
					<button type="button" className="btn btn-lg btn-info">
						<span>Select Players </span>
						<i className="fa fa-arrow-right" aria-hidden="true"></i>  
					</button>
				</Link>
			</div>
		)
	}
});

module.exports = Home;