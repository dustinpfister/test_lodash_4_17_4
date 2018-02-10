
// simple example is too simple

// an array, and what to look for
var arr = ['foo', 'man', 'chew'],
what = 'man',

// what about index
i = _.findIndex(arr, function (el) {

        return el === what;

});

// yes, _.findIndex can be used to find the index
console.log(i); // 1

// but why bother then Array.indexOf is well supported?
console.log( arr.indexOf('man')) ; // 1
