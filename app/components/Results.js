var React = require('React');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function StartOverBtn() {
	return(
		<div className="btn-group" role="group">
			<Link to='/playerOne/'>
				<button type="button" className="btn btn-danger btn-lg"><div><i className="fa fa-refresh fa-spin"></i> Reselect players</div></button>
			</Link>
		</div>
	)
}
function Results(props){

	if(props.isLoading === true){

		return(
			<Loading>
				<strong>Please wait, the players are duking it out!</strong>
				<br/>
				This might hurt for one of them...
			</Loading>
		)
	}

	// in case of tie dont continue and render this alert
	if (props.scores[0] === props.scores[1]){
		return(
			<Loading alertClass='danger' append={<StartOverBtn/>} >
					<strong>Holy moly it's a tie!</strong> This doesnt happen very often...
					<br/>
					Are you sure these players are not the same?
					<br/>
					Oh well, that was that, you can start a new game from the button below.
			</Loading>
		)
	}

	// everething worked? good render UI
	var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
	var losingIndex = winningIndex === 0 ? 1 : 0;
	return(
		<MainContainer>
			<UserDetailsWrapper header="Winner!">
				<UserDetails headerBg="success" score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
			</UserDetailsWrapper>

			<UserDetailsWrapper header="Loser!">
				<UserDetails headerBg="danger" score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
			</UserDetailsWrapper>
			<div className="col-sm-6 col-sm-offset-3">
				<hr/>
				<StartOverBtn />
			</div>
		</MainContainer>
	);
}

Results.propTypes ={
	isLoading: PropTypes.bool.isRequired,
	scores: PropTypes.array.isRequired,
	playersInfo: PropTypes.array.isRequired
}

module.exports = Results;