var React = require('react');
var transparentBg = require('../styles').transparentBg;
var PropTypes = React.PropTypes;

function Prompt(props) {
	return (
		<div className="jumbotron col-sm-4 col-sm-offset-4 text-center" style={transparentBg}>
			<div className="page-header">
			<h1>{props.header}</h1>
			</div>
			<div className="col-sm-12">
				<form onSubmit={props.onSubmitUser} >
					<div className="form-group">
						<div className="input-group">
							<span className="input-group-addon" id="basic-addon1">
								<i className="fa fa-user" aria-hidden="true"></i>
							</span>
							<input 
								className="form-control"
								placeholder="Github username"
								onChange={props.onUpdateUser}
								value={props.username}
								type="text" />
						</div>
					</div>
					<div className="form-group col-sm-6 col-sm-offset-3">
						<button 
							className="btn btn-block btn-success"
							type="submit">
							Contine <i className="fa fa-arrow-right" aria-hidden="true"></i>
						</button>
					</div>
				</form>
			</div>
		</div>	
	);
}

Prompt.propTypes = {
	header: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	onSubmitUser: PropTypes.func.isRequired,
	onUpdateUser: PropTypes.func.isRequired
}

module.exports = Prompt;