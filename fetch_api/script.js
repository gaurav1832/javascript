// let p = fetch("https://goweather.herokuapp.com/weather/Ny");
// p.then((value1) => {
//   return value1.json();
// }).then((value2) => {
//   console.log(value2);
// });

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((apidata) => {
    return apidata.json();
  })
  .then((actualdata) => {
    console.log(actualdata);
  })
  .catch((error) => {
    console.log(error);
  });
