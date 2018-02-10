
var objs = [{
        n: 12
    }, {
        n: 42
    }, {
        n: 7
    }
];

// Array.findIndex works given the proper method
console.log( objs.findIndex(function(el){

    return el.n === 42;

}) ); // 1

// If you are using lodash, shorthand methods like _.matches
// will work with it
console.log( objs.findIndex( _.matches({n:42}) ) ); // 1

// With the original method, the shorthand is baked in to the method.
// resulting in a slightly more concise solution
console.log( _.findIndex(objs, {n:42}) );