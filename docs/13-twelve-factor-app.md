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

This one doesn't affect us quite as much as the others. Occasionally third party tools and APIs will be used. There is typically no other option other than to attach them as an external resource.

## 5. Build, release, run

> Strictly separate build and run stages

The build stage always happens when there is a change in the master branch. Or in the case of open source modules, there is a new change in the master branch that is tagged with a version number. Once changed, the build is combined with the config and creates distribution files that get deployed.

There is typically not a run stage for us as our applications are static and our backend applications are stateless serverless functions.

## 6. Processes

> Execute the app as one or more stateless processes

## 7. Port binding

> Export services via port binding

## 8. Concurrency

> Scale out via the process model

## 9. Disposability

> Maximize robustness with fast startup and graceful shutdown

## 10. Dev/prod parity

> Keep development, staging, and production as similar as possible

## 11. Logs

> Treat logs as event streams

## 12. Admin processes

> Run admin/management tasks as one-off processes