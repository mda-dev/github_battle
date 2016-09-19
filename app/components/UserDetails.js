var React = require('react');
var PropTypes = React.PropTypes

function UserDetails (user) {
	return (
		<div>
			{!!user.score && <li className={"list-group-item list-group-item-" + user.headerBg}><h3>Score: {user.score}</h3></li>}
			<li className="list-group-item list-group-item-info"> <img src={user.info.avatar_url} className="img-rounded" style={{maxWidth: 150+'px'}}/></li>
			{user.info.name && <li className="list-group-item list-group-item-info">Name: {user.info.name}</li>}
			<li className="list-group-item list-group-item-info">Username: {user.info.login}</li>
			{user.info.location && <li className="list-group-item list-group-item-info">Location: {user.info.location}</li>}
			{user.info.company && <li className="list-group-item list-group-item-info">Company: {user.info.company}</li>}
			<li className="list-group-item list-group-item-info">Followers: {user.info.followers}</li>
			<li className="list-group-item list-group-item-info">Following: {user.info.following}</li>
			<li className="list-group-item list-group-item-info">Public Repos: {user.info.public_repos}</li>
			{user.info.blog && <li className="list-group-item list-group-item-info">Blog: <a href={user.info.blog}> {user.info.blog}</a></li>}
		</div>
	)
}

UserDetails.propTypes = {
	score: PropTypes.number,
	info: PropTypes.shape({
		avatar_url: PropTypes.string.isRequired,
		blog: PropTypes.string,
		company: PropTypes.string,
		followers: PropTypes.number.isRequired,
		following: PropTypes.number.isRequired,
		location: PropTypes.string,
		login: PropTypes.string.isRequired,
		name: PropTypes.string,
		public_repos: PropTypes.number.isRequired,
	})
}

module.exports = UserDetails;