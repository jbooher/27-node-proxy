import http from 'http';
import https from 'https';
import httpProxy from 'http-proxy';
import url from 'url';

let proxy = httpProxy.createProxyServer({});

let server = http.createServer(function(req, res) {

  let parsedUrl = url.parse(req.url, true);

  /**
   * We want to proxy our requests to NASA's API,
   * but we need to add our API key as a querystring parameter.
   *
   * 1. Add your API key to parsedUrl.query by adding a
   *    property called api_key to it.
   *
   * 2. Set parsedUrl.search to null. We want to make sure it
   *    uses our querystring params, and if search is set, it
   *    will ignore them.
   *
   * 3. Set req.url to url.format(parsedUrl)
   *
   *    This is how we apply the changes we made
   *
   * 4. You should be able to run npm run nasa and visit localhost:8000
   *    in your browser. At /planetary/apod you should see data for the
   *    Astronomy Picture of the Day.
   */

   // 18jfiqqKkYutf7Rdrc8SwhwyVsnmd5AELMKDLYNQ

   parsedUrl.query.api_key = '18jfiqqKkYutf7Rdrc8SwhwyVsnmd5AELMKDLYNQ';
   parsedUrl.search = null;
   req.url = url.format(parsedUrl);

   proxy.web(req, res, {
     target: 'https://api.nasa.gov',
     agent  : https.globalAgent,
     headers: {
       host: 'api.nasa.gov'
     }
   });


});

server.listen(8000);
