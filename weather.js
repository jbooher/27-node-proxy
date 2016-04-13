import http from 'http';
import httpProxy from 'http-proxy';
import url from 'url';

let proxy = httpProxy.createProxyServer({});

let server = http.createServer(function(req, res) {

    let parsedUrl = url.parse(req.url, true);

    parsedUrl.query.APPID = '85849687be057885aacb79986f359ec4';
    parsedUrl.search = null;
    req.url = url.format(parsedUrl);

    proxy.web(req, res, {
        target: 'http://api.openweathermap.org'
    });

});

server.listen(8000);
