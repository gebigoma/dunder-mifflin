const 
  http = require('http'),
  fs = require('fs'),
  chalk = require('chalk')

const routes = (req, res) => {
  // if writing one instead of if else
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write("<h1>Hello World!</h1>");
  // res.end(); 
  // es6 syntax below
  const { method, url } = req;
  // making code DRY instead of calling req.method and req.url, have to be existing properties of the object can't make up names, http method is get, patch, etc.
  if (url === '/') {
    fs.readFile('views/index.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end(); 
    })
    } else if (url === "/about.html") {
    fs.readFile('views/about.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();   
    })
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.end("<h1>Sorry, this page doesn't exist!<h1>");
    }

    console.log(method, url)
}


const server = http.createServer(routes);

const port = 3000;
server.listen(port, function() {
  console.log(chalk.green(`Our server is running on port ${port}`));
});