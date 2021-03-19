# Algorithm

Given a non-negative integernum, repeatedly add all of its digits until the result has only one digit.

# Examples

## Example 1:

Input:

```javascript
const num = 38
```

Output:

```javascript
2
```

Explanation:

```
Given num = 38, the process is 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
```

## Example 2:

Input:

```javascript
const num = 896
```

Output:

```javascript
5
```

Explanation:

```
Given num = 89, the process is 8 + 9 + 6 = 23, 2 + 3 = 5. Since 5 has only one digit, return it.
```

## Example 3:

Input:

```javascript
const num = 468948
```

Output:

```javascript
3
```

# Constraints

    m == accounts.length
    n == accounts[i].length
    1 <= m, n <= 50
    1 <= accounts[i][j] <= 100
