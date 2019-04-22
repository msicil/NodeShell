module.exports = function(url) {
	const request = require('request');
	request(url, function(err, response, body) {
		if (err) {
			throw err;
		} else {
			process.stdout.write('body:', body); // Print the HTML for the Google homepage.
		}
	});
};
