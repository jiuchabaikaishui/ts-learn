(function(){
    (function(){
        function padLeft(padding:number | string, input:string):string {
            return ' '.repeat(padding) + input
        }
    })();
    {
        function padLeft(padding:number | string, input:string):string {
            if (typeof padding === 'number') {
                return ' '.repeat(padding) + input
            }
            return padding + input
        }
    }

    // typeof 类型保护
    {
        function printAll(strs:string | string[] | null) {
            if (typeof strs === 'object') {
                // 'strs' 可能是 'null'.
                for (const s in strs) {
                    console.log(s);
                }
            } else if (typeof strs === 'string') {
                console.log(strs);
            } else {
                // ……
            }
        }

        printAll(null)
    }

    // 真值缩小
    (function() {
        Boolean('hello')
        !!'hello'

        function printAll(strs:string | string[] | null) {
            if (strs && typeof strs === 'object') {
                for (const s in strs) {
                    console.log(s);
                }
            } else if (typeof strs === 'string') {
                console.log(strs);
            }
        }
    })();
    (function() {
        function printAll(strs:string | string[] | null) {
            if (strs) {
                if (typeof strs === 'object') {
                    for (const s in strs) {
                        console.log(s);
                    }
                } else if (typeof strs === 'string') {
                    console.log(strs);
                }
            }
        }
        function multiplyAll(values: number[] | undefined, factor: number): number[] | undefined {
            if (!values) {
                return values
            } else {
                return values.map((x) => x*factor)
            }
        }

        function example(x: string | number, y: string | boolean) {
            if (x === y) {
                // 可以对 x、y 调用任何 string 的方法
                x.toUpperCase()
                y.toUpperCase()
            } else {
                console.log(x); // x: string | number
                console.log(y); // y: string | boolean
            }
        }
    })();
    (function() {
        function printAll(strs: string | string[] | null) {
            if (strs !== null) {
              if (typeof strs === "object") {
                for (const s of strs) { // strs: string[]
                  console.log(s);
                }
              } else if (typeof strs === "string") {
                console.log(strs); // strs: string
              }
            }
          }

          interface Container {
            value: number | null | undefined;
          }
           
          function multiplyValue(container: Container, factor: number) {
            // 从类型中移除 'null' 和 'undefined'
            if (container.value != null) {
              console.log(container.value);
           
              // 现在可以安全地 乘 'container.value'.
              container.value *= factor;
            }
          }
          
          type Fish = { swim: () => void };
          type Bird = { fly: () => void };
          function move(animal: Fish | Bird) {
            if ("swim" in animal) {
              return animal.swim();
            }
           
            return animal.fly();
          }
    })();
    (function() {
        type Fish = { swim: () => void };
        type Bird = { fly: () => void };
        type Human = { swim?: () => void; fly?: () => void };
        
        function move(animal: Fish | Bird | Human) {
            if ("swim" in animal) {
                animal; // animal: Fish | Human
            } else {
                animal; // animal: Bird | Human
            }
        }

        function logValue(x: Date | string) {
            if (x instanceof Date) {
              console.log(x.toUTCString()); // x: Date
            } else {
              console.log(x.toUpperCase()); //x: string
            }
        }

        let x = Math.random() < 0.5 ? 10 : "hello world!"; // x: string | number
        x = 1;
        console.log(x); // x: number

        x = "goodbye!";
        console.log(x); // x: string

        // 类型‘boolean’不能赋值给类型‘string | number’。
        x = true;
        console.log(x); // x: string | number

        function padLeft(padding: number | string, input: string) {
            if (typeof padding === "number") {
              return " ".repeat(padding) + input;
            }
            return padding + input;
        }

        function example() {
            let x: string | number | boolean;
           
            x = Math.random() < 0.5;
            console.log(x); // x: boolean
                       
            if (Math.random() < 0.5) {
              x = "hello";
              console.log(x); // x: string
            } else {
              x = 100;
              console.log(x); // x: number
            }
            return x; // x: string | number
        }

        function isFish(pet: Fish | Bird): pet is Fish {
            return (pet as Fish).swim !== undefined;
        }

        function getSmallPet(): Fish | Bird {
            if (Math.random() < 0.5) {
                return { swim: () => {console.log('swim');}}
            }
            return { fly: () => {console.log('fly');}}
        }

        // 现在 'swim' 和 'fly' 都可以调用.
        let pet = getSmallPet();
        
        if (isFish(pet)) {
            pet.swim();
        } else {
            pet.fly();
        }

        const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()]
        const underWater1: Fish[] = zoo.filter(isFish)
        // 或者
        const underWater2: Fish[] = zoo.filter(isFish) as Fish[]
        // 对于更复杂的示例，谓词可能需要重复
        const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
            if (pet.name === 'sharkey')  return false
            return isFish(pet)
        })

        interface Shape {
            kind: 'circle' | 'square',
            radius?: number,
            sideLength?: number
        }

        function handleShape(shape:Shape) {
            // 这种比较似乎是无意的，因为类型 circle | square 和 rect 没有重叠。
            if (shape.kind === 'rect') {
                // ……
            }
        }

        // function getArea(shape:Shape) {
        //     if (shape.kind === 'circle') {
        //         // shape.radius 可能为 undefined
        //         return Math.PI * shape.radius ** 2
        //     }
        // }

        function getArea(shape:Shape) {
            if (shape.kind === 'circle') {
                return Math.PI * shape.radius !** 2
            }
        }
    })();

    (function() {
        interface Circle {
            kind: 'circle',
            radius: number
        }
        interface Square {
            kind: 'square',
            sideLength: number
        }
        interface Triangle {
            kind: 'Triangle',
            sideLength: number
        }
        type Shape = Circle | Square | Triangle

        // function getArea(shape:Shape) {
        //     // radius 属性 在 Shape、Square 类型不存在
        //     return Math.PI * shape.radius ** 2
        // }
        // function getArea(shape:Shape) {
        //     if (shape.kind === 'circle') {
        //         return Math.PI * shape.radius !** 2
        //     }
        // }
        // function getArea(shape:Shape) {
        //     switch (shape.kind) {
        //         case 'circle':
        //             // shape: Circle
        //             return Math.PI * shape.radius !** 2
        //         case 'square':
        //             // shape: Square
        //             return shape.sideLength ** 2
        //     }
        // }
        // function getArea(shape:Shape) {
        //     switch (shape.kind) {
        //         case 'circle':
        //             // shape: Circle
        //             return Math.PI * shape.radius !** 2
        //         case 'square':
        //             // shape: Square
        //             return shape.sideLength ** 2
        //         default:
        //             // shape: never
        //             const _exhaustiveCheck: never = shape
        //             return _exhaustiveCheck
        //     }
        // }
        function getArea(shape:Shape) {
            switch (shape.kind) {
                case 'circle':
                    // shape: Circle
                    return Math.PI * shape.radius !** 2
                case 'square':
                    // shape: Square
                    return shape.sideLength ** 2
                default:
                    // 类型“Triangle”不能赋值给类型“never”。
                    const _exhaustiveCheck: never = shape
                    return _exhaustiveCheck
            }
        }
    })();
})();