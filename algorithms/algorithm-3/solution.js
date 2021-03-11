const accountsArr = [[1,2,3],[3,2,1]]

const maximumWealth = accounts => {
  return Math.max(...accounts.map(account => account.reduce((a, b) => a + b, 0)))
};

console.log(maximumWealth(accountsArr))