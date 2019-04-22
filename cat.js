module.exports = function(file) {
	const fs = require('fs');
	fs.readFile(`./${file}`, 'utf8', (err, files) => {
		if (err) {
			throw err;
		} else {
			process.stdout.write(files);
			process.stdout.write('\nprompt > ');
		}
	});
};
