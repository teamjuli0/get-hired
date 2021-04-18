const chessboard = (n) => {
  let even = true
  const options = [` # # # #`, `# # # # `]
  let finalStr = ''

  for (let i = 0; i < n; i++) {
    if (even) {
      even = false
      finalStr += `${options[0]}\n`
    } else {
      even = true
      finalStr += `${options[1]}\n`
    }
  }

  return finalStr
}

console.log(chessboard(8))
