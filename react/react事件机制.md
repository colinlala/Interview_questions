## DOM事件
1. 事件捕获阶段
    - 先由最上一级的节点先接受事件，然后向下传播到具体的节点
2. 处于目标阶段
    - 在目标节点上触发-目标阶段
    - 事件目标是真正事件触发的对象
3. 事件冒泡阶段
    - 事件开始由最具体的元素接收，然后逐级向上传播
- addEventListener，可以选择是捕获阶段还是冒泡阶段绑定事件处理函数
    ```js
    // useCapture 为true就是在捕获阶段绑定函数
    element.addEventListener(event, function, useCapture)
    ```
- 阻止冒泡
    - **cancelBubble**设为true（微软模型）
    - 调用**stopPropagagtion()**方法（W3C模型）
    ```js
    function stop(event){
        if(!event){
            window.event.cancelBubble = true
        }
        if(event.stopPropagagtion){
            event.stopPropagagtion()
        }
    }
    ```
- 阻止默认行为
    ```js
    function stop(event){
        if(!event){
            // 微软模型
            window.event.returnValue = false
        }
        if(event.preventDefault){
            event.preventDefault()
        }
    }

## React事件和原生事件有什么区别？
- React 事件使用驼峰命名，而不是全部小写。
- 通过 JSX , **传递一个函数作为事件处理程序**，而不是一个字符串。
- 在 React 中你不能通过返回false 来阻止默认行为。必须明确调用 preventDefault。

## React事件和原生事件的执行顺序
- react的所有事件都挂载在document中
- 当真实dom触发后冒泡到document后才会对react事件进行处理
- 所以**原生的事件会先执行**
- 然后**执行react合成事件**
- 最后执行真正在document上挂载的事件
