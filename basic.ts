(function() {
// 静态类型检查
const message = 'Hello World!'
message.toLowerCase()
// message()


// 非异常故障
const user = {
    name: "Daniel",
    age: 26,
};

user.location;

const announcement = "Hello World!";
 
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();
announcement.toLocaleLowerCase();

function flipCoin() {
    // 应该是 Math.random()
    return Math.random < 0.5;
}

const value = Math.random() < 0.5 ? 'a' : 'b'
if (value !== 'a') {
    // ……
} else if (value === 'b') {
    
}

}())