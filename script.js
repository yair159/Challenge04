const fs = require('fs');

fs.readFile('./input.txt', (err,dataFile) => {
	console.time('funchallenge');
	if(err){ console.log('error'); }
	var str1 = dataFile.toString();
	var str2 = dataFile.toString();
	var numOfOpen = str1.split('(').length - 1;
	var numOfClose = str2.split(')').length - 1;
	console.log(numOfOpen - numOfClose);
	console.timeEnd('funchallenge');
})

/*6.326 74*/

