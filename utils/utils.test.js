const utils = require('./utils');
const expect = require('expect');



it("should add two numbers" , ()=>{
    var res = utils.add(45, 45);

    expect(res).toBe(90);

});

it("should square number" , ()=>{
    var res = utils.square(25);

    expect(res).toBe(625);
    // if (res !== 625){
    //     throw new Error(`this value is wrong. it is ${res}`);
    // }

});
// it("should expect some values" , () => {
//     // expect(12).toNotBe(25);
//     // expect({name : "Ravishasthri"}).toNotEqual({name: "ravishasthri"});
//     // expect([2,3,5,7]).toInclude(2);
//
//     expect({
//       name: "Ravi",
//         age: 25
//     }).toInclude({
//         age:25
//     })
// });

it ("should check the firstName and LastName", ()=>{
    var user = {location : 'Pussellawa', age: 25};
    var res = utils.setName(user, 'Ravishasthri Selladurai');

    // expect(user).toEqual(res);
    expect(res).toInclude({
        firstName : "Ravishasthri",
        lastName : "Selladurai"
    });
});