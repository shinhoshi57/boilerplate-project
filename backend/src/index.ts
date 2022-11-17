import app from './app/app';
import http = require('http');
var PORT = 8000;
http.createServer(app).listen(PORT);
console.log('API running in port '+ PORT);