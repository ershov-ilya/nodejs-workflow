let async = require('async')



function asyncStart(num, callback){
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
            if(typeof callback != 'undefined') callback(result)
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
]);
/**/

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
], 3);
/**/


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
]);
// передает все результаты в окончательный обратный вызов
// for discrete tasks
/**/
// Не вижу разницы async.series <-> async.waterfall

/*
// Запуск водопадом
async.waterfall([
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
]);
// каждая функция передаёт свои результаты на следующую функцию
// for a data pipeline
/**/


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
], function(data){
    console.log('Final callback: ', data)
});
/**/


