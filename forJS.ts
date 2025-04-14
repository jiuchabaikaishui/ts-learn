// 类型推断
let helloWorld = 'Hello World'

// 定义类型
// const user {
//     id: 0,
//     name: 'Hayes'
// }

interface User {
    id: number
    name: string
}
const user: User = {
    id: 0,
    name: 'Hayes'
}
// const user1: User = {
//     userName: 'Hayes'
// }

class UserAccount {
    name: string
    id: number
    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }
}
const user2: User = new UserAccount('Murphy', 1)

function deleteUser(user:User) {
    
}
function getAdminUser():User {
    return {name: '', id: 10}
}

// 联合
type MyBool = true | false

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function wrapInArray(obj:string | [string]) {
    if (typeof obj === 'string') {
        return [obj]
    }
    return obj
}

// 泛型
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Backpack<Type> {
    add: (obj: Type) => void
    get: () => Type
}
declare const backpack: Backpack<string>
// const obj = backpack.get()
// backpack.add(23)

// 结构类型系统
interface Point {
    x: number
    y: number
}

function logPoint(p:Point) {
    console.log(`(${p.x}, ${p.y})`);
}
const point: Point = {x: 10, y: 12}
logPoint(point)

const point3 = {x: 12, y: 13, z: 14}
logPoint(point3)
const rect = {x: 1, y: 2, width: 3, height: 4}
logPoint(rect)
const color = {hex: '#000000'}
// logPoint(color)

class VirtualPoint {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}
const newVPoint = new VirtualPoint(1, 2)
logPoint(newVPoint)