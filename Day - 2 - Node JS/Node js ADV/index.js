const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// Listen for the 'greet' event
myEmitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

// Emit the 'greet' event
myEmitter.emit("greet", "Kunal");
