var j= x=>x*x;

console.log(j(9));
 var user = {
     name: 'Ravishasthri',
     sayHi :()=> {
         console.log(arguments);
         console.log(`Hi hello ${this.name}`);
    },
     sayHiAlt(){
         console.log(arguments);
         console.log(`Hi Hello ${this.name}`)
     }
 };
 user.sayHiAlt(1,2,3);