# Testing

Automated testing is done using [Jest](https://facebook.github.io/jest/). React components are not tested using Jest's built in snapshot feature, but rather with [Puppeteer](https://github.com/GoogleChrome/puppeteer). This way you can test how components actually render since it's always possible that the snapshot itself could be rendering something incorrectly.

Any failed tests will prevent deployment of serverless functions, npm modules, and web applications.