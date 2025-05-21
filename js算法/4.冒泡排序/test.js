// 排序的本质： 排序不是比较大小。 排序的本质是比较和交换。
// function compare() {} // 比较之后需要得出是否需要交换。
// fucntion exchange(arr, a, b) {} // 将数组中ab位置里的值进行交换
//function sort() {} // 这个sort 可以是冒泡排序也可以是选择排序也可以是其他排序。
var arr = [4, 1, 6, 9, 3, 2, 8, 7];
// 一般思维 每次找到最小的。然后获取，置空。
// 获取数组中最小值的索引
// function getMin(arr) {

//     if (arr == null || arr.length == 0) return null; // 这里需要判断数组是否为空，如果为空则返回null。
//     var index = -1;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] != null && arr[i] < arr[index] || arr[i] !== null && index == -1) {
//             index = i;
//         }
//     }
//     var result = arr[index]; // 这里需要将数组的值赋值给result变量，而不是索引。
//     arr[index] = null;
//     return result;
// }

// function sort(arr) {
//     var newArr = new Array(arr.length);
//     for (var i = 0; i < arr.length; i++) {
//         newArr[i] = getMin(arr);
//     }
//     return newArr; // 这里返回的是数组的索引，而不是数组的实际值，需要根据索引获取数组的值。
// }
// console.log(sort(arr)); // [1,2,3,4,6,7,8,9]

// 冒泡排序  每次循环找到最大的数堆到后面
function compare(a, b) {
    if (a > b) {
        return true; // 这里需要返回true，而不是1。
    } else {
        return false; // 这里需要返回false，而不是0。}
    }
}

function exchange(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sort(arr) {
    for (var i = 0; i < arr.length - 1; i++ ) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j+1])) {
                exchange(arr, j, j+1);
            }
        }
    }
}
sort(arr);
console.log(arr); // [1,2,3,4,6,7,8,9]