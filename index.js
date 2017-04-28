let async = require('async')

asyncStart(1);
asyncStart(15);
asyncStart(2);
asyncStart(13);
asyncStart(3);
asyncStart(5);
asyncStart(12);
asyncStart(6);
asyncStart(7);
asyncStart(10);
asyncStart(8);
asyncStart(4);
asyncStart(9);
asyncStart(11);
asyncStart(14);



function asyncStart(num){
    let promise = new Promise((resolve, reject) => {
    setTimeout(function(){
        let message='Process '+num+' done.'
        console.log(message)
        resolve({code: 200, message: message})
    },num*300)
    });
}