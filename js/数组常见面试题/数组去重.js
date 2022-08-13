// 数组去重
// 1. es6
//                      1. set
var arr=[1,2,3,2,9]
var newarr = Array.from(new Set(arr))
console.log(newarr); //[1, 2, 3, 9]

//                      2. ...展开运算符 + set
var newarr = [...new Set(arr)]
console.log(newarr); //[1, 2, 3, 9]

//                      3. reduce
function fn2(arr){
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var newarr=[]
    arr.reduce((pre, cur) => {
        if(pre.indexOf(cur) == -1){
            newarr.push(cur)
        }
        return newarr
    },[])
    return newarr
}
console.log(fn2(arr));


//                      4. Array.filter() + indexOf | includes




// 2. 下标逻辑     Array.filter() + indexOf | includes
function fn(arr){
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var newarr=[]
    arr.filter(item=>{
        if(newarr.indexOf(item)==-1){
            newarr.push(item)
        }
        // if(!newarr.includes(item)){
        //     newarr.push(item)
        // }
    })
    return newarr
}
console.log(fn(arr));//[1, 2, 3, 9]





// 3. sort + 相邻比较
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    arr = arr.sort()
    let res = []
    for (let i = 0; i < arr.length; i++) {
        // + - 都行
        if (arr[i] !== arr[i-1]) {
            res.push(arr[i])
        }
    }
    return res
}
console.log(unique(arr));//[1, 2, 3, 9]




// 4. 对象key属性
function unique2(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    let res = [],
        obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            res.push(arr[i])
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++
        }
    }
    return res
}
console.log(unique2(arr));//[1, 2, 3, 9]

// 5. 双循环每一个判断相等