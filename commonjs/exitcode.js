// import process from 'node:process';

// console.log("This will print.");
// process.exit(1); // Exits immediately with an error status

// // The code below will NEVER execute
// console.log("This will never print.");




// -----------------with process.exitCode-----------------



// import process from 'node:process';

// // Set the exit code for later
// process.exitCode = 1; 

// // This async operation will still complete perfectly fine
// setTimeout(() => {
//   console.log("This async task will successfully finish!");
// }, 1000);

// Once the timeout finishes and the event loop is empty, 
// the process terminates naturally with exit code 1.