// 快速排序
var arr = [4, 1, 6, 9, 3, 2, 8, 7];

function quickSort(arr) {
    if (arr == null || arr.length == 0) return []; // 这里需要判断数组是否为空，如果为空则返回null。
    // 选班长
    var leader = arr[0];
    // 小的站左边， 大的站右边
    var left = []; // 小的站左边
    var right = []; // 大的站右边
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < leader) {
            left.push(arr[i]);

        }else {
            right.push(arr[i]);
        }
    }
    // 递归
    left = quickSort(left); // 这里需要将左边数组的排序结果赋值给left变量，而不是直接调用quickSort函数。
    right = quickSort(right); // 这里需要将右边数组的排序结果赋值给right变量，而不是直接调用quickSort函数。
    left.push(leader); // 这里需要将班长的值添加到左边数组的末尾，而不是左边数组的开头。

    return left.concat(right);

 }
 console.log(quickSort(arr)); // [1,2,3,4,6,7,8,9]