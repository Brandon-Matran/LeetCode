class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

var mergeTwoLists = function(list1, list2) {
    const dummyHead = new Node(0)
    let current1 = list1
    let current2 = list2
    let tail = dummyHead

    while (current1 !== null && current2 !== null) {
        if (current1.val < current2.val) {
            tail.next = current1
            current1 = current1.next
        } else {
            tail.next = current2
            current2 = current2.next
        }
        tail = tail.next
    }
        if (current1 !== null) {
            tail.next = current1
        } else {
            tail.next = current2
        }
        return dummyHead.next
    }
 