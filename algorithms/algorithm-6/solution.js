// ====================================================
// Unfinished Algorithm
// ====================================================

const addTwoNumbers = function (l1, l2) {
  let remainder = 0
  let totalLength = l1.length > l2.length ? l1.length : l2.length

  const newArr = []

  for (let i = 0; i < totalLength; i++) {
    if (l1[i] !== null && l2[i] !== null) {
      let newNum = (l1[i] + l2[i] + remainder).toString()

      if (newNum.length === 1) {
        remainder = 0
        newArr.push(Number(newNum))
      } else {
        remainder = Number(newNum[0])
        newArr.push(Number(newNum[1]))
      }
    }
  }
  newArr === [] ? newArr.push(Number(0)) : null

  remainder === 0 ? null : newArr.push(remainder)

  return newArr
}

console.log(addTwoNumbers([7, 4, 8, 5, 6], [9, 5, 8, 6, 7]))
