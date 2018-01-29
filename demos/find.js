
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

        if (str.match(/\*\*foo/)){

            return true;

        }

    });

console.log(result); // '**foo'
