# Naming Convention

Having a formal naming convention can help keep file names and code more readable.

## Files and Directories

Always use hyphen case.

Good:

```
/table-tennis/
/table-tennis/new-table
```

Bad:

```
/tableTennis/
/tableTennis/newTable
```

## Repository Names

Use the domain of the website when applicable. Otherwise, use hyphen case.

Good:

```
docs.escaladesports.com
your-module
goalrilla.com
new-serverless-function
```

Bad:

```
docs-escaladesports-com
yourModule
goalrilla
newServerlessFunction
```

## URL Paths

Similar to files and directories, always use hyphen case. The full URL path should never end in a trailing slash or file extension.

Good:

```
/category/bear-archery
/about-us
```

Bad:

```
/category/bearArchery
/aboutUs
/terms-and-conditions.html
/contact/
```

## Variable Names

Assuming the language you're writing in permits it, use camel case for variable names.

Good:

```js
const garageDoor = `open`
```

Bad:

```js
const garage_door = `open`
```