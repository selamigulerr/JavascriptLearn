let value;
const programmer = {
    name:"selami",
    age:25,
    email:"selami.gulerr@gmail.com",
    langs:["Python","Javascript"],
    adress:{
        city:"İstanbul",
        street:"Bahçelievler"
    },
    work:function(){
        console.log("Programcı")
    }
}

value=programmer;
value=programmer.email;

const programmers=[
    {name:"selami"},
    {name:"selçuk"}
];
value=programmers[0];
console.log(value);