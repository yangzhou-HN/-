var arr = [4, 1, 6, 9, 3, 2, 8, 7, 5, 10];

function compare(a, b) { // 比较
    if (a < b) {
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

// 选择排序 内层循环，每一圈选出一个最大的数，放在最后面。
function sort(arr) {
    for (var i = 0; i < arr.length - 1; i++) { //
        var maxIndex = 0; // 这里需要将maxIndex的初始值设置为0，而不是-1。
        for (var j = 1; j < arr.length - i; j++) {
            if (compare(arr[maxIndex], arr[j])) { 
                maxIndex = j;
            }    
        }
        exchange(arr, maxIndex, arr.length - 1 - i);
    }
}
sort(arr);
console.log(arr); // [1,2,3,4,6,7,8,9]

// 任何一中排序算法，都没有优劣之分。只有是否适合的场景。