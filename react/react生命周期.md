## 生命周期
- 在 React 中，对于每一次由状态改变导致页面视图的改变，都会经历两个阶段：`render` 阶段、`commit` 阶段。
    - render阶段：DOM 节点的 diff，找出需要改变的 DOM 操作
    - commit阶段：将对应的 DOM 操作提交至视图中

- 只有 class 组件才有生命周期，因为 class 组件会创建对应的实例，而函数组件不会。组件实例从被创建到被销毁的过程称为**组件的生命周期**。
![qwe](./%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png)

1. 首次渲染页面，会调用 `Mount` 相关生命周期钩子（`只会被调用一次`）
2. 之后的页面渲染中，会调用 `Update` 相关生命周期钩子
3. `Unmount` 是在卸载前调用告知

- render阶段
    - constructor，只会执行一次，调用该方法会返回一个组件实例。在初始化阶段执行，可直接对 `this.state` 赋值（其他生只能通过 `this.setState` 修改）.初始化组件的 state。


    - getDerivedStateFromProps，**静态方法**，接收 `propsprops` 和 `statestate` 两个参数，在调用 `render` 方法之前被调用（Mount，Update都会被调用），可以返回一个对象，用来更新 state，从 props 中获取衍生的 state。

    - shouldComponentUpdate，它在 render 方法之前执行，默认情况下，当组件的 `props` 或者 `state` 变化时，都会导致组件更新。接收两个参数，nextProps 和 nextState。**这个生命周期方法通常用来做性能优化**。返回 false，则 render 方法不会执行。

    - render，返回值将作为页面渲染的视图，被调用时，会返回四种类型之一
        - React 元素：通常为 JSX 语法。例如：<div />、<MyComponent> 等等。
        - 数组或者 fragments：render 方法可以通过数组返回多个元素。
        - Portals：渲染子节点至不同的子树中。
        - 字符串或者数值：会作为文本节点被渲染。
        - boolean 类型或者 null：什么都不渲染。

- commit 阶段
    1. 首次渲染时（Mount）会执行 componentDidMount
    2. 组件更新时（Update）会执行 getSnapshotBeforeUpdate 和 componentDidUpdate。

    - componentDidMount，在组件挂载之后执行，也只会执行一次，将组件对应的 DOM 插入 DOM 树中之后调用。依赖于 DOM 的初始化、发送网络请求、添加订阅。

    - getSnapshotBeforeUpdate，获取 DOM 改变前的信息，接收两个参数prevProps、prevState，传递给 componentDidUpdate 生命周期钩子的第三个参数。获取更新前 DOM 的信息。

    - componentDidUpdate，接收三个参数，prevProps、prevState、snapshot（getSnapshotBeforeUpdate 的返回值）。对 DOM 进行操作、网络请求。

    - componentWillUnmount，在组件卸载以及销毁之前调用。清理操作、清除 timer、取消网络请求、清除订阅


### 父子组件生命周期

- **父组件的状态发生改变**
1. 首先依次执行父组件 render 阶段的生命周期函数；
2. 然后依次执行子组件 render 阶段的生命周期函数；
3. 最后交叉执行子组件和父组件 commit 阶段的生命周期函数。

- **子组件的状态发生改变**，只会执行该子组件对应的生命周期函数，而不会执行其父组件或其兄弟组件的生命周期函数。
    1. 首先执行 `getDerivedStateFromProps`，在这里可以根据 props 更新 state；
    2. 然后判断该组件是否需要更新，即执行 `shouldComponentUpdate`；
    3. 需要更新则执行 `render` 函数以及后续生命周期函数，否则跳过后面生命周期函数的执行；
    4. 在将更改提交至 DOM 树之前执行 `getSnapshotBeforeUpdate`，在这里可以获取 DOM 被更改前的最后一次快照；
    6 .最后在将更改提交至 DOM 树之后执行 `componentDidUpdate`。


[1](https://juejin.cn/post/7096137407409422344#heading-14)