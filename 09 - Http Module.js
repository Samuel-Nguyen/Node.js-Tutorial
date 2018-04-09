/* Http request Module */
// The following example demonstrates how to create an http request with Node.js
const http = require('http');

const makeRequest = function (message) {
    // Define the options for the http request
    const options = {
        host: 'localhost', port: 8080, path: '/', method: 'POST',
    };

    // Initialize the request
    const request = http.request(options, function (response) {
        // Specifies the callback function when data gets received
        response.on('data', function (data) {
            // In this case, logs the response body
            console.log(data.toString());
        });
    });
    // Begins the request
    request.write(message);
    // Finish the request
    request.end();
};
// Declare the global function
module.exports = makeRequest;

/*
 To run, go to "8 - Module Loader"
 */
