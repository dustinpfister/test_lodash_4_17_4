
// ## What a collection is, and basic example

// The is an Object that is an Array that
// is a kind of collection
var anArray = ['i', 'am', 'an', 'Array'];

console.log(anArray.constructor.name); // Array

// This is an Object that is an Object
// but it is an collection that is 'Array like'
var notAnArray = {

    0: 'i',
    1: 'am',
    2: 'not',
    3: 'an',
    4: 'Array'

};

console.log(notAnArray.constructor.name); // Object

// This is an Object that is not at all like an Array
// It is a collection of key value pairs though
var soNotAnArray = {

    foo: 'totally',
    bar: 'not',
    man: 'an',
    chew: 'Array'

};

console.log(soNotAnArray.constructor.name); // Object

// this is a method that I can pass to _.find
// along with a collection that will give me the first
// element that has a length greater than 3
var method = function (el) {

    return el.length >= 3;

};

console.log( _.find(anArray, method) ); // Array
console.log( _.find(notAnArray, method) ); // not
console.log( _.find(soNotAnArray, method) ); // totally

console.log('**********');

// ## The iteration method

var result = _.find(['a', 'b', 'c'], function (el, i, col) {

        // first argument is the current collection element 'a' - 'c'
        console.log(el);

        // second argument is the current index 0 - 2
        console.log(i);

        // third argument is the actual collection ['a','b','c']
        console.log(col);

        // if true is returned, then that is what
        // will be returned by _.find, else it will keep looking
        return el === 'b'

    });

console.log(result); // b

// ## fromIndex use example

var collection = [1, 2, 3, 4, 5, 'a', 'b', 'c'],
method = function (el, i, col) {

    if (typeof el === 'string') {

        return true;

    }

};

console.log(_.find(collection, method)); // 'a'
console.log(_.find(collection, method, 6)); // 'b'

var db_obj = {

    dave: {

        sex: 'male',
        age: 34,
        skills: ['html', 'css', 'js_core', 'js_client', 'js_nodejs']

    },

    jake: {

        sex: 'male',
        age: 22,
        employed: false,
        skills: ['js_core', 'js_nodejs', 'C', 'C++', 'C#']

    },

    jane: {

        sex: 'female',
        age: 27,
        employed: true,
        skills: ['html', 'css', 'js_core', 'js_client', 'java', 'ruby', 'python']

    }

};

var db_array = [{
        name: 'Dave',
        sex: 'male',
        age: 34
    }, {
        name: 'Jake',
        sex: 'male',
        age: 22
    }, {
        name: 'Jane',
        sex: 'female',
        age: 27
    }

],

// wheres Dave?
name = 'Dave',
/*
q = _.find(db_array, function (obj) {
return obj.name === name;
});
 */
q = _.find(db_array, {
        name: 'Dave'
    });

console.log(q); // {name:'Dave',sex:male,age:34}


// ## Using _.find on an array of primitives

var words = ['foo**', '*foo*', '**foo'];

var result = _.find(words, function (str, i) {

        if (str.match(/\*\*foo/)) {

            return true;

        }

    });

console.log(result); // '**foo'
