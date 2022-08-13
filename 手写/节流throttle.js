/**
 *   throttle 节流：在间隔一段时间执行一次
 * */
// 1. 不使用 setTimeout
function throttle(fun, time) {
    let t1 = Date.now() // 初始时间
    return function (...arg) {
        let t2 = new Date(); // 当前时间
        if( (t2 - t1) > time) {    // 用当前时间 - 初始时间 和 传进来的时间作对比
            fun.apply(this, arg);
            t1 = t2;
        }
    };
}


// 2. 使用setTimeout
function throttle(fn, timeout) {
	let timer;
	return function (...arg) {
		if (timer) return;
		timer = setTimeout(() => {
			fn.apply(this, arg);
			timer = null;
		}, timeout);
	};
}

