About `implements` keyword likbe below:

```js
    class User implements Mappable
```
We optionally add on implements Mappable. And that tells Typescript we are trying to make a user satisfied the Mappable interface. 

By adding that, typescript is going to take a look at our user definition and make sure that we are implementing the correct properties. It's 100 percent optional:

- The first reason we do this is that we can kind of help other coder understand what we're doing. It will make the code more clearly.

- The second, we add this is that Typescript can take a look at the different properties here and help us make sure that we add in all the correct properties.