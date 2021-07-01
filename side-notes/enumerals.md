## Enumerals

The litteral definition for something that is enumerable is assessing whether the item being looked at is quantifiable. This applies to properties of objects in javascript in a very interesting way due to the multiple options available for creating objects. Below we will take a look at the creation of properties in an object via the assignment operator and draw a distinction to the Object.assign method specifically.

### Example Enumerable Properties

```javascript
// Here we've give our constant a name of person and initial value of an object via the assignment operator
const person = {
  firstName: 'Will',
  lastName: 'Smith',
}

person.age = 25

for (const property in person) {
  // prints "firstName", "lastName", & "age"
  console.log(property)
}
```

In this case, we know that the properties of person are enumerable because we are able to itterate through them using a for...in loop. We can also verify this by using the property descripter such as in the following code snippet:

```javascript
const descriptor = Object.getOwnPropertyDescriptor(person, 'firstName')

// If property is enumerable, enumerable will return true when called on the Object.getOwnPropertyDescriptor method
console.log(descriptor.enumerable)
```

### Example Non-Enumerable Properties

Enumerable properties are only one half of the equation however. The other half in understanding enumerable properties is understanding non-enumerable properties. Non-enumerable properties are simply properties that cannot be enumerated. Take the following example:

```javascript
const person = {
  firstName: 'Will',
  lastName: 'Smith',
}

Object.defineProperty(person, 'age', { value: 25, enumerable: false })

for (const property in person) {
  // prints "firstName" & "lastName"
  console.log(property)
}
```

Notice that in this example, both "firstName" & "lastName" were printed but "age" was not. This is because when we defined the property using the "defineProperty" method of Object, we specifically defined age as a non-enumerable property. This however does not change the way we call on the age property as seen below:

```javascript
console.log(
  `${person.firstName} ${person.lastName} was ${person.age} years young in 2021!`
)
```
