const js = import('./node_modules/@ericlee33/hello-wasm/hello_wasm.js');
js.then((js) => {
  js.greet('WebAssembly');
});
