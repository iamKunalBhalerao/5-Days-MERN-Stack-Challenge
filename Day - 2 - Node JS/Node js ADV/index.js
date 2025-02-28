// Events in Node js
/*
const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// Listen for the 'greet' event
myEmitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

// Emit the 'greet' event
myEmitter.emit("greet", "Kunal");
*/

/*
// Buffers in Node js

// Create Buffer of 5 bytes
const myBuffer = Buffer.alloc(5);

// Write Data ti Buffer
myBuffer.write("Hello");

// Read Data fro Buffer
console.log(myBuffer.toString());

// Write Data at a specific offset
myBuffer.write("world", 2);
console.log(myBuffer.toString());

// Accessing Individual bytes
console.log(myBuffer[0]);
*/

// Streams in Node js
/*
const fs = require("fs");

// Create a readable stream from a file
const readStream = fs.createReadStream("new.text");

// Listen for 'data' events (chunks of data)
readStream.on("data", (chunk) => {
  console.log(`Recived ${chunk.length} bytes of data`);
  // process the chunl of data hear
});

// listen for the 'end' event (when the stream is finished)
readStream.on("end", () => {
  console.log("Finished Reading the file");
});

// Listen for error events
readStream.on("error", (err) => {
  console.log(`An error Occured ${err}`);
});
*/

// HTTP in Node js
/*
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("hello World!");
});

server.listen(3000, () => {
  console.log("server is on PORT:3000");
});
*/
