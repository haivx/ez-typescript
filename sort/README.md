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