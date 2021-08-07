setImmediate(() => {
  console.log("immediate");
});

process.nextTick(() => {
  console.log("nextTick");
});

setTimeout(() => {
  console.log("tiemout");
}, 0);

Promise.resolve().then(() => {
  console.log("promiss");
});
