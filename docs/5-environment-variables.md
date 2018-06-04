# Environment Variables

Anything that might change between deployment environments is stored as an environment variable. Environment variables are encrypted and stored in the repository with [envdotjs](https://www.npmjs.com/package/envdotjs). Never commit a secret token or key unenecrypted in the repository.

If you're working on an existing project or starting off with a boilerplate, you can copy the the encryption key into an `env.js.key` file in the root of your project. Then run `yarn encrypt` to encrypt your `env.js` file or `yarn unenecrypt` to create an `env.js` file from an `env.js.enc` file.

When deploying your application, the server will also need to know the key. You can set the key as an environment variable called `ENVDOTJS_KEY`. Depending on the type of project, this is either done in the Netlify or Travis CI settings menu.

If you need to use environment variables inside of a Gatsby project's components, you need to prefix them with `GATSBY_`. But keep in mind that using environment variables inside of the components will expose them within the public code of the website. Make sure that the variables you're using aren't keys that need to be kept secret.