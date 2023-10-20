class SimpleNode {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}

const printList = (head) => {
  let list = ''
  while (head) {
    list += ` ${head.val}->`
    head = head.next
  }
  console.log(list)
}

const generateList = (vals = []) => {
  let dummy = new SimpleNode(null, null)
  let node = dummy
  while (vals.length) {
    let newNode = new SimpleNode(vals.shift(), null)
    node.next = newNode
    node = newNode
  }

  return dummy.next
};

let l1 = generateList([2, 4, 3])
let l2 = generateList([5, 6, 4])
let l3 = generateList([9, 9, 9, 9])
let l4 = generateList([9, 9, 9, 9, 9, 9, 9])
let l5 = new SimpleNode(0, null)
let l6 = new SimpleNode(0, null)
let l7 = generateList([2, 4, 9])
let l8 = generateList([5, 6, 4, 9])
let l9 = generateList([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
let l10 = generateList([5, 6, 4])


module.exports = {
  SimpleNode, printList, generateList,
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10,
}
