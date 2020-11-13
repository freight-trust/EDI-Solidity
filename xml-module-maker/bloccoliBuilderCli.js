var fs = require('fs');

var builder = require('./XMLBuilder');

var requestedFolder = process.argv[2];

var result = builder(requestedFolder);
process.stdout.write(result);

fs.writeFileSync(__dirname+'/'+requestedFolder+'.js', result);