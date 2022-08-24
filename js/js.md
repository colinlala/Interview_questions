## 数据类型

- 八种数据类型，分别是 Undefined(声明变量而没有赋值)、Null、Boolean、Number、String、Object、Symbol、BigInt
    1. 栈：基本数据类型（Undefined、Null、Boolean、Number、String）
        - 当我们将一个值 a 赋值给 b 时,b 会生成一个新的栈内存地址，两个值时相互独立的，**修改互不影响**。
    2. 堆：复杂数据类型（对象、数组和函数）
        - 当我们将一个对象 a 赋值给 b 时，我们会栈中复制一个指针引用，原来的指针引用和复制出来的指针引用都是指向同一个堆内存地址，我们不管修改 a 或者 b，最后修改的都是堆内存引用的同一个值，**两个值都会受影响**。

- **判断数据类型的方式**
    1. typeof，只能检测 number、boolean、string、function、undefined、symbol
        ```js
        // 'number'
        console.log(typeof 123)
        ```
        - **区分不了object、array、null**
    
    2. instanceof，检测构造函数的 prototype 属性是否出现在某个 实例对象 的原型链上，判断在其原型链中能否找到该类型的原型。
        - 能正确判断引用数据类型（复杂数据类型），**number、string、boolean、symbol不能判断**
        ```js
        // false
        console.log(123 instanceof Number)
        ```

    3. constructor，可以判断 `null` 和 `undefined`除外的所有数据类型，是因为他们作为 JavaScript 运行环境创建时就存在的基本数据类型，不存在 constructor 属性，**constructor 属性可以被修改，所以结果值不一定准确。**
        ```js
        // Number
        console.log((123).constructor)
        ```

    4. Object.prototype.toString.call()
        - 如果直接obj.toString()，则**结果不一样**（function类型返回内容为函数体的字符串，Array类型返回元素组成的字符串），Array、function等类型作为Object的实例，都重写了toString方法。所以得不到想要的具体类型。

## 数组的方法

- 增加
    - push 往数组末尾推值，返回新数组长度
    - unshift 往数组首位推值，返回新数组长度
    - **splice** 三个参数 第一参数开始操作数组的位置，要删除的个数，要插入的元素 ，返回一个空数组
    - concat 合并两个数组返回新数组，不会影响原数组

- 删除
    - pop 删除尾，返回被删除的项
    - shift 删除头，返回被删除的项
    - **splice** 用前两个参数来删除，第一个参数开始操作数组的位置，第二个参数要删除的数目。
    - slice 截取数组 不会修改原数组，返回一个全新的数组

- 改
    - **splice**

- 查
    - indexOf 返回查找元素的在数组中的位置（第一个），没有返回-1，判断不了NaN（===）
    - find 返回匹配的第一个元素
    - includes 返回一个 boolean 值，**ES6的语法，语义化更强，可判断是否存在 NaN**

- 排序
    - reverse 反转数组
    - sort 排序

- 转换
    - join 数组转字符串，不改变原数组

- 遍历数组方法
    - some 遍历数组每一个数，将数传入回调进行测试，只要有一个符合条件的返回 true
    - every 遍历数组每一个数，将数传入回调进行测试,全部符合返回 true
    - foreach 遍历所有值，没有返回值
    - filter 过滤数组，返回符合的数
    - map 遍历数组，对每一项数进行处理，返回被处理后的数组
    - **reduce** 
        1. 数组累加  `[1, 2, 3, 4, 5, 6, 7, 8].reduce((a, i) => a + i, 5); // 输出：41`
        2. 找出数组最大的值 `[1, 2, 3, 4, 5, 6, 7, 8].reduce((a, i) => Math.max(a, i)); // 8`
        3. 处理不规则数组 
            ```js
            let data = [
                ["红色","128g", "苹果手机"],
                ["南北","两室一厅","128㎡","洋房住宅"],
                ["小米","白色","智能运动手表","心率血压血氧","来电信息提醒"], 
                ["官方发售","2020年秋季","篮球","球鞋","品牌直邮"]
            ]
            let dataConcat = data.map(item=>item.reduce((a,i)=>`${a} ${i}`))

            // 输出结果：
            ["红色 128g 苹果手机"
            "南北 两室一厅 128㎡ 洋房住宅"
            "小米 白色 智能运动手表 心率血压血氧 来电信息提醒"
            "官方发售 2020年秋季 篮球 球鞋 品牌直邮"]
            ```
        4. 数组去重
            ```js
            let array = [1, 2, 3, 'a', 'b', 'c', 1, 2, 3, 'a', 'b', 'c'];
            array.reduce((noDupes, curVal) => {
                if (noDupes.indexOf(curVal) === -1) { noDupes.push(curVal) }
                    return noDupes
            }, [])   // 输出：[1, 2, 3, 'a', 'b', 'c']
            ```
        5. 判断括号是否合法
            ```js
            [..."(())()(()())"].reduce((a,i)=> i === '(' ? a+1 : a-1 , 0); // 输出：0  括号数量是合法的。
            
            // 使用循环方式
            let status=0
            for (let i of [..."(())()(()())"]) {
                if(i === "(")
                    status = status + 1
                else if(i === ")")
                    status = status - 1
                if (status < 0) {
                    break;
                }
            }
            ```
        6. json对象按属性分组
            ```js
            let obj = [
                {name: '张三', job: '数据分析师', country: '中国'},
                {name: '艾斯', job: '科学家', country: '中国'},
                {name: '雷尔', job: '科学家', country: '美国'},
                {name: '鲍勃', job: '软件工程师', country: '印度'},
            ]

            obj.reduce((group, curP) => {
                let newkey = curP['country']
                if(!group[newkey]){
                    group[newkey]=[]
                }
                group[newkey].push(curP)
                return group
            }, [])
            ```
        7. 数组扁平化（Array.flat()也可以）
            ```js
            // 一级深度
            [[3, 4, 5], [2, 5, 3], [4, 5, 6]].reduce((singleArr, nextArray) => singleArr.concat(nextArray), [])
            ```
        8. 反转字符串
            ```js
            [..."hello world"].reduce((a,v) => v+a)
            ```

## 如何判断数据类型是数组

1. 通过**Object.prototype.toString.call()**做判断
    ```js
    Object.prototype.toString.call(obj).slice(8,-1) === 'Array';
    ```
2. 通过**原型链**做判断
    ```js
    obj.__proto__ === Array.prototype
    ```
3. 通过**ES6的Array.isArray()**做判断
    ```js
    Array.isArrray(obj); 
    ```
4. 通过**instanceof**做判断
    ```js
    obj instanceof Array
    ```
5. 通过**Array.prototype.isPrototypeOf**
    ```js
    Array.prototype.isPrototypeOf(obj)
    ```
6. Object 的每个实例都有构造函数 **constructor**
    ```js
    obj.constructor === Array
    ```
    > constructor 有被修改的风险，判断结果不一定准确
7. **typeof**，也行，但是显示object


## Undefined与Null的区别

- undefined 代表的含义是**未定义**，原始的状态
- null 代表的含义是**空对象**，人为的结果，在内存里的表示就是，**栈中的变量没有指向堆中的内存对象**。


## 特殊的typeof null

- 返回object  
    1. null值表示一个空对象指针，它代表的其实就是一个空对象
    2. 最初的设计，**JavaScript 中的值是由一个表示类型的标签和实际数据值表示的(对象的类型标签是 0)**。由于 null 代表的是空指针，因此，null的类型标签也成为了 0，

##  var、let、const 的区别

- var 声明的范围是**函数作用域**、全局作用域，let 和 const 声明的范围是块作用域

- var 声明的变量会被提升到函数作用域的顶部，let 和 const 声明的变量不存在提升，且具有**暂时性死区特征**

- var 允许在同一个作用域中重复声明同一个变量，let 和 const 不允许

- 在全局作用域中**使用 var 声明的变量会成为 window 对象的属性**，let 和 const 声明的变量则不会

- const 的行为与 let 基本相同，唯一一个重要的区别是，使用 const 声明的变量必须进行初始化，且**不能被修改**

## == 和 ===

- **== 会做隐式转换后再比较**
![==](./%3D%3D.png)
1.  都为简单数据类型转为数值在比较
2.  都为对象，比较是否是引用的是同一个内存地址
3.  null 和 undefined 相等
4.  NaN false
5.  简单和复杂类型 会将对象转变为原始类型在比较

## MVVM

- 视图模型双向绑定`Model-View-ViewModel`，也就是把MVC中的`Controller`演变成`ViewModel`。
    - Model层代表数据模型
    - View代表UI组件
    - ViewModel是View和Model层的桥梁，
- 数据会绑定到`viewModel`层并自动将数据渲染到页面中，视图变化的时候会通知`viewModel`层更新数据。

- **以前是操作DOM结构更新视图，现在是数据驱动视图。**


## async/await

- **用同步的方式，执行异步操作**
- async函数返回的是一个Promise对象，有无值看有无return值
- **async 相较于 Promise 的优势**
    1. 相比于 Promise，它能更好地处理 then 链
    ```js
    // Promise
    step1(time1)
        .then(time2 => step2(time2))
        .then(time3 => step3(time3))
        .then(result => { console.log(`result is ${result}`) })
    // async/await
    const time2 = await step1(time1);
    const time3 = await step2(time2);
    const result = await step3(time3);
    ```
    2. 传中间值更简洁
    ```js
    // Promise
    step1(time1)
        .then(time2 => {
            return step2(time1, time2)
                .then(time3 => [time1, time2, time3]);
        })
        .then(times => {
            const [time1, time2, time3] = times;
            return step3(time1, time2, time3);
        })
        .then(result => {
            console.log(`result is ${result}`);
        });
    // async/await
    const time2 = await step1(time1);
    const time3 = await step2(time1, time2);
    const result = await step3(time1, time2, time3);
    ```
    3. 调试方便，Promise不能在箭头函数中设置断点。

    - 劣势，不支持异步并行。


## 浅拷贝、深拷贝
- 浅拷贝：就是将一个对象的内存地址的复制给另一个对象。（**类似就给个别墅地址**）
- 深拷贝：先新建一个空对象，内存中创建一个新的地址， 然后把被复制对象的所有可枚举的属性方法一一复制过来。（**类似双拼别墅，地址不一样，但是家里面的的东西都一模一样**）


- 实现浅拷贝
    ```js
    function clone(obj) {
        const newobj = {};
        for (const key in obj) {
            newobj[key] = obj[key];
        }
        return newobj;
    }
    ```

- **实现深拷贝**
    1. 递归
        ```js
        // 处理symbol Reflect.ownKeys返回一个由自生属性生成的数组
        const sy = Symbol("a")
        const a = {name:"a",age:12}
        a[sy] = "132"
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
                // key  name、age、Symbol(a)
                clone[key] = deepclone3(target[key]);
            });
            return clone;
        }
        ```
    2. 第三方库lodash中的cloneDeep()方法

    3. ~~JSON.parse(JSON.stringify(obj))~~，只能深拷贝number、string、boolean和普通的对象
        - 对象里面有时间类型 -> 字符串类型
        - 对象里面有undefined和Function ， 直接丢失
        - 对象里面有NaN、Infinity和-Infinity，都变为null
        - 对象循环引用报错


## 从浏览器输入url到页面响应结束，这个过程是怎样的？js会阻塞文档渲染吗？


## call、bind、apply

- call 方法接受的是**若干个参数列表**，而 apply 接收的是**一个**包含多个参数的数组。都是立即执行
- bind 返回值是一个函数，并且需要调用才能执行


- 实现call
    ```js
    
    ```

## DOM BOM

- DOM：DOM又称文档对象模型，它是HTML和XML文档的编程接口，它主要描述了一些我们使用JS处理网页内容的方法和接口，它的目标是网页内容

- BOM：BOM又称浏览器对象模型，它主要用来描述一些与浏览器行为相关的接口和方法，比如我们利用JS调整浏览器窗口大小、标签页跳转等等，这些都是BOM对象。
    1. window对象
        - window.top：顶层窗口，即最外层窗口
        - window.parent：当前窗口的父窗口，如果当前窗口即顶层窗口，则window.top=window.parent。
        - self：当前窗口
        - screenLeft：窗口距离屏幕左侧的距离
        - screenTop：窗口距离屏幕顶部的距离
        - moveTo：将窗口移动到指定坐标
        - moveBy：将窗口向指定方向移动指定像素值
        - innerWidth，innerHeight，outerWidth，outerHeight
    2. location对象
        - location对象既是window的属性，也是document的属性
        - search：url中包括？在内后后面的内容
        - assign：接收一个url地址，它会让我们的网页立即启动导航到新的url，而且还会再浏览器历史记录中增加一条记录。
        - href：当前url地址
    3. navigator对象：浏览器的基本信息，appName浏览器全名，appVersion浏览器版本
    4. screen对象：客户端的信息，屏幕像素高度、宽度...
    5. history对象
        - go：控制浏览器的前进后退，它的参数为一个数字
        - pushState：改变浏览器URL的时候不会加载新的页面，让我们的url改变时不刷新页面.

## 遍历对象

- 遍历全部
    - for in  遍历对象的所有可枚举属性，包括**对象本身的和对象继承来的属性**
    - Object.entries() 返回一个嵌套数组，数组内包括了属性名与属性值

- 遍历属性
    - Reflect.ownKeys() 对象的所有属性
    - Object.keys() 遍历到所有对象本身的可枚举属性，但是其返回值为数组，**不遍历被继承的属性**
    - Object.getOwnPropertyNames() 返回对象得所有属性，包括了不可枚举属性

- 遍历属性值
    - Object.values() 属性值构成的数组
    - Object.getOwnPropertySymbols() 返回对象内的所有Symbol属性

## DOM相关操作

- 节点创建型API
    - **createElement**通过传入指定的一个标签名来创建一个元素，只是创建出来，并未添加到HTML文档中，要调用appendChild或insertBefore等方法将其添加到HTML文档树中。
    - 

