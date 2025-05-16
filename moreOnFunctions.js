(function () {
    function greeter(fn) {
        // ……
    }
    function doSomething(fn) {
        console.log(fn.description + " returned " + fn(6));
    }
    function myFunc(someArg) {
        return someArg > 3;
    }
    myFunc.description = 'default description';
    doSomething(myFunc);
    function fn(ctor) {
        return new ctor('hello');
    }
    (function () {
        function fn(ctor) {
            console.log(ctor(10));
            console.log(new ctor('10'));
        }
        fn(Date);
    })();
    // function firstElement(arr:any[]) {
    //     return arr[0]
    // }
    function firstElement(arr) {
        return arr[0];
    }
    // s 类型 'string'
    var s = firstElement(["a", "b", "c"]);
    // n 类型 'number'
    var n = firstElement([1, 2, 3]);
    // u 类型 undefined
    var u = firstElement([]);
    function map(arr, func) {
        return arr.map(func);
    }
    // n: string
    // parsed: number[]
    var parsed = map(['1', '2', '2'], function (n) { return parseInt(n); });
    function longest(a, b) {
        return a.length >= b.length ? a : b;
    }
    // longerArray: number[]
    var longerArray = longest([1, 2], [1, 2, 3]);
    // longerString: "alice" | "bob"
    var longerString = longest("alice", "bob");
    // 错误! number 没有 'length' 属性
    var notOK = longest(10, 100);
    function minimumLength(obj, minimum) {
        if (obj.length >= minimum) {
            return obj;
        }
        else {
            // 类型 '{ length: number; }' 不能赋值给类型 'Type'。
            // '{ length: number; }' 可以赋值给类型 'Type' 的约束，但是 'Type' 可以用约束 '{ length: number; }'。
            return { length: minimum };
        }
    }
    // 'arr' gets value { length: 6 }
    var arr = minimumLength([1, 2, 3], 6);
    // and crashes here because arrays have
    // a 'slice' method, but not the returned object!
    console.log(arr.slice(0));
})();
