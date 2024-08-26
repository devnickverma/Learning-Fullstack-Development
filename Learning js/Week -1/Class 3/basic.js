function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
      // do some async logic here
      resolve("hi there!")
    });
    return p;
  }
  
  async function main() {
    const value = await kiratsAsyncFunction();
    console.log(value);
  }
  
  main();