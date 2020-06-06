var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 3000;

var server = http.createServer(function(req, res){
		res.writeHead(200, {'Content-Type': 'text/html'});
		var index = fs.createReadStream('index.html', 'utf8');
		index.pipe(res);
});


server.listen(port, function(error){
	if (error){
		console.log('error', error);
	}
	else{
		console.log("Server is listening on port 3000");
	}

})