// // console.log("Hello, World!");


// // function welcome(name : String){
// //     console.log("Hello" + " " +name);
// // }

// // welcome();
// // const user ={
// //     id: Number,
// //     name: String,
// //     email: String
// // }

// // const user1 ={
// //     id: 1,
// //     name: "John Doe",
// //     email: "john.doe@example.com"
// // }
// // console.log(user.id.value);


// // console.log(`User ID: ${user.id}`);
// // console.log(`User Name: ${user.name}`);
// // console.log(`User Email: ${user.email}`);


// type Status = "sucess"|"failed"|"retry";

// function getData(Status : Status){
//     switch(Status){
//         case "sucess":
//             console.log("I am ",Status);
//             break;
//         case "failed":
//             console.log("I am",Status);
//             break;
//         case "retry":
//             console.log("I am",Status);
//             break;
//         default:
//             console.log("I am",Status);
//             break;
//     }
// }

// // console.log(getData("sucess"));
// // console.log(getData("failed"));
// // console.log(getData("passed"));


// // type User = {
// //     id: number;
// //     name: string;
// //     email: string;
// // }

// // type user1 = {
// //     id: number;
// //     location:string
// // }

// // type user2 ={
// //     id:1,
// //     name:"John Doe",
// //     email:"john.doe@example.com"
// // }

// // type user3 ={
// //     id:1,
// //     location:"New York"
// // }


// // type user4 = user2 & user3;
// // console.log(user);

// // type order = {
// //     orderid:string;
// // }

// function getdata(orderid){
//     if(typeof orderid === String){
//         console.log("Order ID is a string:", orderid);
//     } 
//     console.log(orderid);
// }

// console.log(getdata(12345));



// type User = {
//     id: number;
//     name: string;
//     email: string;
// }

// type admin = {
//     id: number;
//     role: string;
// }

// type admin1 = {
//     id: 1;
//     role: "director";
// }


type userRole = 'admin'|'user';


function fun(role:userRole){
    if(role == "admin"){
        console.log("User is an admin");
    } else if(role == "user"){
        console.log("User is a regular user");
    }else{
        console.log(role);
    }
    // console.log(role);
    
}

fun("admin");

