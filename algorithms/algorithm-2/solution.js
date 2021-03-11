const candiesArr = [2, 3, 5, 1, 3]
const extraCandiesInt = 3

// Solution #1
const kidsWithCandies = (candies, extraCandies) => {
  const candiesArr = []
  for (let i = 0; i < candies.length; i++) {
    let isItGreater = true
    for (let j = 0; j < candies.length; j++) {
      if (candies[i] + extraCandies < candies[j]) {
        isItGreater = false
        break
      }
    }

    candiesArr.push(isItGreater)
  }

  return candiesArr
}

console.log(kidsWithCandies(candiesArr, extraCandiesInt))
