#!/usr/bin/env node
/**
 * Consumes TAP file and sends an email in case of failed tests
 **/
var VERSION = require('../package').version,
	commander = require('commander'),
	tapEater = require('../lib/tap-eater');

// parse CLI options
// @see http://visionmedia.github.io/commander.js
commander
	.version(VERSION)
	//.option('-t, --email-to [value]', 'Email address to which failed test report will be sent')
	//.option('-f, --email-from [value]', 'Email address from which failed test report will be sent')
	//.option('-s, --email-subject [value]', 'The subject of an email')
	.option('-v, --verbose', 'Log each test entry and details')
	.parse(process.argv);

var eater = new tapEater();
eater.setVerbose(commander.verbose);

// run
eater.eat(process.stdin, function(err, report) {
	//console.log(JSON.stringify(report, null, 2));
	process.exit(err);
});
