## Regular Expressions (Regex)

Regular Expressions (or regex for short) allow us to search for and identify paterns in strings in a more efficient way than simple if statements. Regular expressions are not limited to javascript and are instead available in all programming languages. When speaking about Regular expressions in javascript, we have two different ways of creating them. The first would be through wrapping the pattern we will be searching for inside of slash characters while the second option would be by the use of the RegExp constructor function.

### Example Regex

```
/^[a-z0-9_-]{3,16}$/
```

### Anchors

In order to search for a string with a subset of characters inside of it, we need to identify what characters we will be searching for specifically. We do this by identifing the initial search characters with an anchor (specifically the character "^") prepended to the search terms. This anchor will allow for the regex to go and find any exact string that matches and starts with the defined search term.

```
Example: With ^A, the strings "A" and "A beautiful day" will both match while "a" and "a beautiful day" will not

Note: Regex is case-sensitive
```

While the "^" anchor identifies what a string must be initiated with in order to be considered a match, the "$" anchor identifies what a string must end with in order to be considered a match.

If we pretend the pattern "{3,16}" from the initial Regex example doesn't exist for a minute, we can come to the conclusion that this regex will match with some string that matches whatever the pattern "[a-z0-9_-]" evaluates to. Let's break this pattern down farther.

### Bracket Expressions

Whenever we want to find a match within a range of characters, they range needs to be placed inside of a set of squared brackets "[]" which are typically referred to as Bracket Expressions. Because they only describe what characters we want included in our search, they are also occasionally referred to as positive character groups. Inside of the squared brackets we place any characters that we would like to match in our search query.

```
Example: [fghijk]
"flight", "gas", "harp", "elf", and "cj" all match because they contain a character from within the squared bracket
```

As you might imagine, working with a larger range of characters might make the example above much longer. For example, if we needed to search for everything from "a" to "z" in both upper and lower case letters, we would be looking at the following expression:

```
[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]
```

While in theory this would work, it makes working with regex a bit more tedious than we would like it to be. Luckily, we have access to hyphens "-" which can make our life a whole lot easier. Using hyphens, we can turn the example found above into something more manageble such as this:

```
[a-zA-Z]
```

We can also do this for number characters as seen below:

```
[0-9]
```

Lastly, we can include special characters in our expressions such as in the example below:

```
[_-]
```

Although all of these examples will work independently of each other, the appeal of regex comes from the ability to combine and manipulate these from within the same bracket expression:

```
Example: [a-z0-9_-]

"teamjulio", "teamjuli0", "_teamjulio", "team-juli0", and even "23153123" all fulfill the regex requirements

Note: Notice how
```
