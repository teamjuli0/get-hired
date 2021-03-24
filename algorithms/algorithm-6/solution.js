const addTwoNumbers = (l1, l2) => {
  const addToArr = (num, arr) => {
    if (num.length === 1) {
      remainder = 0
      arr.push(Number(num))
    } else {
      remainder = Number(num[0])
      arr.push(Number(num[1]))
    }
  }

  let remainder = 0
  let longest = l1.length > l2.length ? l1.length : l2.length

  const newArr = []

  for (let i = 0; i < longest; i++) {
    if (l1[i] !== undefined && l2[i] !== undefined) {
      let newNum = (l1[i] + l2[i] + remainder).toString()
      addToArr(newNum, newArr)
    } else if (l1[i] === undefined) {
      let newNum = (l2[i] + remainder).toString()
      addToArr(newNum, newArr)
    } else if (l2[i] === undefined) {
      let newNum = (l1[i] + remainder).toString()
      addToArr(newNum, newArr)
    }
  }
  newArr === [] ? newArr.push(Number(0)) : null

  remainder === 0 ? null : newArr.push(remainder)

  return newArr
}

console.log(addTwoNumbers([7, 4, 8, 5, 6], [9, 5, 8, 6, 7]))
