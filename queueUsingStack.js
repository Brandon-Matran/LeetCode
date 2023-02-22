var MyQueue = function () {
    this.stack1 = []
    this.stack2 = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack1.push(x)

};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop())
    }

    value = this.stack2.pop()

    while (this.stack2.length !== 0) {
        this.stack1.push(this.stack2.pop())
    }

    return value



};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop())
    }
    let value = this.stack2.pop()
    this.stack2.push(value)
    while (this.stack2.length !== 0) {
        this.stack1.push(this.stack2.pop())
    }
    return value
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack1.length === 0 ? true : false

};
