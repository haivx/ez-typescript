1. When we use enum?

- Follow near-identical syntax rules as normal object
- Creates an object with the same keys and values when converted from TS to JS
- Primary goal is to signal to other engineers that these are all closely related values
- Use whenever we have a small fixed set of values that are all closely related and known at compile time

2. Type assertion is used when we are trying to override typescripts, default behaviour. We're kind of tell typescript that 'Hey, we know what is going on here';

```js
    row[5] as MatchResult => typescript will know that the type here will be MatchResult;
```

3. Tuple

```js
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
```
4. Generics
- Like function argument s, but for types in class/function definitions
- Allows us to define the type of a property/argument/return value at a future point
- Used heavily when writing reusable code
