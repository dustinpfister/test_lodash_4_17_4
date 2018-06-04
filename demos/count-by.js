var arr = [
    {
        username: 'john',
        score: 37
    }, {
        username: 'jake',
        score: 50

    }, {
        username: 'bill',
        score: 20
    }
];

var obj = _.countBy(arr, function (rec) {

        return rec.score >= 50;

    });

console.log(obj.false); // 2
console.log(obj.true); // 1
