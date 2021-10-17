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