/**
 *   debounce 防抖：在一段时间只执行一次
 *            这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
 *            setTimeout 和 clearTimeout，防抖的主要要素
 * */
function debounce(fun, time) {
    let timer = null;
    return function (...arg) {
        // 每一次点击判断有延迟执行的任务就停止
        // 多次点击，第一次执行跳过（timeout = null），执行setTimeout（timeout !== null），
        //              所以后面执行就符合if，执行clearTimeout
        if (timer !== null) clearTimeout(timer)  // debounce执行要把之前的setTimeout清除再重新计时
        timer = setTimeout(() => {
            fun.apply(this, arg);  // 此时的this->window，apply来改变this指向。如果函数有参数传入，用arguments处理
            // 因为如果在setTimeout直接使用arguments就会指向setTimeout
        }, time);
    };
}


//  闭包 -> debounce手写 -> apply和其他的区别