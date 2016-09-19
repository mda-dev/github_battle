var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
	contextTypes:{
		router : React.PropTypes.object.isRequired
	},

	getInitialState: function(){
		return {
			isLoading : true,
			playersInfo:[]
		}
	},
	componentDidMount: function(){
		var query = this.props.location.query;
		console.log(query);
		//fetch info from github then update state
		githubHelpers.getPlayerInfo([query.playerOne, query.playerTwo])
			.then(function(players){
				this.setState({
					isLoading : false,
					playersInfo : [players[0], players[1]]
				})
			}.bind(this))

	},
	
	handleInitBattle : function(){
		this.context.router.push({
			pathname : '/results',
			state : {
				playersInfo : this.state.playersInfo
			}
		})
	},

	render: function() {
		return (
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				playersInfo={this.state.playersInfo} 
				onInitBattle = {this.handleInitBattle} />
		);
	}

});

module.exports = ConfirmBattleContainer;