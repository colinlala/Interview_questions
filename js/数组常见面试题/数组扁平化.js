let arr = [1, [2, [3, [4, [5]], [6]], [7]], [8]];

// 1. flat() 默认拉平一层嵌套数组，传入数字几就拉平几层
let brr = arr.flat(Infinity);
console.log(brr); // [1, 2, 3, 4, 5, 6, 7, 8]



// 2. 递归 + reduce
let brr2 = (arr) => {
    // 用递归，用 for 循环加递归也可以，这里用 reduce
    // cur 是循环的当前一个值，相当于 for循环里的arr[i]， pre 是前一个值，相当于for循环里的arr[i-1]
    let crr = arr.reduce((pre, cur) => {
        //   concat() 方法用于连接两个或多个字符串。
        return pre.concat(Array.isArray(cur) ? brr2(cur) : cur);
    }, []);
    return crr;
};
console.log(brr2(arr)); // [1, 2, 3, 4, 5, 6, 7, 8]



// 3. 转成字符串，再去掉字符串里的 “[” 和 “]”，再把字符串转回数组
let brr3 = JSON.parse( "[" + JSON.stringify(arr).replace(/\[|\]/g, "") + "]")
console.log(brr3) // [1, 2, 3, 4, 5, 6, 7, 8]


// 4.  
//数组转为字符串，再将字符串转为数组
var newarr = arr.join(',').split(',').map(item => {
    return parseInt(item)
})
console.log(newarr);//[1, 2, 3, 2, 9, 2, 3, 1, 2, 3]
