(function () {
    // 触发错误
    console.log('hello, world!');
    function greet(person, date) {
        console.log(`hello ${person}, today is ${date.toDateString()}`);
    }
    // greet('Brendan')
    // greet('Maddison', Date())
    greet('Maddison', new Date());
}());
