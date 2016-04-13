import http from 'http';
import httpProxy from 'http-proxy';
import url from 'url';
import crypto from 'crypto';

let proxy = httpProxy.createProxyServer({});

let server = http.createServer(function(req, res) {

  let parsedUrl = url.parse(req.url, true);

   parsedUrl.query.apikey = '6e7bd33438a14b84d91097cd3cfc46b5';
   parsedUrl.search = null;
   parsedUrl.query.ts = +new Date();

   let data = `${parsedUrl.query.ts}a75b8543cd3b6f4723ac17e52375628bcf4d8668${parsedUrl.query.apikey}`;
   let hash = crypto.createHash('md5').update(data).digest("hex");

   parsedUrl.query.hash = hash;

   req.url = url.format(parsedUrl);

   proxy.web(req, res, {
     target: 'http://gateway.marvel.com:80'
   });

});

server.listen(8000);
