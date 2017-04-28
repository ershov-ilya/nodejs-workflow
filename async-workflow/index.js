let async = require('async')



function asyncStart(num, callback, data){
    console.log('\x1b[36m%s\x1b[0m', 'Process '+num+' start.')
    let promise = new Promise((resolve, reject) => {
        setTimeout(function(){
            let message='Process '+num+' done.'
            //console.log(message)
            resolve({code: 200, num:num, message: message})
        },num*100)
    });
    
    promise.then(
        result => {
            console.log('\x1b[33m%s\x1b[0m', result.message)
            if(typeof callback != 'undefined') {
                callback(null, result)
            }
        },
        error => {
            console.error(error)
        }
    );
}

// Параллельный запуск
/*
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
*/

/*
// Запуск параллельно
async.parallel([
    function(callback) { asyncStart(1,  callback) },
    function(callback) { asyncStart(15,  callback) },
    function(callback) { asyncStart(2,  callback) },
    function(callback) { asyncStart(13,  callback) },
    function(callback) { asyncStart(3,  callback) },
    function(callback) { asyncStart(5,  callback) },
    function(callback) { asyncStart(12,  callback) },
    function(callback) { asyncStart(6,  callback) },
    function(callback) { asyncStart(7,  callback) },
    function(callback) { asyncStart(10,  callback) },
    function(callback) { asyncStart(8,  callback) },
    function(callback) { asyncStart(4,  callback) },
    function(callback) { asyncStart(9,  callback) },
    function(callback) { asyncStart(11,  callback) },
    function(callback) { asyncStart(14,  callback) }
], function(err, result){
    console.log('Final callback: ', result)
});
/*  Результат:

*/

/*
// Запуск в N параллельных потоков
async.parallelLimit([
    function(callback) { asyncStart(1,  callback) },
    function(callback) { asyncStart(15,  callback) },
    function(callback) { asyncStart(2,  callback) },
    function(callback) { asyncStart(13,  callback) },
    function(callback) { asyncStart(3,  callback) },
    function(callback) { asyncStart(5,  callback) },
    function(callback) { asyncStart(12,  callback) },
    function(callback) { asyncStart(6,  callback) },
    function(callback) { asyncStart(7,  callback) },
    function(callback) { asyncStart(10,  callback) },
    function(callback) { asyncStart(8,  callback) },
    function(callback) { asyncStart(4,  callback) },
    function(callback) { asyncStart(9,  callback) },
    function(callback) { asyncStart(11,  callback) },
    function(callback) { asyncStart(14,  callback) }
], 5, function(err, result){
    console.log('Final callback: ', result)
});
/* Результат

*/

/*
// Запуск последовательно
async.series([
    function(callback) { asyncStart(1,  callback) },
    function(callback) { asyncStart(15,  callback) },
    function(callback) { asyncStart(2,  callback) },
    function(callback) { asyncStart(13,  callback) },
    function(callback) { asyncStart(3,  callback) },
    function(callback) { asyncStart(5,  callback) },
    function(callback) { asyncStart(12,  callback) },
    function(callback) { asyncStart(6,  callback) },
    function(callback) { asyncStart(7,  callback) },
    function(callback) { asyncStart(10,  callback) },
    function(callback) { asyncStart(8,  callback) },
    function(callback) { asyncStart(4,  callback) },
    function(callback) { asyncStart(9,  callback) },
    function(callback) { asyncStart(11,  callback) },
    function(callback) { asyncStart(14,  callback) }
], function(err, result){
    console.log('Final callback: ', result)
});
// передает все результаты в окончательный обратный вызов
// callback receives an array of results when tasks have completed
// for discrete tasks
/* Результат:

*/



// Запуск водопадом

//async.waterfall([
//    function(callback) {
//        callback(null, 'one', 'two');
//    },
//    function(arg1, arg2, callback) {
//        // arg1 now equals 'one' and arg2 now equals 'two'
//        callback(null, 'three');
//    },
//    function(arg1, callback) {
//        // arg1 now equals 'three'
//        callback(null, 'done');
//    }
//], function (err, result) {
//    // result now equals 'done'
//});

async.waterfall([
    function(callback) { asyncStart(1,  callback) },
    function(prevData, callback) { console.log('Prevous step data', prevData); asyncStart(15,  callback) },
    function(prevData, callback) { console.log('Prevous step data', prevData); asyncStart(2,  callback) },
    function(prevData, callback) { console.log('Prevous step data', prevData); asyncStart(13,  callback) },
    function(prevData, callback) { console.log('Prevous step data', prevData); asyncStart(3,  callback) },
    function(prevData, callback) { console.log('Prevous step data', prevData); asyncStart(5,  callback) },
    function(prevData, callback) { console.log('Prevous step data', prevData); asyncStart(12,  callback) },
    function(prevData, callback) { console.log('Prevous step data', prevData); asyncStart(6,  callback) },
    function(prevData, callback) { console.log('Prevous step data', prevData); asyncStart(7,  callback) },
    function(prevData, callback) { console.log('Prevous step data', prevData); asyncStart(10,  callback) },
    function(prevData, callback) { console.log('Prevous step data', prevData); asyncStart(8,  callback) },
    function(prevData, callback) { console.log('Prevous step data', prevData); asyncStart(4,  callback) },
    function(prevData, callback) { console.log('Prevous step data', prevData); asyncStart(9,  callback) },
    function(prevData, callback) { console.log('Prevous step data', prevData); asyncStart(11,  callback) },
    function(prevData, callback) { console.log('Prevous step data', prevData); asyncStart(14,  callback) }
], function (err, result) {
    console.log('waterfall result:')
    console.log('err:', err)
    console.log('result:', result)
});
// каждая функция передаёт свои результаты на следующую функцию
//  each passing their results to the next
// for a data pipeline
/*  Результат:

*/

/*
// Гонка
async.race([
    function(callback) { asyncStart(1,  callback) },
    function(callback) { asyncStart(15,  callback) },
    function(callback) { asyncStart(2,  callback) },
    function(callback) { asyncStart(13,  callback) },
    function(callback) { asyncStart(3,  callback) },
    function(callback) { asyncStart(5,  callback) },
    function(callback) { asyncStart(12,  callback) },
    function(callback) { asyncStart(6,  callback) },
    function(callback) { asyncStart(7,  callback) },
    function(callback) { asyncStart(10,  callback) },
    function(callback) { asyncStart(8,  callback) },
    function(callback) { asyncStart(4,  callback) },
    function(callback) { asyncStart(9,  callback) },
    function(callback) { asyncStart(11,  callback) },
    function(callback) { asyncStart(14,  callback) }
], function(err, result){
    console.log('Final callback: ', result)
});
/*

*/


