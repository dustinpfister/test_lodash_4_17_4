var data = [
    {post: 'lodash_isarray', clicks: 0, cat:'lodash'},
    {post: 'lodash-find', clicks: 1668, cat: 'lodash'},
    {post: 'lodash_map', clicks: 338, cat:'lodash'},
    {post: 'lodash_merge', clicks: 13, cat:'lodash'},
    {post: 'phaser-gameobj-input-keyboard', clicks: 118, cat: 'phaser'},
    {post: 'phaser-state-manager', clicks: 30, cat: 'phaser'},
    {post: 'phaser-graphics', clicks: 0, cat: 'phaser'},
    {post: 'phaser-getting-started', clicks: 4, cat: 'phaser'},
    {post: 'nodejs-axios', clicks: 577, cat: 'nodejs'},
    {post: 'nodejs-marked', clicks: 73, cat: 'nodejs'},
    {post: 'nodejs-jimp', clicks: 145, cat: 'nodejs'},
    {post: 'nodejs-harp', clicks: 1, cat: 'nodejs'},
];

// using lodash _.filter to get posts that are doing good
var doingGood = _.filter(data, function (rec) {

    // return posts that have 280 or more clicks
    return rec.clicks >= 280;

});


console.log(JSON.stringify(doingGood));
/*
[
    {"post":"lodash-find","clicks":1668,"cat":"lodash"},
    {"post":"lodash_map","clicks":338,"cat":"lodash"},
    {"post":"nodejs-axios","clicks":577,"cat":"nodejs"}
]
*/

// vanilla js
var doingGood = data.filter(function (rec) {

    // return posts that have 100 or more clicks
    // but less than 1000
    return rec.clicks >= 280;

});

console.log(JSON.stringify(doingGood));