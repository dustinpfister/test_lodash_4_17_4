var arr = [undefined, undefined, 'foo', 5, -1, false, 0, 12, null,'',Infinity];


arr = _.compact(arr);

console.log(arr); // ["foo", 5, -1, 12, Infinity]
