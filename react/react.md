## useCallback和useMemo 进行性能优化及使用场景

- 都会在组件**第一次加载时执行**，**后面会根据其依赖项发生变化时** ，会再次执行

- **useMemo 缓存的是变量， useCallback 缓存的是函数**

- useMemo
    - 一般情况下，当父组件更新某一个状态state时，会去渲染其所有的子组件，显然性能是不是最优的。
    - 当状态A发生变化时，**只重新渲染依赖状态A的子组件** ，其他子组件不需要重新渲染，只有依赖状态的组件才重新渲染，达到一种**缓存**的效果

- useCallback
    - 同上

## useRef的作用和应用场景

- 获取React JSX中的DOM元素

- 来保存变量

- 生成对 DOM 对象的引用

## webpack和vite的区别及优势

- webpack 是一个现代 JavaScript 应用程序的**静态模块打包器**，处理应用程序时，递归构建一个依赖关系图，包含应用程序需要的每个模块，然后将这些模块打包成一个或多个bundle。
    流程：
    - 初始化参数    从配置文件和语句中获得参数
    - 开始编译      拿到参数，初始化对象，加载插件，执行对象的方法编译
    - 确定入口      根据配置中的entry找到入口文件
    - 编译模块      调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
    - 完成模块编译   翻译完所有模块后，得到了最终内容以及它们之间的依赖关系。
    - 输出资源      根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表
    - 输出完成      根据配置确定输出的路径和文件名,把文件内容写入到文件系统


- 区别
    - webpack会先打包，然后启动开发服务器，请求服务器时直接给予打包结果。 而vite是直接启动开发服务器，请求哪个模块再对该模块进行实时编译。
    - 改动了一个模块后，webpack那样需要把该模块的相关依赖模块全部编译一次，vite仅需让浏览器重新请求该模块即可
    - 打包快

## 为什么不能在条件语句中使用hooks？

- 每一个useState都会在当前组件中创建一个hook对象  ，并且这个对象中的next属性始终执行下一个useState的hook对象
- **这些对象以一种类似链表的形式存在 Fiber.memoizedState 中**
- **而函数组件就是通过fiber这个数据结构来实现每次render后name address不会被useState重新初始化**
- 正是因为hooks中是这样存储state的 所以我们只能在hooks的根作用域中使用useState，而不能在条件语句和循环中使用


## hooks的优缺点

- 优点
    - 代码的可读性强
    - 更容易复用代码
    - 比高阶组件好
        - 难以区分这个props是来自哪个高阶组件
        - 高阶组件需要实例化一个父组件来实现，不管是在代码量还是性能上，都不如hooks
        - 依赖不清晰
        - 命名冲突

- 缺点
    - 状态不同步

## 受控组件和非受控组件

- **受控组件**：受状态（state）控制，即数据的展示与修改由 state 和 setState 决定。

- **非受控组件**：不受状态（state）控制，即获取数据就是相当于操作DOM。



## 双向数据绑定

- 

## React useState和setState到底是同步还是异步呢？

- 在正常的react的事件流里
    - setState和useState是异步执行的（不会立即更新state的结果）
    - 多次执行setState和useState，只会调用一次重新渲染render
    - setState会进行state的合并，而useState则不会
- 在setTimeout，Promise.then等异步事件中
    - setState和useState是同步执行的（立即更新state的结果）
    - 多次执行setState和useState，每一次的执行setState和useState，都会调用一次render

## HashRouter和BrowserRouter

- hash模式--HashRouter
    - hash 指的是地址中 # 号以及后面的字符。称为散列值。
    - 散列值不会随请求发送到服务器端的，所以**改变hash,不会重新加载界面**。
    - 监听onhashchange事件，hash改变时，可以**通过window.location.hash来获取和设置hash值**。
    - location.hash值的变化直接反应在浏览器的地址栏。

- history模式--BrowserRouter
    - History对象就是一个堆栈。
    - History.back：移动上一个网址，等同于浏览器的后退。
    - History.forward:移动到下一个网址，等同于浏览器前进。
    - History.go:接受一个参数，以当前网页为基准，来进行跳转。默认history.go(0),刷新当前界面。
    - History.pushState():往history堆栈中添加一条记录。不会刷新界面，只会导致History对象变化，地址栏发生变化。
    - History.replaceState():是替换当前history堆栈中最上层的记录。也是不会刷新界面，只会是Histoty对象变化，地址栏发生变化。

## useEffect第二个参数[]如何影响fn的执行？
- `无参数`：mount，update
- `[]`：mount
- `[值]`: mount，值变化
