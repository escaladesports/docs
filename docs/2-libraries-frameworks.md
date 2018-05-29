# Libraries/Frameworks

## React.js

[React.js](https://reactjs.org/) is used for the front end in all of our applications. We use the [JSX](https://reactjs.org/docs/introducing-jsx.html) extension for markup and [styled-jsx](https://github.com/zeit/styled-jsx) for styling.

React projects can either be standalone modules or entire applications built in Gatsby. Gatsby projects usually contain many of the standalone modules.

## Gatsby

[Gatsby](https://www.gatsbyjs.org/) is a static site generator we use to build our applications. It combines React.js with GraphQL. Using Gatsby we can easily have server side rendering in our React application.

### Content

Content can come from a variety of places. Product content usually comes from [Salsify](https://www.salsify.com/) while page content usually comes from markdown files within the project repository. The only hard rule is that content should never be placed directly in a page component. If content is placed directly in the React component other plugins that handle things like the search functionality or the CMS won't be able to parse the content.

Currently we are using [Netlify CMS](https://www.netlifycms.org/) to allow non-technical users to create and edit content.

## Serverless Framework

The [Serverless Framework](https://serverless.com/framework/) is used to create and deploy APIs and functions or other dynamic functionality that can't be built in a static site alone. It's best to develop as much as you can in Gatsby and only user serverless functions when you need to handle secret environment variables that can't be exposed to a static site.

## MongoDB

Typically data is stored through Git-based systems like markdown or JSON files. It's rare that we need anything more than that, but when we do [MongoDB](https://www.mongodb.com/) is the preferred option.