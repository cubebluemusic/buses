const http = require('http');
const hostname = 'leia.cs.spu.edu';
const port = 3017;	// Use YOUR port number

var stops = require("./buses.json"); // Once for all times

const server = http.createServer(function ServerHandler(request, response) {

    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
    response.write(
        '<!DOCTYPE html> \n' +
        '<html lang="en"> \n' +
        '        <head> \n' +
        '               <meta charset="utf-8"> \n' +
        '               <meta http-equiv="X-UA-Compatible" content="IE=edge"> \n' +
        '               <meta name="viewport" content="width=device-width, initial-scale=1"> \n' +
        '               <meta name="description" content="Home Page"> \n' +
        '               <meta name="author" content="Carlos Arias"> \n' +
        '               <script type="text/javascript" src="http://leia.cs.spu.edu/~cubebluemusic/buses/js/buses.js"></script> \n' +
        '               <title>Class Activity #2</title> \n' +
        '               <!-- Bootstrap core CSS --> \n' +
        '               <link href="http://leia.cs.spu.edu/bootstrap/css/bootstrap.min.css" rel="stylesheet"> \n' +
        '       </head> \n' +
        '        <body> \n' +
        '               <div class="container" style="text-align: center"> \n' +
        '               <h1>Another Example of Node</h1><br> \n'

    );
    var currentDate = new Date();
      response.write(
          '               <p>Current time is: ' + currentDate + '</p>\n\n'
      );
      response.write(
          '<div class="form-group"> \n' +
          '<label for="stopId">Select Bus Stop ID:</label> \n' +
          '<select class="form-control" id="stopId"> \n'
      );
      for (var stop in stops["BusStopIds"]) {
          response.write(
              '<option value="' + stops["BusStopIds"][stop] + '">' + stops["BusStopIds"][stop] + '</option> \n'
          );
      }


      response.write(
          '</select> <br>\n' +
          '<button type="button" class="btn btn-primary form-control" onclick="QueryNextBuses()">Next Buses</button> \n' +
          '</div> <br> \n'
      );
      response.write(
          '               <div class="jumbotron" id="output"> </div>\n'
      );
      response.write(
          '       </body> \n' +
          '</html> \n'
      );
      response.end();
  });

  server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
  });
