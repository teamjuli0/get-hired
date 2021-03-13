// create a starter array
// loop through nth amount of times to define each line
// inside of loop, create new array of pascals to push into original array (nested array)
// return nested array at nth index

;`
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1 
`

// -------------------------------------------------------------------------------------
// UNFINISHED/WORK IN PROGRESS
// -------------------------------------------------------------------------------------

const pascal = (nth) => {
  const triangle = []

  for (let i = 0; i < nth; i++) {
    const newLine = []

    if (triangle[i] === 0) {
      triangle.push([1], [1, 1])
      i++
    } else {
      console.log(triangle[i - 1])
      for (let j = 0; j < triangle[i -1].length; i++) {
        if (j === triangle[i].length || j === 0) {
          newLine.push(1)
        } else {
          newLine.push(triangle[i -1][j] + triangle[i -1][j + 1])
        }
      }
      triangle.push(newLine)
    }
  }

  console.log(triangle)
  return triangle[nth]
}

console.log(pascal(6))
