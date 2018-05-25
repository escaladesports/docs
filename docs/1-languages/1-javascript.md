# JavaScript

The primary language used in all Escalade projects is JavaScript. This is primarily because of the portability of the language. We use it to power our APIs, command line interfaces, serverless functions, and applications.

JavaScript should always be written isomorphically (able to be run on the browser and server) when possible. We transpile with [Babel](https://babeljs.io/) so we can use the latest features of the language without comprimising browser support. At the time of writing we support all ES6 features and some proposed ES7 features.

The version of Node.js used can vary from project to project. [nvm](https://github.com/creationix/nvm) is used to easily change your Node version to match the project with `nvm use`.

## Style

### Importing

### References

Always use `const` for constants and `let` for variables that can be reassigned. Never use `var`.

### Strings

Always use template literals when possible instead of `"` or `'`. This way interpolation can be done very easily when needed. Example:

```javascript
const str = `This sentence might change...`

// Later...
const status = `did`
const str = `This sentence ${status} change...`
```

### Spread Operator

Use the spread operator instead of Object.assign, Array.splice, or Function.prototype.apply. Examples:

```javascript
const options = {
   ...defaultOptions,
   ...userOptions,
}

const drinks = [
   ...sunnyD,
   ...purpleStuff,
]

const eyes = [`left`, `right`]
pokeEyes(...eyes)
```

### Destructuring

Use object destructuring instead of referencing. Example:

```javascript
// Instead of this:
function singleLadies(they){
   if(they.likedIt === true){
      they.putRingOnIt()
   }
}

// Do this:
function singleLadies({ likedIt, putRingOnIt }){
   if(likedIt === true){
      putRingOnIt()
   }
}
```

### Async/Await

When dealing with asynchronous code, use async/await instead of promises. Example:

```javascript
// Instead of this:
function getToOtherSide(){
   return new Promise((resolve, reject) => {
      lookForWizards()
         .then(crossBridge())
         .then(resolve)
         .catch(reject)
   })
}
getToOtherSide()

// Do this
async function getToOtherSide(){
   await lookForWizards()
   await crossBridge()
}
try{ getToOtherSide() }
catch(err){ console.error(err) }
```

### Modules

Always use `import` over `require`. However there are times when you might need `module.exports` over `export`, so there are no hard rules on how to export at the moment.

### Comments

If you can adequately describe a function with its own name or file name, do so. If you can't, it's possible you just need to refactor into multiple smaller functions and/or files. If you can't do that either, write comments.

### Whitespace

Use hard tabs for whitespace. The visual size of these can be easily changed for each developer. The exceptions to this rule:

- Markdown: Code snippets get hard to read in GitHub when using tabs. Use 3 spaces instead for legibility.
- JSON: Use 2 spaces with JSON files to match what npm and Yarn output.

### Semicolons

JavaScript automatically ends statements with line breaks, so semicolons are not used. Always prefix lines that start with `(` `[` or `` ` `` with a semicolon.

### File Length

There are no strict rules regarding file length. But a good rule of thumb is if your file extends past the bottom of your screen, it might be a good idea to refactor it into multiple modules.

### jQuery

[Don't use it.](https://github.com/nefe/You-Dont-Need-jQuery)