# Algorithm

Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

# Examples

## Example 1: 
Input:

```javascript
const candies = [2,3,5,1,3]
const extraCandies = 3
```

Output:

```javascript
[true,true,true,false,true] 
```

Explanation:

```
Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
```

## Example 2:

Input:
```javascript
const candies = [4,2,1,1,2]
const extraCandies = 1
```

Output:

```javascript
[true,false,false,false,false] 
```

Explanation:

```
There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.
```

## Example 3:

Input:
```javascript
const candies = [12,1,12]
const extraCandies = 10
```

Output:
```javascript
[true,false,true]
```

# Constraints
    2 <= candies.length <= 100
    1 <= candies[i] <= 100
    1 <= extraCandies <= 50

