(function() {
    // 变量的类型注释
    {
        let myName: string = 'Alice'
        let name = 'Alice'
    }


    // 函数
    {
        function greet(name: string) {
            console.log(`hello, ${name}!`);
        }
        // greet(24)
        // function getFavoriteNumber(): number {
        //     return 26
        // }
        async function getFavoriteNumber(): Promise<number> {
            return 26
        }
    }

    // 匿名函数
    {
        const names = ["Alice", "Bob", "Eve"];
        names.forEach(function(s) {
            console.log(s.toUpperCase());
        })
        names.forEach((s) => {console.log(s.toUpperCase())})
    }


    // 对象类型
    {
        function printCoord(pt: {x: number, y: number}) {
            console.log("The coordinate's x value is " + pt.x);
            console.log("The coordinate's y value is " + pt.y);
        }
        printCoord({x: 3, y: 7})
    }

    // 可选属性
    {
        function printName(obj: {first: string; last?: string}) {
            // ……
            console.log(obj.last.toUpperCase());
            if (obj.last !== undefined) {
                console.log(obj.last.toUpperCase());
            }
            console.log(obj.last?.toUpperCase());
        }
        printName({first: 'Bob'})
        printName({first: 'Alice', last: 'Alisson'})
    }


    // 联合类型
    {
        function printId(id: string | number) {
            console.log(`Your ID is: ${id}`);
            console.log(id.toUpperCase());
            if (typeof id === 'string') {
                console.log(id.toUpperCase());
            }
        }
        printId(101)
        printId('202')
        printId({myID: 22342})

        function printTextOrNumberOrBool(textOrNumberOrBool: | string | number | boolean) {
            console.log(textOrNumberOrBool);
        }
    }
    (function() {
        function printId(id:string | number) {
            if (typeof id === 'string') {
                console.log(id.toUpperCase());
            } else {
                console.log(id);
            }
        }

        function welcomePeople(x:[string] | string) {
            if (Array.isArray(x)) {
                console.log('hello ' + x.join(' and '));
            } else {
                console.log('Welcome lone traveler ' + x);
            }
        }

        function getFirstThree(x:[number] | string) {
            return x.slice(0, 3)
        }
    })();


    // 类型别名
    (function(){
        type Point = {
            x: number,
            y: number
        }
        function printCoord(pt:Point) {
            console.log("The coordinate's x value is " + pt.x);
            console.log("The coordinate's y value is " + pt.y);
        }
        printCoord({x: 100, y: 100})
    
        type ID = string | number;
    
        // 创建 UserInputSanitizedString 变量，仍然可以用字符串重新赋值
        type UserInputSanitizedString = string;
        let userInput: UserInputSanitizedString = 'xxxx';
    })();


    // 接口
    (function(){
        interface Point {
            x: number,
            y: number
        }

        function printCoord(pt:Point) {
            console.log("The coordinate's x value is " + pt.x);
            console.log("The coordinate's y value is " + pt.y);
        }
        printCoord({x: 100, y: 100})
    }());

    // 扩展接口
    (function(){
        interface Animal {
            name: string
        }
        interface Bear extends Animal {
            honey: boolean
        }
        const bear: Bear = {name: 'xxx', honey: true}
    }());
    // 通过交叉扩展类型别名
    (function(){
        type Animal = {
            name: string
        }
        type Bear = Animal & {
            honey: boolean
        }
        const bear: Bear = {name: 'xxx', honey: true}
    }());
    // 向现有接口添加新字段
    (function(){
        interface Window {
            title: string
        }
        interface Window {
            des: string
        }
        const window = {title: 'xxx', des: 'yyy'}
    }());
    // 类型别名创建后无法更改
    (function(){
        type Window = {
            name: string
        }
        // 重复标识符 Window
        // type Window = {
        //     des: string
        // }
    }())

    // 类型断言
    {
        const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
    }
    {
        const myCanvas = <HTMLCanvasElement>document.getElementById('main_canvas');
    }
    // const x = 'hello' as number
    const x = 'hello' as any as number


    // 字面类型
    {
        // 因为‘ changingString ’可以表示任何可能的字符串，这就是 TypeScript 在类型系统中描述它的方式
        // let changingString: string
        let changingString = "Hello World";
        changingString = "Olá Mundo";
        changingString;
    }
    {
        // 因为‘ constantString ’只能表示一种可能的字符串，所以它有一个文字类型表示
        // const constantString: "Hello World"
        const constantString = "Hello World";
        constantString;
    }
    {
        let x: 'hello' = 'hello';
        // 可以
        x = 'hello';
        // 不可以，类型“howdy”不能赋值给类型“hello”。
        x = 'howdy';

        function printText(s:string, alignment: 'left' | 'right' | 'center') {
            // ……
        }
        printText('Hello, world!', 'left');
        // centre 类型的参数不能赋值给 left | right | center 类型的参数。
        printText("G'day, mate", 'centre');

        function compare(a:string, b:string): 1 | 0 | -1 {
            return a > b ? 1 : a < b ? -1 : 0
        }
        
        interface Options {
            width: number
        }
        function configure(x:Options | 'auto') {
            // ……
        }
        configure({width: 100})
        configure('auto')
        // 类型为 automatic 的参数不能赋值给类型为 Options | auto 的参数。
        configure('automatic')
    }

    // 字面推断
    {
        const obj = {counter: 0}
        obj.counter = 2

        function handleRequest(url:string, method: 'POST' | 'GET'):void {
            // ……
        }
        {
            const req = {url: "https://example.com", method: "GET"}
            // string 类型的参数不能赋值给 POST | GET 类型的参数。
            handleRequest(req.url, req.method)
        }
        {
            // 更改 1
            const req = {url: "https://example.com", method: "GET" as 'GET'}
            // 更改 2
            handleRequest(req.url, req.method as 'GET')
        }
        {
            const req = {url: "https://example.com", method: "GET"} as const
            handleRequest(req.url, req.method)
        }
    }


    // null 和 undefined
    {
        function doSomething(x:string | null) {
            if (x === null) {
                // ……
            } else {
                console.log("Hello, " + x.toUpperCase());
            }
        }

        function liveDangerously(x?:number | null) {
            console.log(x!.toFixed());
        }
    }

    // 不太常见的基础类型
    {
        // 通过 BigInt 函数创建一个 bigint
        const oneHundred: bigint = BigInt(100)
        // 通过字面语法创建一个 bigint
        const anotherHundred: bigint = 100n

        const firstName = Symbol('name')
        const secondName = Symbol('name')
        if (firstName === secondName) {
            // 这种比较似乎是无意的，因为类型“typeof firstName”和“typeof secondName”没有重叠。
            // ……
        }
    }
}());