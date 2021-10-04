class Stack {
    // Stack 拥有push  pop  peek  isEmpty  clear 方法
    constructor() {
        this.items = []
    }
    push(ele) {
        return this.items.push(ele)
    }
    pop(ele) {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        return this.items.length ===0
    }
    clear(){
        this.items = []
    }
    size(){
        return this.items.length
    }
}

const obj = new Stack()
obj.push(5)
obj.push(8)
obj.push(18)
obj.push(82)
obj.pop()
const lg = obj.peek()
const im = obj.isEmpty()
const clear = obj.clear()
console.log(obj);