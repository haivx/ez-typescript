1. An equivalent syntax:
```js
    class Sorter {
        collection: number[]
        constructor(collection: number[]) {
            this.collection = collection
        }
    }
```

and

```js
    class Sorter {
        constructor(public collection: number[]) {}
    }
```

2. Type guards: We can use a `type guard` to restore access to one of specific types that we are dealing with inside of an union operator.
Ex:
```js
    if (this.collection instanceof Array)
```

- With primitive type(number, string, boolean, symbol), we use `typeof`

- With other type, we use `instanceof`

3. Abstract class: Using when we want to provide some reusable implementation of some function. But that function might depend upon some other functions that we can not yet implement because these need to be functions that are very specific to the different child classes that we are trying to inherit this thing into.

- Most importantly, an abstract class can not be used to create an object directly.
- Only used as a parent class
- Can contain real implementation for some methods
- The implemented methods can refer to other methods that don't actually exist yet(we still have to provide names and types for the un-implemented methods)
- can make child classes promise to implement some other method