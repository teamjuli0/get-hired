# Algorithm

Given a string s, find the length of the longest substring without repeating characters.

# Examples

## Example 1:

Input:

```javascript
const s = 'abcabcbb'
```

Output:

```javascript
output = 3
```

Explanation:

```
The answer is "abc", with the length of 3.
```

## Example 2:

Input:

```javascript
const s = 'bbbbb'
```

Output:

```javascript
output = 1
```

Explanation:

```
The answer is "b", with the length of 1.
```

## Example 3:

Input:

```javascript
const s = 'pwwkew'
```

Output:

```javascript
output = 3
```

Explanation:

```
The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Example 4:

Input:

```javascript
const s = ''
```

Output:

```javascript
output = 0
```

# Constraints

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.
