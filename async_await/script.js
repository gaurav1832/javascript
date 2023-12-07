//!JavaScript is a synschonous threaded language

//*async function always return a promise

async function getdata() {
  return "async await"; // this function gets the data and wrap it inside a Promise and return it
}

const data = getdata(); // Promise
console.log(data);

//How to get data from Promise
data.then((resp) => console.log(resp));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 10000);
});

// async function getdata2() {
//   p.then((resp) => console.log(resp));
// }
// getdata2();

//!async with await
//* await can only be used inside an async function
//* How async await is diff from handling a promise in a normal way -

// async function handlePromise() {
//   const val1 = await p1;
//   console.log(val1);

//   const val2 = await p2;
//   console.log(val2);
// }
// handlePromise();

const API_URL = "https://api.github.com/users/gaurav1832";

// async function handleFunction() {
//   const data = await fetch(API_URL);
//   const jsonvalue = await data.json();
//   console.log(jsonvalue);
// }
// handleFunction();

//!ERROR Handling in async await - try catch

async function handleFunction() {
  try {
    const data = await fetch(API_URL);
    const jsonvalue = await data.json();
    console.log(jsonvalue);
  } catch (err) {
    console.log(err);
  }
}
handleFunction();

/*
//* Interview Questions:

 What is async await ?  - async is a keyword which is used with a function aned async functions are a different thing,
 await can only be used inside an async func

 //* What should we use async await or .then / .catch - both are better just a way of writing , async await is simpler to understand instead if using multiple .then 
*/
