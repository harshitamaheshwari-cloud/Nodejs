// -------------------------  Four Functions------------------------------

/// js code

// const p1 = {
//     productName: "Laptop",
//     price: 10000
// };

// function getProduct(product, quantity) {
//     return product.price * quantity;
// }

// console.log(getProduct(p1, "2"));


// ts code

// const product: { productName: string; price: number } = {
//     productName: "Laptop",
//     price: 10000
// };


// function getProduct(product: { productName: string; price: number }, quantity: number) {
//     return product.price * quantity;
// }

// console.log(getProduct(product, "2")); 



// ---------Example 2----------------------------

// // function getUserName(user) {
//   return user.name;
// }
// which is being used for 200 times in js but the backend changes it to 

// {
//   firstName: "Rahul",
//   lastName: "Sharma"
// }

// JavaScript mein tum:

// user.name

// ke 200 usages manually dhundhoge.

// type User = {
//   name: string;
// };


// -------------------------Example 3----------------------------


// function handlePayment(payment) {
//   if (payment.status === "success") {
//     console.log(payment.transactionId);
//   }

//   if (payment.status === "failed") {
//     console.log(payment.error);
//   }
// }
// ------------------in js 
// handlePayment({
//   status: "success",
//   error: "Payment failed"
// });
// js will work
// type Payment =
//   | {
//       status: "success";
//       transactionId: string;
//     }
//   | {
//       status: "failed";
//       error: string;
//     }
//   | {
//       status: "pending";
//     };
// Ab TypeScript ko rules pata hain:

// success → transactionId required
// failed  → error required
// pending → kuch extra nahi

// So this:

// const payment: Payment = {
//   status: "success",
//   error: "Payment failed"
// };

// TypeScript immediately error dega.



// ------------------Example 4----------------------------

// Suppose food delivery app mein server live updates bhej raha hai.

// Server:

// {
//   type: "DRIVER_LOCATION",
//   latitude: 28.61,
//   longitude: 77.20
// }

// Another event:

// {
//   type: "ORDER_DELIVERED",
//   orderId: "ORD123"
// }

// Frontend:

// socket.onmessage = (event) => {
//   const data = JSON.parse(event.data);

//   if (data.type === "DRIVER_LOCATION") {
//     showDriver(data.latitude, data.longitude);
//   }

//   if (data.type === "ORDER_DELIVERED") {
//     showDelivered(data.orderId);
//   }
// };

// Problem?

// Server developer accidentally changes:

// ORDER_DELIVERED

// to:

// ORDER_COMPLETED

// Frontend is still checking:

// data.type === "ORDER_DELIVERED"

// So suddenly delivery notification doesn't work.

// No syntax error.

// No obvious crash.

// It just stops working.

// TypeScript
// You can define all allowed events:

// type Event =
//   | {
//       type: "DRIVER_LOCATION";
//       latitude: number;
//       longitude: number;
//     }
//   | {
//       type: "ORDER_DELIVERED";
//       orderId: string;
//     };

// Now TypeScript knows:

// DRIVER_LOCATION
//     ↓
// latitude + longitude

// ORDER_DELIVERED
//     ↓
// orderId

// If you write:

// if (event.type === "ORDER_DELIVERED") {
//   console.log(event.latitude);
// }

// TypeScript says:

//  latitude doesn't exist on ORDER_DELIVERED


















// // ----------------------union and intersection -----------------------

// // type employee = {
// //     name: string;
// //     age: number;
// //     role: string;
// // }

// // type employee1 = {
// //     name: string;
// //     age: number;
// //     role: string;
// //     location: string;
// // }

// // type employee2 = employee & employee1;
// // type employee3 = employee | employee1;


// // const a : employee2 = {
// //     name: "Harshita",
// //     age: 30,
// //     role: "Developer",
// //     location: "New York"
// // }

// // const b : employee3 = {
// //     name: "Harsh",
// //     age: 25,
// //     role: "Designer"
// // }

// // console.log(a);
// // console.log(b);

// // -------------------any/never/undefined/unknown-------------------------------
// // let value: any = 10;

// // value = "hello";
// // value = true;
// // value = { name: "John" };

// // console.log(value);

// // let value: unknown = 10;


// // // value = 100;
// // // value = true;
// // console.log(value.toUpperCase());
