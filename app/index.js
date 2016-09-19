var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes')
var Raven = require('raven-js');

var sentryKey = '860b3a8179204c209023fc33b3d28293';
var sentryApp = '99627';
var sentryURL = 'https://' + sentryKey +'@sentry.io/' + sentryApp;

var _APP_INFO = {
	name: 'Battle',
	branch: 'react tut',
	version: '1.0'
}

Raven.config(sentryURL, {
	release : _APP_INFO.version,
	tags:{
		branch: _APP_INFO.branch,
	}
}).install()

ReactDOM.render(routes , document.getElementById('app'));