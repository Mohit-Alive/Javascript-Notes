// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Mohit",
    "full name": "Mohit Kholiya",
    [mySym]: "mykey1",
    age: 20,
    location: "Mohit",
    email: "mohit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "mohit@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "mohit@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());