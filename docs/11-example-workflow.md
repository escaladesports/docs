# Example Workflow

The workflow is generally the same for all projects with a few minor differences. In all cases, a [feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) is used. This means that new branches are created for each new feature. Once the change is completed the branch gets merged into the master branch and deleted. The master branch is always representational of the production application. Any work on master will be deployed to production automatically, so development work should never be done directly on the master branch.

It might look something like this when making revisions to a web application project:

- `git clone git@github.com:escaladesports/docs.escaladesports.com.git` (Clones the project locally)
- `cd docs.escaladesports.com` (Move to the newly cloned directory)
- `nvm use` (Change your node version to match the project's)
- `yarn` (Install dependencies)
- `git checkout -b contact-page` (Create a new branch for development of the new feature)
- `yarn dev` (Start up a server locally for development)
- Make changes to the code as needed
- `git push origin contact-page` (Push your development branch into the repository)
- Create a pull request to merge the contact-page branch into the master branch.
- At this point Netlify will build out a preview of the merge.
- Assuming everything functions as expected, merge the pull request to deploy your changes live.
- The feature branch is deleted once the merge into master is successful.

If making revisions to a react component, javascript module, or serverless function, the steps would be the same up until `yarn dev` since no development server is needed. Instead code is edited and the engineer would run `yarn test` to unit test the new changes. Assuming all tests pass, the branch can be deployed like normal and merged into the master branch. Tests will also be run before automatic deployment, but it can be easier to debug any errors if you run your tests locally as well.

If you're working on an open source module or component you will also need to semantically version your master branch. It might look like this:

- `git checkout master` (Switch back to the master branch)
- `git pull` (Pull the new changes from our previous pull request)
- `npm version patch` (Increment the patch version number and create a release)
- `git push origin master` (Push the new version commit)
- `git push origin master --tags` (Push the new version tag)

Travis will only deploy versioned commits in the master branch. So once the new version tag is pushed, Travis will automatically deploy to npm.