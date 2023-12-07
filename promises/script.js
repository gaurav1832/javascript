const cart = ["pen", "book", "mobile"];

createOrder(cart, function (orderId) {
  processPayment(orderId, function (paynentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWallet();
    });
  });
});

// processPayment(orderId);

const promise = createOrder(cart);

// promise chaining
promise
  .then(function (orderId) {
    return processPayment(orderId); //! always return the promise
  })
  .then(paymentInfo, function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWallet(paymentInfo);
  });

// another way of writing
createOrder(cart)
  .then((orderId) => processPayment(paymentInfo))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWallet(paymentInfo));

const API_URL = "https://api.github.com/users/gaurav1832";

const user = fetch(API_URL); //promise
console.log(user);

user.then(function (data) {
  console.log(data);
});

/*
//* What is a promiese ? 
//*The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//* Why do we use promise ?

1. Before promise we used to depend on callback functions which would result in
 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
2. Inversion of control is overcome by using promise.
  2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
  2.2) A promise has 3 states: pending | fulfilled | rejected.
  2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
  2.4) A promise resolves only once and it is immutable. 
  2.5) Using .then() we can control when we call the cb(callback) function.

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

*/
