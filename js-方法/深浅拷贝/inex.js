
// 浅拷贝  实现浅拷贝有多种方式。比如使用扩展运算符...、Object.assign()方法、Array.prototype.slice()、Array.from()等
// Object.assign()
var obj = {
    a: 1,
    name: 'jrb',
    msg: {
        age: 20,
    }
}
var o = {}
Object.assign(o, obj);
// console.log(o);
o.a = 2;
o.msg.age = 21;
console.log(obj); // {a: 1, name: 'jrb', msg: {age: 21}} 
//  // 结果就是 o 和 obj 的 msg.age 都变成了20, 因为 o 和 obj 是共享一块内存的

// 深拷贝 深拷贝会递归地复制原对象的所有属性，不管这些属性是基本类型还是引用类型。这就使得原对象和深拷贝对象在内存中是完全独立的，对其中一个对象的任何修改都不会影响到另一个对象。
//

// 递归遍历所有层级，实现深拷贝
var obj2 = {
    id: 1,
    name: 'andy',
    msg: {
        age: 18
    },
    color: ['pink', 'red']
};
var o2 = {};

// 封装函数
function deepClone(newobj, oldobj) {
    for (var k in oldobj) {
        // 判断我们的属性值属于哪种数据类型
        // 1. 获取属性值  oldobj[k]
        var item = oldobj[k];
        // 2. 判断这个值是数组还是对象
        if (item instanceof Array) {
            newobj[k] = [];
            deepClone(obj2[k], item);
        } else if (item instanceof Object) {
            // 3. 属于对象
            newobj[k] = {};
            deepClone(obj2[k], item);
        } else {
            // 4. 属于简单数据类型
            newobj[k] = item;
        }
        // const copy = Array.isArray(obj) ? [] : {};
        // for (const key in obj) {
        //     if (obj.hasOwnProperty(key)) {
        //       copy[key] = deepCopy(obj[key]);
        //     }
        //   }
    }
}

deepClone(o2, obj2)
o2.msg.age = 20;
console.log('obj2:',obj2); // {id: 1, name: 'andy', msg: {age: 18}, color: ['pink', 'red']}
console.log('o2:',o2); // {id: 1, name: 'andy', msg: {age: 20}, color: ['pink', 'red']}

//  利用 JSON 对象实现深拷贝

var obj3 = {
    id: 1,
    name: 'andy',
    msg: {
        age: 18
    },
    color: ['pink', 'red']
};
function deepClone3(obj) {
    let _obj = JSON.stringify(obj); // 把对象转换为字符串
    let newObj = JSON.parse(_obj); // 把字符串转换为对象
    return newObj;
}

let newObj = deepClone3(obj3);
newObj.msg.age = 99;
console.log('obj3:',obj3); // {id: 1, name: 'andy', msg: {age: 18}, color: ['pink','red']}
console.log('newObj:',newObj); // {id: 1, name: 'andy', msg: {age: 99}, color: ['pink','red']}
// 注意： 无法实现对象中方法的深拷贝。
// JSON.stringify() 是为了将 可序列化的数据（即符合 JSON 格式的数据）转换为字符串，而 方法（函数）不属于 JSON 规范支持的数据类型。JSON 仅支持以下类型：

// 字符串（String）
// 数值（Number）
// 布尔值（Boolean）
// null
// 对象（Object，仅键值对，且键必须是字符串）
// 数组（Array）
// 函数、正则表达式、日期对象等 非标准 JSON 类型会被直接忽略。



// 使用工具库（如 Lodash 的 _.cloneDeep()）
const _ = require("lodash");

const original = {
  name: "Alice",
  greet() {
    return `Hello, ${this.name}`;
  }
};

const copy = _.cloneDeep(original);
console.log(copy.greet()); // 输出: "Hello, Alice"（方法保留）