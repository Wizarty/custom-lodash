const dropWhile = require('../../src/arrays/dropWhile');


test('test of "dropWhile" function', () => {
    const users = [
        { 'user': 'barney', 'active': false },
        { 'user': 'fred', 'active': false },
        { 'user': 'pebbles', 'active': true }
    ];
    expect(dropWhile(users, function (o) { return !o.active; })).toStrictEqual([{ 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false }]);
});

test('test of "dropWhile" function', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false },
        { 'user': 'pebbles', 'active': true }
    ];
    expect(dropWhile(users, function (o) { return !o.active; })).toStrictEqual([]);
});