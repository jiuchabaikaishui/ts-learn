(function() {
// 触发错误
console.log('hello, world!');

function greet(person: string, date: Date) {
    console.log(`hello ${person}, today is ${date.toDateString()}`);
}
// greet('Brendan')

// greet('Maddison', Date())

greet('Maddison', new Date())

}())