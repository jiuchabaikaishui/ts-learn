(function() {
    type GreetFunction = (a: string) => void
    function greeter(fn:GreetFunction) {
        // ……
    }

    type DescribableFunction = {
        description: string,
        (someArg: number): boolean
    }
    function doSomething(fn:DescribableFunction) {
        console.log(fn.description + " returned " + fn(6));
    }
    function myFunc(someArg:number) {
        return someArg > 3
    }
    myFunc.description = 'default description'
    doSomething(myFunc)

    type SomeConstructor = {
        new (s: string): {}
    }
    function fn(ctor:SomeConstructor) {
        return new ctor('hello')
    }

    (function() {
        interface CallOrConstruct {
            (n?: number): string,
            new (s: string): Date
        }
        function fn(ctor:CallOrConstruct) {
            console.log(ctor(10));
            console.log(new ctor('10'));
        }
        fn(Date)
    })();

    // function firstElement(arr:any[]) {
    //     return arr[0]
    // }
    function firstElement<Type>(arr:Type[]): Type | undefined {
        return arr[0]
    }

    // s 类型 'string'
    const s = firstElement(["a", "b", "c"]);
    // n 类型 'number'
    const n = firstElement([1, 2, 3]);
    // u 类型 undefined
    const u = firstElement([]);

    function map<Input, Output>(arr:Input[], func:(arg: Input) => Output):Output[] {
        return arr.map(func)
    }
    // n: string
    // parsed: number[]
    const parsed = map(['1', '2', '2'], (n) => parseInt(n))

    function longest<Type extends {length: number}>(a:Type, b:Type) {
        return a.length >= b.length ? a : b
    }
    // longerArray: number[]
    const longerArray = longest([1, 2], [1, 2, 3]);
    // longerString: "alice" | "bob"
    const longerString = longest("alice", "bob");
    // 错误! number 没有 'length' 属性
    const notOK = longest(10, 100);

    function minimumLength<Type extends {length: number}>(obj:Type, minimum:number):Type {
        if (obj.length >= minimum) {
            return obj
        } else {
            // 类型 '{ length: number; }' 不能赋值给类型 'Type'。
            // '{ length: number; }' 可以赋值给类型 'Type' 的约束，但是 'Type' 可以用约束 '{ length: number; }'。
            return {length: minimum}
        }
    }

    // arr: number[]，arr 得到的值是 { length: 6 }
    const arr = minimumLength([1, 2, 3], 6);
    // 这里崩溃是因为数组有一个‘slice’方法，但不是返回的对象！
    console.log(arr.slice(0));

    function combine<Type>(arr1:Type[], arr2: Type[]): Type[] {
        return arr1.concat(arr2)
    }

    {
        // 类型 string 不能赋值给类型 number。
        const arr = combine([1, 2, 3], ["hello"])
    }
    {
        const arr = combine<number | string>([1, 2, 3], ['hello'])
    }

    function firstElement1<Type>(arr:Type[]) {
        return arr[0]
    }
    function firstElement2<Type extends any[]>(arr:Type) {
        return arr[0]
    }
    // a: number (很好)
    const a = firstElement1([1, 2, 3])
    // b: any (糟糕)
    const b = firstElement2([1, 2, 3])

    function filter1<Type>(arr:Type[], func:(Type) => boolean):Type[] {
        return arr.filter(func)
    }
    function filter2<Type, Func extends (arg: Type) => boolean>(arr:Type[], func:Func) {
        return arr.filter(func)
    }
    
    (function() {
        function greet<Str extends string>(s:Str) {
            console.log('Hello, ' + s);
        }
    })();
    (function() {
        function greet(s:string) {
            console.log('Hello, ' + s);
        }

        function f(n:number) {
            console.log(n.toFixed());
            console.log(n.toFixed(3));
        }
    })();

    (function() {
        function f(x?:number) {
            // ……
        }
        f()
        f(10)
    })();

    (function() {
        function f(x = 10) {
            // ……
        }
        // 这样调用都可以
        f()
        f(10)
        f(undefined)
    })();

    (function() {
        function myForEach(arr:any[], callback:(arg:any, index?:number) => void) {
            for (let i = 0; i < arr.length; i++) {
                callback(arr[i], i)
            }
        }
    
        myForEach([1, 2, 3], (a) => console.log(a))
        myForEach([1, 2, 3], (a,i) => console.log(a,i))
    })();

    (function() {
        function myForEach(arr:any[], callback:(arg:any, index?:number) => void) {
            for (let i = 0; i < arr.length; i++) {
                // 不想提供索引号
                callback(arr[i])
            }
        }
        myForEach([1, 2, 3], (a, i) => {
            // i: number | undefined，i 可能为 undefined
            console.log(i.toFixed());
        })
    })();

    function makeDate(timestamp:number):Date
    function makeDate(m:number, d:number, y:number):Date
    function makeDate(mOrTimestamp:number, d:number, y:number):Date {
        if (d !== undefined && y !== undefined) {
            return new Date(y, mOrTimestamp, d)
        } else {
            return new Date(mOrTimestamp)
        }
    }

    const d1 = makeDate(12345678);
    const d2 = makeDate(5, 5, 5);
    // 没有重载需要2个参数，但确实存在重载需要1个或3个参数。
    const d3 = makeDate(1, 3);
})();

(function() {
    function fn(x:string):void
    function fn() {
        // ……
    }
    // 期望有1个参数，但得到0个。
    fn()
})();

(function() {
    function fn(x:boolean):void
    // 此重载签名与其实现签名不兼容，参数类型错误
    function fn(x:string):void
    function fn(x:boolean) {}
})();

(function() {
    function fn(x:string):string
    // 此重载签名与其实现签名不兼容，返回类型错误
    function fn(x:number):boolean
    function fn(x:string | number) {
        return 'oops'
    }
})();

(function() {
    function len(s:string):number
    function len(arr:any[]):number
    function len(x:any) {
        return x.length
    }

    len('')
    len([0])
    // 没有重载匹配这个调用。
    len(Math.random() > 0.5 ? 'hello' : [0])
})();

(function() {
    function len(x:any[] | string) {
        return x.length
    }

    const user = {
        id: 123,
        admin: false,
        becomeAdmin: function() {2
            this.admin = true
        }
    }

    interface DB {
        filterUsers(filter:(this: User))
    }

    // 推断返回类型 void
    function noop() {
        return
    }

    function f1(a:any) {
        a.b()
    }
    function f2(a:unknown) {
        // 'a' 的类型是 'unknown'.
        a.b()
    }

    function safeParse(s: string): unknown {
        return JSON.parse(s);
    }
    // 需要小心使用 obj！
    const obj = safeParse(someRandomString);

    function fail(msg: string): never {
        throw new Error(msg);
    }

    function fn(x:number | string) {
        if (typeof x === 'number') {
            // ……
        } else if (typeof x === 'string') {
            // ……
        } else {
            // x: never
            x
        }
    }

    function doSomething(f:Function) {
        return f(1, 2, 3)
    }

    function multiply(n: number, ...m:number[]) {
        return m.map((x) => n * x)
    }
    // a 的值是 【10， 20， 30， 40】
    const a = multiply(10, 1, 2, 3, 4)

    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    arr1.push(...arr2)

    //推断类型是 number[]——一个包含0个或多个数字的数组，不是具体的两个数
    const args = [8, 5]
    const angle = Math.atan2(...args)
})();

(function() {
    // 推断为长度2的元组
    const args = [8, 5] as const
    // 此时可以
    const angle = Math.atan2(...args)

    function sum({a, b, c}) {
        console.log(a + b + c);
    }
    sum({a: 10, b: 3, c: 9})
})();

(function() {
    function sum({a, b, c}:{a:number, b:number, c:number}) {
        console.log(a + b + c);
    }
})();

(function() {
    type ABC = {a:number, b:number, c:number}
    function sum({a, b, c}:ABC) {
        console.log(a + b + c);
    }

    type VoidFunc = () => void
    const f1:VoidFunc = () => {
        return true
    }
    const f2:VoidFunc = () => true
    const f3:VoidFunc = function() {
        return true
    }

    const v1 = f1()
    const v2 = f2()
    const v3 = f3()

    const src = [1, 2, 3]
    const dst = [0]
    src.forEach((el) => dst.push(el))
})();

(function() {
    function f2():void {
        // 类型‘boolean’不能赋值给类型‘void’。
        return true
    }
    const f3 = function():void {
        // 类型‘boolean’不能赋值给类型‘void’。
        return true
    }
})