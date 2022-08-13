let obj = [
    { name: "分类一", id: "1", pid: "0" },
    { name: "分类二", id: "2", pid: "0" },
    { name: "子分类一", id: "3", pid: "1" },
    { name: "子分类二", id: "4", pid: "1" },
    { name: "子分类三", id: "5", pid: "2" },
    { name: "子分类四", id: "6", pid: "2" },
    { name: "子分类五", id: "7", pid: "3" },
];

function invertTree(sourceArr) {
    const result = sourceArr.filter((item) => item.pid === "0");
    function insertChildren(levelArr) {
        let nextLevelObj = null;
        for (let i = 0; i < levelArr.length; i++) {
            Object.assign(result[i], {children:{}});
            for (let j = result.length; j < sourceArr.length; j++) {
                if (sourceArr[j].pid === levelArr[i].id) {
                    Object.assign(levelArr[i].children, sourceArr[j]);
                }
            }
        }
    }
    insertChildren(result);
    return result;
}

console.log(invertTree(obj));
