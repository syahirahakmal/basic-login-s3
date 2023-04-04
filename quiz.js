let dBusers=[
{

    username: "soo",
    password: "12345",
    name: "soo",
    email: "soo@utem.edu.my"
},
{
    username: "syahirah",
    password: "syahirahtomyam",
    name: "syahirah",
    email: "syahirahsaupi3007@gmail.com"
},
{
    username: "amir",
    password: "amircute",
    name: "amir afzal",
    email: "amirwin966@gmail.com"
},
]
function login(reqUsername, reqPassword){

    //let matchUser= dBusers.find( user => user.username == reqUsername)  //   => means 
    let matchUser= dBusers.find (
        
        x => x.username == reqUsername)


    if(!matchUser) return "User not found !"
    if(matchUser.password==reqPassword){
        return matchUser
    } 

    else {
        return "Invalid password"
    }
}

function register(RegUsername,RegPassword,RegName, RegEmail, RegPhonenum){

    dBusers.push({

        username: RegUsername,
        password: RegPassword,
        email: RegEmail,
        name: RegName,
        phonenumber: RegPhonenum
    })
}

console.log(login("soo", "12345")) //try to login
console.log(login("utem", "kucing123"))

console.log(register("utem","kucing123","FKEKK", "utem@edu.my", "010-3927174"))

console.log(login("utem", "kucing123"))


