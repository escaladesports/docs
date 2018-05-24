# Types of Applications

We build everything with the Unix philosophy in mind. So every part of an application only does one thing and does it well. If additional functionality is needed, then a new module or serverless function is built rather than adding it to an existing module/function that is already performing a separate task.

## Web Applications

At Escalade, a web application is built in React and just outputs static JS, CSS, and HTML files. No backend code is output so the entire application can be deployed to a CDN. Backend functionality is provided through serverless functions.

## Serverless Functions

Built with the [Serverless Framework](https://serverless.com/framework/), a serverless function can be just a simple function that runs on a schedule or an API that can be used through the web application.

## Modules

Modules are typically written in JavaScript and deployed to [npm](https://www.npmjs.com/). They can then be installed and imported to the web application or serverless function.