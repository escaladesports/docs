# 1. Languages

## JavaScript

The primary language used in almost all Escalade projects is JavaScript. This is primarily because of the portability of the language. We use it to power our APIs, command line interfaces, serverless functions, and applications.

JavaScript should always be written isomorphically (able to be run on the browser and server) when possible. We transpile with [Babel](https://babeljs.io/) so we can use the latest features of the language. At the time of writing we support all ES6 features and some proposed ES7 features.

## CSS

We use standard CSS in any projects that require styling. Similar to how we transpile JS, we also transpile CSS with [PostCSS](https://postcss.org/) and [cssnext](http://cssnext.io/) to add in newer features like variables and nesting. This essentially does the same thing as preprocessing languages like Sass and Less, however has the advantage of being valid CSS syntax in the future. At some point we will be able to drop transpiling for CSS altogether but still use the same features.

When building React.js projects, we work with CSS through [styled-jsx](https://github.com/zeit/styled-jsx). It's basically our standard transpiled CSS but in a style tag. This is preferable over other React solutions liked [styled-components](https://www.npmjs.com/package/styled-components) since we don't have to switch context between CSS and JSX within the code.

Use CSS import statements and CSS custom properties (or CSS variables as they are often referenced) to keep code more manageable.

**Example:**

*./settings.css*

```css
:root{
   --colorMain: #f00;
   --colorSecondary: #999;
}
```

*./main.css*

```css
@import './settings';

h1{
   color: var(--colorMain);
}
p{
   color: var(--colorSecondary);
}
```

This way if a color needs to be swapped out it can be done so in the settings.css file and all other .css files will automatically update.

## GraphQL

At the moment, we only use [GraphQL](https://graphql.org/) for querying data on our applications. We currently do not run any GraphQL servers or APIs, however this could change in the future.