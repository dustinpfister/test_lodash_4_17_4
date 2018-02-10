
var users = [
    {
        name: 'John',
        points: 1200
    }, {
        name: 'Jerry',
        points: 300
    }, {
        name: 'bill',
        points: 935
    }

];

console.log(_.findIndex(users, {
        name: 'bill'
    })); // 2


// Array.find index
console.log(users.findIndex(function (el, i) {

        return el.name === 'bill';

    })); // 2
