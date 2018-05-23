## JavaScript

The primary language used in almost all Escalade projects is JavaScript. This is primarily because of the portability of the language. We use it to power our APIs, command line interfaces, serverless functions, and applications.

JavaScript should always be written isomorphically (able to be run on the browser and server) when possible. We transpile with [Babel](https://babeljs.io/) so we can use the latest features of the language. At the time of writing we support all ES6 features and some proposed ES7 features.