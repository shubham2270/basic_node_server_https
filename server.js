const http = require("http");
const dt = require("./myfirstmodule");
const fs = require("fs");

http
  .createServer(function (req, res) {
    switch (req.url) {
      case "/":
        fs.readFile("./index.html", (err, data) => {
          if (err) throw err;
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
        break;
      case "/about":
        fs.readFile("./about.html", (err, data) => {
          if (err) throw err;
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
        break;
      case "/contact-me":
        fs.readFile("./contact-me.html", (err, data) => {
          if (err) throw err;
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
        break;

      default:
        fs.readFile("./404.html", (err, data) => {
          if (err) throw err;
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(data);
        });
        break;
    }
  })
  .listen(8080);
