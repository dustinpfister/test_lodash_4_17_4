// basic example
console.log(

    _.filter([4,-1,7,7,-3,-5,1], function(val){

        return val > 0;

    })

); // [4, 7, 7, 1]


var data = [{
        post: 'lodash_isarray',
        clicks: 0,
        cat: 'lodash'
    }, {
        post: 'lodash-find',
        clicks: 1668,
        cat: 'lodash'
    }, {
        post: 'lodash_map',
        clicks: 338,
        cat: 'lodash'
    }, {
        post: 'lodash_merge',
        clicks: 13,
        cat: 'lodash'
    }, {
        post: 'phaser-gameobj-input-keyboard',
        clicks: 118,
        cat: 'phaser'
    }, {
        post: 'phaser-state-manager',
        clicks: 30,
        cat: 'phaser'
    }, {
        post: 'phaser-graphics',
        clicks: 0,
        cat: 'phaser'
    }, {
        post: 'phaser-getting-started',
        clicks: 4,
        cat: 'phaser'
    }, {
        post: 'nodejs-axios',
        clicks: 577,
        cat: 'nodejs'
    }, {
        post: 'nodejs-marked',
        clicks: 73,
        cat: 'nodejs'
    }, {
        post: 'nodejs-jimp',
        clicks: 145,
        cat: 'nodejs'
    }, {
        post: 'nodejs-harp',
        clicks: 1,
        cat: 'nodejs'
    },
];

// using lodash _.filter to get posts that are doing good
var onTarget = _.filter(data, function (rec) {

        // return posts that have 280 or more clicks
        return rec.clicks >= 280;

    });

console.log(JSON.stringify(onTarget));
/*
[{"post":"lodash-find","clicks":1668,"cat":"lodash"},{"post":"lodash_map","clicks":338,"cat":"lodash"},{"post":"nodejs-axios","clicks":577,"cat":"nodejs"}
]
 */

// VANILLA JS Array.filter
var onTargetVS = data.filter(function (rec) {

        // return posts that have 100 or more clicks
        // but less than 1000
        return rec.clicks >= 280;

    });

console.log(JSON.stringify(onTargetVS));

// BAKED IN ITERATEE SHORTHANDS
console.log(_.filter(data, _.matches({
            cat: 'lodash'
        })));

// use can use lodash iteratee shorthands with
// the native Array.filter method
console.log(data.filter(_.matches({
            cat: 'lodash'
        })));

// but the actual _.filter method has it baked in
console.log(_.filter(data, {
        cat: 'lodash'
    }));

// Plan Objects

var obj = {

    foo: 'bar',
    bool: false,
    n: 42,
    c: 7

};

var numbers = _.filter(obj, function (val, key, obj) {

        return typeof val === 'number';

    });

console.log(numbers); // [42,7];

// Vanilla js Array.filter will not just work on any object
var numbers = [].filter.call(obj, function(val,key,obj){

    return typeof val === 'number';

});

console.log(numbers); // [];

// but it will work on array like objects
var numbers = [].filter.call({

    0 : 'foo',
    1: 'man',
    2: 7,
    length: 3

}, function(val,key,obj){

    return typeof val === 'number';

});
console.log(numbers); // [7]

