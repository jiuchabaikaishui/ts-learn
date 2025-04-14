// 类型推断
var helloWorld = 'Hello World';
var user = {
    id: 0,
    name: 'Hayes'
};
// const user1: User = {
//     userName: 'Hayes'
// }
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user2 = new UserAccount('Murphy', 1);
function deleteUser(user) {
}
function getAdminUser() {
    return { name: '', id: 10 };
}
function wrapInArray(obj) {
    if (typeof obj === 'string') {
        return [obj];
    }
    return obj;
}
function logPoint(p) {
    console.log("(".concat(p.x, ", ").concat(p.y, ")"));
}
var point = { x: 10, y: 12 };
logPoint(point);
var point3 = { x: 12, y: 13, z: 14 };
logPoint(point3);
var rect = { x: 1, y: 2, width: 3, height: 4 };
logPoint(rect);
var color = { hex: '#000000' };
// logPoint(color)
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
var newVPoint = new VirtualPoint(1, 2);
logPoint(newVPoint);
