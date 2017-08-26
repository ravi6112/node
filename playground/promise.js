var asyncAdd = (a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            }
            else{
                reject('fuck you arguments should be in numbers');
            }
        }, 1500);
    });
};

asyncAdd(6,5).then((res)=>{
    console.log('Result : ' , res);
},(errorMessage)=>{
    console.log(errorMessage);
});



// var somePromise = new Promise((resolve, reject)=>{
//     //resolve('Hey asshole, It worked');
//     setTimeout(()=>{
//         reject('shit bitch it didnt work out');
//     }, 2500);
// });
//
// somePromise.then((message)=>{
//     console.log('yo babe :',message);
// },(errorMessage)=>{
//     console.log('Holy fuck :', errorMessage);
// });