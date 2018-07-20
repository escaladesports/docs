# Twelve Factor App Methodology

[The Twelve Factor App](https://12factor.net/) is a methodology of best practices for building and maintaining apps. Not all of them are completely relevant to our workflow. This is a supplimental list on how each factor relates to our workflow.

## 1. Codebase

> One codebase tracked in revision control, many deploys

Each project is contained in a single repository. The master branch is always representation of the production app, while each other branch gets their own deploy. Deployments can also happen locally for development.

## 2. Dependencies

> Explicitly declare and isolate dependencies

All of our applications are written in Node using npm as its dependency management system.

## 3. Config

> Store config in the environment

Environment variables are always set in the admin panel of Netlify or Travis CI. For serverless functions, it is stored in an [envdotjs](https://www.npmjs.com/package/envdotjs) file. Any files that contain environment variables never get checked into version control. In some cases, they may be encrypted and the encrypted data can be checked in.

## 4. Backing services

> Treat backing services as attached resources

This is not applicable in most cases. Occasionally third party tools and APIs will be used. There is typically no other option other than to attach them as an external resource.

## 5. Build, release, run

> Strictly separate build and run stages

The build stage always happens when there is a change in the master branch. Or in the case of open source modules, there is a new change in the master branch that is tagged with a version number. Once changed, the build is combined with the config and creates distribution files that get deployed.

There is typically not a run stage for us as our applications are static and our backend applications are serverless functions. Although there may be a need in the future for a run stage on projects where the serverless model isn't as cost efficient.

## 6. Processes

> Execute the app as one or more stateless processes

This is not particularly applicable to us as persistent state can be reliably stored in the client, and serverless functions are required to be stateless.

## 7. Port binding

> Export services via port binding

Development of web applications will automatically bind to the appropriate porn during development. Serverless functions can be tested by binding the service to a port.

## 8. Concurrency

> Scale out via the process model

While this is applicable, it's not something we need to manage ourselves. Web applications are deployed to a CDN which will handle the concurrency for us. Similarly, serverless functions will scale automatically.

## 9. Disposability

> Maximize robustness with fast startup and graceful shutdown

Starting up an application should always be as simple as running a single terminal command. In the case of development, this will be `yarn dev`.

## 10. Dev/prod parity

> Keep development, staging, and production as similar as possible

We use a [feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) to make sure development branches don't get too out of sync with the production branch. During longer development cycles, developers should periodically merge the production branch into their feature branch.

## 11. Logs

> Treat logs as event streams

In the case of serverless functions, log streams can be found in the Netlify dashboard or by running a terminal command depending on where the function is deployed.

## 12. Admin processes

> Run admin/management tasks as one-off processes

So far this one has not been applicable for any current projects.