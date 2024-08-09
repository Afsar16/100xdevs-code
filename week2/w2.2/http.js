// Import the http module
const http = require('http');

// Define the port number to listen on
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response header content type
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the response body
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
