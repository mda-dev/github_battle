var React = require('react');
var PropTypes  = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function puke(obj){
	return <pre>{ JSON.stringify(obj, null, ' ')}</pre>

}

function ConfirmBattle(props) {
	return props.isLoading === true
		? 
		// isLoading True
		<Loading>
			<strong>Please Wait!</strong> loading players info from Github. 
		</Loading>
		: 
		// FisLoading Flase
		<MainContainer>
			<h1>Confirm Players</h1>
			<hr className="divider"/>
			<div className="col-sm-8 col-sm-offset-2">
				<UserDetailsWrapper header='Player One'>
					<UserDetails info={props.playersInfo[0]} />
				</UserDetailsWrapper>

				<UserDetailsWrapper header='Player Two'>
					<UserDetails info={props.playersInfo[1]} />
				</UserDetailsWrapper>
			</div>
			<div className="col-sm-8 col-sm-offset-2">
			<hr className="divider"/>
			</div>
			<div className="col-sm-6 col-sm-offset-3">
				<div className="col-sm-12">
					<div className="btn-group btn-group-justified" role="group" aria-label="...">
						<div className="btn-group" role="group">
							<button type="button" onClick={props.onInitBattle} className="btn btn-success"><i className="fa fa-github"></i> Begin Battle!</button>
						</div>
					</div>
					<hr/>
					<div className="btn-group btn-group-justified" role="group" aria-label="...">
						<div className="btn-group" role="group">
							<Link to='/playerOne'>
								<button type="button" className="btn btn-danger"><div><i className="fa fa-refresh"></i> Reselect Players</div></button>
							</Link>
						</div>
					</div>

				</div>
			</div>
		</MainContainer>
	
}
ConfirmBattle.propTypes = {
	isLoading : PropTypes.bool.isRequired,
	playersInfo : PropTypes.array.isRequired,
	onInitBattle : PropTypes.func.isRequired
}

module.exports = ConfirmBattle;