`
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
`

const {
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, SimpleNode, printList
} = require('./lists.js')


/*-> this solution runs into scientific notation issue
let parseList = (head) => {
  let nums = []
  while (head) {
    nums.push(head.val)
    head = head.next
  }
  return +nums.reverse().join('')
};

const addTwoNumbers = (l1, l2) => {
  let listSum = `${(parseList(l1) + parseList(l2))}`.split('')
  console.log(listSum)
  let head = new SimpleNode(+listSum.pop(), null)
  const makeList = (node) => {
    if (!listSum.length) return
    let nextNode = new SimpleNode(+listSum.pop(), null)
    node.next = nextNode
    makeList(nextNode)
  }

  makeList(head)
  return head
};
*/



/*

create a head node and initialize the value -1
create a carry variable and initialize to zero

start iterating through our linked lists
  -on each iteration
    -check if l1 or l2 are null
      -if null set val to zero, next to null
    -add l1.val + l2.val + carry
      -if sum > 9  //(14)
        -make a newNode and set val: sum - 10, next: null
        -set dummyNode.next to newNode
        -set carry to 1
        -move l1 and l2 pointers
        -continue
      -else
        -make a newNode and set val: sum, next: null
        -set dummyNode to newNode
        -set carry to 0
        -move l1 and l2 pointers
        -continue
*/


const addTwoNumbers = (l1, l2) => {
  let dummyHead = new SimpleNode(-1, null)
  let carry = 0, curNode = dummyHead

  while (l1 || l2 || carry) {
    //check the nodes
    l1 = l1 || { val: 0, next: null }
    l2 = l2 || { val: 0, next: null }

    //handle math & attach new node
    let sum = l1.val + l2.val + carry
    let newNode = new SimpleNode(sum % 10, null)
    carry = Math.floor(sum / 10)

    //move pointers
    curNode.next = newNode
    curNode = newNode
    l1 = l1.next
    l2 = l2.next
  }

  return dummyHead.next
}


printList(addTwoNumbers(l1, l2)) //708
// printList(addTwoNumbers(l3, l4)) //89990001
// printList(addTwoNumbers(l5, l6)) //0
// printList(addTwoNumbers(l7, l8)) //70401
// printList(addTwoNumbers(l9, l10)) //6640000000000000000000000000001
