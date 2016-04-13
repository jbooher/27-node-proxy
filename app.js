import http from 'http';
import url from 'url';

let server = http.createServer(function(req, res) {

  let parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/") {
    res.write("<h1>You're on the root page!</h1>");
    res.end();
  }
  else {
    res.write("<h1>You're on the other page!</h1>");
    res.end();
  }

});

server.listen(8000);
