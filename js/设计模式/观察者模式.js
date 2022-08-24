// 观察者模式
//    1. 被观察者拥有所有观察者的完整数组
//    2. 事件发布时，遍历这个完整的列表，通知每一个观察者

// 观察者
class Student {
    constructor(name){
        this.name = name
    }
    notice(msg){
        console.log(`我:${this.name}，收到了消息：${msg}`);
    }
}
// 被观察者
class Teacher {
    constructor(){
        this.observer = []
    }
    addObserver(ob){
        this.observer.push(ob)
        return this
    }
    sendMsg(msg){
        this.observer.forEach(ele => ele.notice(msg))
    }
}

let MissLiu = new Teacher()
let Zhangsan = new Student('张三')
let Lisi = new Student('李四')
let WangWu = new Student('王五')
MissLiu.addObserver(Zhangsan).addObserver(Lisi).addObserver(WangWu)
MissLiu.sendMsg('12313123123')