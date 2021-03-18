const newLine = (line) => {
  const newLineDone = []
  line.forEach((num, i) => {
    if (i === 0) {
      newLineDone.push(num)
    }
    if (i !== line.length - 1) {
      newLineDone.push(num + line[i + 1])
    } else {
      newLineDone.push(1)
    }
  })

  return newLineDone
}

const pascal = (nth) => {
  const triangle = []

  for (let i = 0; i < nth; i++) {
    if (i === 0) {
      triangle.push([1])
    } else {
      triangle.push(newLine(triangle[i - 1]))
    }
  }

  return triangle[nth - 1]
}

console.log(pascal(6))
