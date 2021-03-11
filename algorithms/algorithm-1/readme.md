# Algorithm

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

# Examples

## Example 1:

Input:

```javascript
const address = '1.1.1.1'
```

Output:

```javascript
'1[.]1[.]1[.]1'
```

## Example 2:

Input:

```javascript
const address = '255.100.50.0'
```

Output:

```javascript
'255[.]100[.]50[.]0'
```

# Constraints

    The given address is a valid IPv4 address.
