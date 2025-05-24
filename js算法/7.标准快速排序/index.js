var arr = [4, 1, 6, 9, 3, 2, 8, 7];

function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function quicksort(arr, begin, end) {
    if (begin >= end-1) return; 
    var left = begin;
    var right = end;
    do {
        do left++; while (left < right && arr[left] < arr[begin]); // 这里需要判断left是否小于right，否则会出现数组越界的错误。
        do right--; while (right > left && arr[right] > arr[begin]); 
        if (left < right) swap(arr, left, right);
    }while(left < right) 
        var swapPoint = left == right ? right-1 : right; 
        swap(arr, begin, swapPoint); 
        quicksort(arr, begin, swapPoint);
        quicksort(arr, swapPoint+1, end);
}

quicksort(arr, 0, arr.length);
console.log(arr);
