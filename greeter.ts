(function() {
// function greeter(person: string) {
//     return `hello ${person}!`
// }
// // let user = 'TypeScript'
// let user = [1, 2, 3]
// document.body.textContent = greeter(user)

interface Person {
    firstName: string
    lastName: string
}
function greeter(person: Person) {
    return `hello, ${person.firstName} ${person.lastName}`
}
let user = {firstName: 'Jane', lastName: 'User'}
document.body.textContent = greeter(user)

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`
    }
}
user = new Student('Jan', 'M.', 'User')
document.body.textContent = greeter(user)
}())