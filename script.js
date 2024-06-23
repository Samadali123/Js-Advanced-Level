//1:  higher order funtions  ☑️
//2:  constructor functions ☑️
//3:  first class functions ☑️
//4: new keyword in js ☑️
//5: iife ☑️
//6: prototype ☑️
//7: prototype inheritance ☑️
//8: this  ☑️
//9: call ☑️
//10: apply ☑️
//11:  bind ☑️
//12:  pure functions ☑️
// 13: strict mode in js 
 // !! ☑️
//14: lambda functions ☑️
//15:  currying☑️
//16:  temporal dead zone☑️
//17:  closures
//18: localstorage vs session storage
//19: cookies and sessions


//1: higher order funtions : higher order functions are the functions which accepts a function in  a paramter or returrn a fucntion inside a fucntion or both  that function are called as a higher order functions in javascript..



// function highorder (value){
//     value();
// }

// highorder(function name(){
//     console.log("hello my name is syed samad ali");
// });



// function second(string){
//   return  function(value){
//     console.log(value)
//   }
// }

// second("hello");

// // foreach map  filter these all methods are include in the type of the higher order functions

// // aisa function jo functions  accept krle yah apne andar se ek fucntion ko return krde..




// var arr = [1,2,3,4,5]
// arr.forEach(function(elem){
//     console.log(elem+2)
// })


// constructor fucntions: constructor functions ek esa fucntion hota hai jo khud use me nhi ata hega pr woh apne  differnt differemt instances create krke use krvata hai throught the use of a new keyword ..



// constructor fucntion jab use hota hai jab aapko ek jese propeties wali cheezein banaana ho jisme kuch na kuch cheez comman ho sabhi me toh constructor fucntion ki help se create krte hai js mein ham log..


// constructor function bilkul ek sanche ki tarah hota hai jese aap sanche ko consume nhi krskte ho pr usse banne wle instances use krte hai  jese ki biscuits waghera..

// function biscuitmaker(){
//     this.name  = "oreo";
//     this.color = "blank n white";
//     this.shape = "circle";
//     this.price = "10rs";
// }

// var oreobiscuit = new  biscuitmaker();
// var oreobiscuit2 = new  biscuitmaker();
// var oreobiscuit3 = new  biscuitmaker();

// console.log(oreobiscuit1);
// console.log(oreobiscuit2);
// console.log(oreobiscuit3);





//  function chipsmaker(name, price, flavour){
//     this.name =  name;
//     this.price = price;
//     this.flavour  =  flavour;

//  }

// var chips1 = new  chipsmaker("lays", "10rs", "good");
// console.log(chips1)


// var chips2 = new  chipsmaker("bingo", "20rs", "spicy");
// console.log(chips2)


// var chips3 = new  chipsmaker("madangles", "30rs", "yummy");
// console.log(chips3)

// constuctor function bina new keyword ke nhi banta new keyword ki wjah se hi toh el blank object creat hota hai jisme values hoti hai in the form of a  propety and values..


// first class functions i js :   js me jitne bhi functions hote woh sab fucntions hote hai first class functions hote hai ..


// first class fucntions ek ese fucntions hote hai aaap fnc ko as a value treat krne lago  yah as an argumnet kisi fucntion ko pass krdo in a fucntion ese sabhi fncs js mein kehte hai first class fucntions in the javascript...



// var  firstclassfnc = function(){
// let a = 12;
// let b = 12;

// console.log(a+b);
// }

// firstclassfnc();




// function example (printing){
//     printing();
// }



// example(function(){
//     console.log("heloooooooo")
//     console.log("hiiiiiiiiiiiiiiiiiiiii")
//     console.log("biiiiiiiiiiiiiiiiiiiiiiii")
// })



// new keyword in javascript :  new keyword ek keyword hota hai js mein jo use hota hai ek blannk  object create krne ke liye , new keyword use hota mostyle jab constructor banta hai js mein to create multiple instancesss..




// function newkeywordinjs(){

//     this.age = 20;
//     this.name = "syed samad ali";
//     this.madness = "nextest level";
// }


// var result  = new newkeywordinjs();
// console.log(result)



// iife : immediate invoked fucntion expression , yeh use hota hai fucntion ko  turant chalane ke liye especially or private variables banane ke liye jo har koi use nhi krpaye....



// var ans = (function immediatefnd(){
//      return console.log("helooooooo");
// }) ();




// var ans2 =  (function priavtevaldeclaration(){
//      var privatvalue = 12;
//     return { 
//         getter: function(){
//             console.log(privatvalue);
//         },
      
//         setter: function(newvalue){
//             privatvalue = newvalue;
//             console.log(privatvalue);
//         }

//     }
// }) ();



// prototype : prototype  is already created when you created any object , protoypes contains  many heper functions and methods  which we can use to complete our tasks easily , eg we create an array and we have to find the length of it  so we do array.lemgth  method but lemgth we dont create so where does  it from there is concept called as a  prototype , similar for object we create some properties and some prootype is already build by the javascitpt which is helper functcions and methods for complete the tasks , 

// many methods and properties are already available to use built by javascript  creators inside prototype of an every object....

// like example hasownproperty is not a property weve created in the javascript so this property is also come from the prootype....

// prototype are already built by js properties which helps us to solve the tasks....


// var obj = {
//     name: "syed samad ali",
//     age: 20,
//     college: "sagar institute od research and technology",
//     dress: "formal",
//     faculty: "bsdk",

// }
// console.log(obj);

// prototype inheritance:  inheritance meand inhertaning properties from the parents is called as a inheritance,like human child inherits properties of a human because its a child of a human and it contains some additional proteries is called as  a prototype inheritance..



// inheritance is basically passing parents features and properties to the childs to to the same thing in js with the help of a prototype ( one extra property always given by the js to every objects ) is called as a protype inheritance.......


// var samad = {
//     surnames: "syeds",
//     gender:  "male",
//     canfly : true,
//     canwalk : true,
//     canjump: true,
//     willdie: true,
// }



// var juniorsamad  = {
//     name: "syed mustajab ali",
//     awesomebodybuilder: true,
// }

// juniorsamad.__proto__ =  samad; // this line transfers all the properties of samad to jr samad //


// this call apply bind in javascript !

// this: this keyword is a special keyword in js which changes its value in differnert context..

// in global scope this  returns  a window


// console.log(this)

// in fucntions scope this  return a widow


// function  windosss(){

//     console.log(this)

// }
// windosss();


// in  method scope this returns a   object which is a parent of that method...

// in any method " this " keyword returns or refers a parent object 
// var obj = {
//     name: "samad",
//     age: 20,
//     somemethod : function(){
//         console.log(this);
//     }
// }

// obj.somemethod();



//  in event listeners :  this keyword  always refers to the one on which event listeners adds , or equal to whatever is written before an event listener..



// var btn = document.querySelector("button");
//  btn.addEventListener("click", function(){
//     console.log(this);
//     this.style.backgroundColor = "red";
//     this.style.color = "white";
//  })


// call and apply and bind :  agar tumhare pass koi fnc hai and koi object hai or woh fnc chalana hai woh jo by default this ki window target krta hai use agar  object ko toh call aplly use hota hai..or bind



// function fnc(){
//     console.log(this);
// }


// var objecte = {age: 20}
// fnc.call(objecte); // yaha fnc ke bracet ke andar woh aygea jis object ko point krvana hooo tumhe...



// function fnc2(val1, val2){
    
//     console.log(this);
//     console.log(val1, val2);
// }

// var objecte2 = {name: "samad"}
// fnc2.call(objecte2 , 12, 24 ,36);



// function fnc3(elem,elem2 ,elem3){
// console.log(this)
// console.log(elem, elem2, elem3);
// }


// var obj3 = {name: "syed samad ali",}
// fnc3.apply(obj3 , [12,24,36] );




// bind 

// function efcd(){
//     console.log(this);
// }

// var ojj = {name: "helooo"}
// var bindedfnc =  efcd.bind(ojj);
// bindedfnc();


// pure functions in js: pure fnc is any fnc which has these 2 features

// it should return same output for same input
// it will never change the value of a global variable


// var name = "syed ";
// function ffff(val){
//     name  = "samad";
//     return Math.random()* val;
// }

// var a1 = ffff(2)
// var a2 = ffff(2)


// types of functions: 
// 1: function  statement 

// function name(){
// console.log("heloo")
// }
// name();


//2: function expression : when you use function as a variable
// var name2 = function(){
//     console.log("expression fucntion")
// }

// name2();

// 3: anonymouse fucntion : anonymouse fucntion woh fucntion hota hai jo fucntion bina kisi naame ke banye jaye

//eg: foreach , map , filter , reduce,sort, callbacks, etc...

// var arrrr = [1,2,3,4,5]
// arrrr.forEach(function(){
//     console.log("helloo anoanymouse fucntuon mere bhai !")
// })

// 4: fat arrow fucntion:
//  var name = ()=>{
//     console.log("fat arrow fucntion !");
//  }
//  name();


 //fat arrow fucntion zyaadtar expression fucntion hai lyoki woh bhi variable me save lkrskte hai apn...
// bas  event listener mein call back function expression fucntion nhi hita hai 


// types of fat arrow fucntion 
// 1: one paramter fat arrow function : yeh woh arrow function jisme aap ek parameter dete ho toh usko fat bracekts remove krslte ho chho tohh...arrrr


// var fatarrowfnc =  a =>{
// console.log(a);

// }
// fatarrowfnc(12)

// 2: fat aroow fucntio with impiicit return  isme fat arrow functon me ham implicity kuch bhi return krkste hau bina  kisi  return keyword ke use kre bina  okay undertand..


// var fatarrowfnc2  = (a,b)=>  a+b;
// console.log(fatarrowfnc(12, 12));


//* strict mode in js: 
// to use strict mode in js use " use strict" in tope of the code.

// "use strict"

//1: in normal mode 
// x = 12; works perfectly

// 1: in strict mode error occurs you should have to declare it dirst before using it.
// x = 12;



//2: in normal mode
// var x  = 3.14;
// delete x;
// no error & doesnt delets


//2: in strict mode
// var x = 3.14;
// delete x;
// error 

// 3: in normal mode
// we can name 2 arguments with same name
// function fnc(a,a){}
// fnc(1,2);

// no error


// 3: in strict mode  we cannot name 2 aguments with same in a fnc
// function fnc2(a,a){}
// fnc2(2,3);

// error for same argumensts


// * !! in js
// !! just do one thing whatever you write it will be converted into its truthy or fasly values

// !! -1;
// !! "samad";
// !!{"name": syedsamadali,}


// * lambda fucntions in js
//  lambda fucntions
//  jo js mein fat arrow fucntions hote hau es6 mein use hi lambda fucntions kehte hai js mein 

// var a = (name) =>{
//    console.log(name)
// }

// a("samad");


// agar fat arrow fucntion me ek params ho toh fat hatha skte hai  uska apn fat hatha skte hai

// var print = a =>{
//   console.log(a)
// }
// print(1)



// fat arrow fucntion me ham bina {} lagaye bina return like return krkste hai agar ek single line statement kuch return krna ho toh...


// var add = (a,b)=> a+b;
// var ans = add(1,2);
// console.log(ans)



//* currying 
// currying :  currying ka concept fucntins ke liye hota hai,  jab bhi hamare pass esa fnc ho jisme ek se zyada params ho,toh use ham simplify krdete hai, ese fnc jismein ek se zyadda params ho use ham series of fnc mein todh dete hai, or har fnc return krta hai ek or fnc jo ki purane fnc ke parms ko use krega...



// curring mein ham ese fnc ko jisme ek se zyada prams ho usko series of fnction mein todh dete hai, or woh series of fnc retun krte hai fnc or us fucntions mein uske upar wale fncs ke params ko use krskte hai



// function add(a,b){
// console.log("sum of a and b is ", a+b);
// }
// add(12,13)




// function parent(a){
//    return function(b){
//      return a+b;
//    }
// }

// var ans = parent(12);
// var finalans = ans(13);

// function parent(a){

//     return function(b){
//         return a*b;
//     }
// }


// var ans = parent(12);
// var finalsns = ans(12);



//* temporal dead zone
//  temporal dead zone
// vars ki help se ham pehle js mein varivales banate the or usme ham varivale baad me baane ke baad bhi pehle use krskte the koi bhi error  nhi atha tha kyoki waha hoisting ka concept lgta tha


// console.log(a) // ans mein undefined print hoga kyoki variable toh hai upar declare hoisting ke concept se pr usme koi value nhi hai use pehele hi access krliya islige undefined ayega not defined yah error nhi ayega

// var a = 12;




// console.log(a); //  jab ham variable banate hai let ke help se js mein toh usme hoiting ka concept nhi lgta hai or refernce error ata hai ,  kyoki us waqt variable temporal dead zone stage mein hota hai...
// let a = 12;



// * closures in js  :everytime  we created a function which return another fucntion , it creates closures ..

// in closures ,ek parent function hota hai jo kuch data yah variables contain krta hai,or yeh data yah variables uska child fcuntions access krskta hai, parent fcuntions hamesha return krta hai ek child fcuntion.



// function closuresss(a){
//     var data = a+2;
//     return function(b){
//              data++;
//     }
// }
// closuresss(12);

//closures mein hamesha jo returning fucntion hota hai woh anonymous hota fnc hota hai us fnc me ham parent fnc ka data/variables ko access krskte hai

// or jo return wala fnc hota hai parent fnc ki values ko access or change dono krskta  hai..
   


// * localstorage and session storage 
//  localStorage browser ka part hota hai yeh use hota hai website ka data ko  save krne ke liye yah data info browser me save hoti hai jab tk rehti hai jab tk aap sytem format na maro..aap 
//  something like permanent Storage


// session storage: session storage temporary data save krne ke liye hota hai  like a notepad jese hi band kra data vanish
//  kthm yeh use hota hai websites ke visit krte time data ko temporaty save krna


// * cookies and session:
