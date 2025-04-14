// function greeter(person: string) {
//     return `hello ${person}!`
// }
// // let user = 'TypeScript'
// let user = [1, 2, 3]
// document.body.textContent = greeter(user)
function greeter(person) {
    return "hello, ".concat(person.firstName, " ").concat(person.lastName);
}
var user = { firstName: 'Jane', lastName: 'User' };
document.body.textContent = greeter(user);
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = "".concat(firstName, " ").concat(middleInitial, " ").concat(lastName);
    }
    return Student;
}());
user = new Student('Jan', 'M.', 'User');
document.body.textContent = greeter(user);
