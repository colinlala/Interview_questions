// let data = [
//     ["红色","128g", "苹果手机"],
//     ["南北","两室一厅","128㎡","洋房住宅"],
//     ["小米","白色","智能运动手表","心率血压血氧","来电信息提醒"],
//     ["官方发售","2020年秋季","篮球","球鞋","品牌直邮"]
// ]
// let dataConcat = data.map(item=>item.reduce((a,i)=>{
// console.log(a,i);
//    return `${a} ${i}`
// }
// ,'123'))
// console.log(dataConcat);

// let obj = [
//     {name: '张三', job: '数据分析师', country: '中国'},
//     {name: '艾斯', job: '科学家', country: '中国'},
//     {name: '雷尔', job: '科学家', country: '美国'},
//     {name: '鲍勃', job: '软件工程师', country: '印度'},
//     {name: '鲍勃', job: '软件工程师', country: ''},
//   ]

//   console.log(  obj.reduce((group, curP) => {
//     console.log(group, curP,'123--------------------');
//     let newkey = curP['country']
//     if(!group[newkey]){
//       group[newkey]=[]
//     }
//     group[newkey].push(curP)
//     return group
//   }, []));

// 输出：

//   console.log(  [..."hello world"].reduce((a,v) => {
//   console.log(a,v,v+a)
//   v+a
//    } ));
// /**
//  * 要求返回的格式如下：2022-01-07 08:08:08
//  * @returns {string}
//  */
// function getDateTime() {
//     let data = new Date(),
//         year = data.getFullYear(),
//         month = data.getMonth() + 1,
//         day = data.getDate(),
//         hour = data.getHours(),
//         min = data.getMinutes(),
//         second = data.getSeconds();

//     // 当月、日、时、分、秒数字小于10时，补0。
//     if (month < 10) {
//         month = "0" + month;
//     }
//     if (day < 10) {
//         day = "0" + day;
//     }
//     if (hour < 10) {
//         hour = "0" + hour;
//     }
//     if (min < 10) {
//         min = "0" + min;
//     }
//     if (second < 10) {
//         second = "0" + second;
//     }

//     return (
//         year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + second
//     );
// }
// console.log(getDateTime());
const sy = Symbol("a")

const a = {name:"a",age:12}
a[sy] = "132"

const aee = {
	data: new Date()
}
 
function deepclone3(target) {
	if (target instanceof RegExp) {
		return new RegExp(target);
	}
	if (target instanceof Date) {
		return new Date(target);
	}
	if (target === null) {
		return target;
	}

	if (typeof target !== "object") {
		return target;
	}
	const clone = new target.constructor();
	Reflect.ownKeys(target).forEach((key) => {
		clone[key] = deepclone3(target[key]);
	});
	return clone;
}
console.log(deepclone3(aee));
