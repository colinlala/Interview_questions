// let obj = [
//     { name: "分类一", id: "1", pid: "0" },
//     { name: "分类二", id: "2", pid: "0" },
//     { name: "子分类一", id: "3", pid: "1" },
//     { name: "子分类二", id: "4", pid: "1" },
//     { name: "子分类三", id: "5", pid: "2" },
//     { name: "子分类四", id: "6", pid: "2" },
//     { name: "子分类五", id: "7", pid: "3" },
// ];

// function invertTree(sourceArr) {
//     const result = sourceArr.filter((item) => item.pid === "0");
//     function insertChildren(levelArr) {
//         let nextLevelObj = null;
//         for (let i = 0; i < levelArr.length; i++) {
//             Object.assign(result[i], {children:{}});
//             for (let j = result.length; j < sourceArr.length; j++) {
//                 if (sourceArr[j].pid === levelArr[i].id) {
//                     Object.assign(levelArr[i].children, sourceArr[j]);
//                 }
//             }
//         }
//     }
//     insertChildren(result);
//     return result;
// }

// console.log(invertTree(obj));

// console.log(['a',6,'b',3].indexOf('b'));
// console.log("a".charCodeAt());
 //数组数据
 var data = ['b','a','c','a','b','b','b','c','c','a','c','a','a','a','b','c'];
 //空对象
 var map = {};
 var i = 0, len = data .length;
 //循环查找
 for (; i < len; i++) {
 	 //数组里的i个元素
     var v = data [i];
     //将数组的i个元素作为map对象的属性查看其属性值
     var counts = map[v];
     //如果map对象没有该属性，则设置该属性的值为1，有的话在其基础上再+1
     if (counts) {
         map[v] += 1;
     } else {
         map[v] = 1;
     }
 }
 console.log(map);

