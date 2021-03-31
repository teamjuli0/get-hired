// ===============================================================
// Unfinished Algorithm
// ===============================================================

const subStr = 'abcabcde'

const lengthOfLongestSubstring = (s) => {
  const splitString = s.split('')
  let longestStrLength = 0
  let currentStrLength = 0
  let currentSubStr = []
  for (let i = 0; i < splitString.length; i++) {
    if (i === 0) {
      currentSubStr.push(splitString[i])
      currentStrLength++
    }
    for (let j = i; j < splitString.length; j++) {
      //   console.log(currentSubStr.indexOf(splitString[j + 1]))
      if (currentSubStr.indexOf(splitString[j + 1]) === -1) {
        currentSubStr.push(splitString[j + 1])
        currentStrLength++
      } else {
        if (currentStrLength > longestStrLength) {
          longestStrLength = currentStrLength
        }
        currentStrLength = 0
        break
      }
    }
  }

  return longestStrLength
}

console.log(lengthOfLongestSubstring(subStr))
