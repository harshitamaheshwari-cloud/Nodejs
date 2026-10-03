// type user = {
//     name?: string;  
//     id: number;
//     email: string;
//     password: string;
// }

// let userData = (user:Partial<user>) => {
//     console.log(user);
// }


// let userData1 = (user:Required<user>) => {
//     console.log(user);
// }

// let userData2 = (user:Pick<user, 'name' | 'email'>) => {
//     console.log(user);
// }

// let userData3 = (user:Omit<user, 'password'>) => {
//     console.log(user);
// }


type user = {
    id:number;
    name:string;
    address:Address[];
    post:Post[];
}

type Address = {
    street:string;
    city:string;
    country:string;
}

type Post = {
    id:number;
    title:string;
    text:string;
    pictures:Picture[];
}

type Picture = {
    id:number;
    url:string;
    description:string;
}



// function getData<A>(user:A): A{
// }