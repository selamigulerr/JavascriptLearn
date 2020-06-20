function merhaba(name="bilgi yok",age="bilgi yok"){


    console.log(`isim: ${name} Yaş: ${age}`);
}

merhaba("selami",24);
merhaba();

function square(x){
    return x*x;
}
function cube(x){
    return x*x*x;
}
let a = square(12);
a = cube(a);
console.log(a);

 const function_expression = function(name){
     console.log("merhaba"+name);
 };
 function_expression("selami");

 // IIFE Tanımlandığı yerde çalışan fonksiyonlar
(function (name) {
    console.log("merhaba:"+name);
})("selami");

const database = {
    host : "localhost",
    add : function(){
        console.log("eklendi");
    },
    get: function(){
        console.log("elde edildi");
    },
    update: function(id){
        console.log(`id : ${id} güncellendi`);
    }
}
database.update(10);