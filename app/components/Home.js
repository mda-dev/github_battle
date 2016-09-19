var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer')

var Home = React.createClass({
	render: function(){
		return(
			<MainContainer>
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
			</MainContainer>
		)
	}
});

module.exports = Home;