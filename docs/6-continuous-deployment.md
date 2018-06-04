# Continuous Deployment

All projects are continuously deployed from the master branch of the repository. Make sure you never commit work straight to the master branch. Work is always merged into the master branch from other feature branches.

## Web Applications

Web applications are deployed automatically through [Netlify](https://www.netlify.com/). Netlify can also give each branch its own deployment.

## Everything Else

Open source modules and serverless functions are deployed through [Travis CI](https://travis-ci.org/). Serverless functions will get a separate deployment for each branch.