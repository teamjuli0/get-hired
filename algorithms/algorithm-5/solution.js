const addAll = (num) => {
  let totalNum = 0
  const numArr = num.split('')

  numArr.forEach((num) => {
    totalNum = totalNum + JSON.parse(num)
  })

  return totalNum
}

const singleDigit = (num) => {
  if (num.toString().length > 1) {
    return singleDigit(addAll(num.toString()))
  } else {
    return num
  }
}

console.log(singleDigit(893))
