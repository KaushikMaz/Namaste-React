## Q what is "NPM"?
A: NPM is a package manager for JavaScript that lets developers install, update, and manage third-party packages. It's used to access millions of packages from the public NPM registry, and developers can also publish their own packages to the registry. NPM is widely used in the JavaScript community and is installed on top of Node.js.

## Q what is "parcel/webpack"?why do we need it?
A:`Parcel/Webpack` is type of a web application bundler used for development and productions purposes or power our application with different type functionalities and features.It offers blazing fast performance utilizing multicore processing, and requires zero configuration. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start.
Parcel/Webpack are type of bundlers that we use to power our application with different type functionalities and features.
### installation commands:
- Install:
```
npm install -D parcel
```
`-D` is used for development and as a development dependency.

- Parcel Commands :
    - For development build:
    ```
    npx parcel <entry_point> 
    ```
    - For production build :
    ```
    npx parcel build <entry_point> 
    ```

# Q: What is `.parcel-cache`?
A: `.parcel-cache` is used by parcel(bundler) to reduce the building time.
It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.


## Q: What is `npx`?
A: `npx` is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.


## Q: What is difference between `dependencies` vs `devDependencies`?
A: `Dependencies` should contain library and framework in which your app is built on, needs to function effectively. such as Vue, React, Angular, Express, JQuery and etc. 
`DevDependencies` should contain modules/packages a developer needs during development.
such as, `parcel, webpack, vite, mocha`.
`These packages` are `necessary only while you are developing your project`, not necessary on production.
To save a dependency as a devDependency on installation we need to do, 
```
npm install --save-dev
```
instead of just,
```
npm install --save
```


## Q: What is `Tree Shaking`?
A: `Tree shaking` is process of removing the unwanted code that we do not use while developing the application.
In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.


## Q: What is `Hot Module Replacement`?
A: `Hot Module Replacement (HMR)` exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.


## Q: List down your favorite `5 superpowers of Parcel` and describe any 3 of them in your own words.
A: `5 superpowers of Parcel`:
* `HMR (Hot Module Replacement)` - adds, or removes modules while an application is running, without a full reload.
* `File watcher algorithm` - File Watchers monitor directories on the file system and perform specific actions when desired files appear.
* `Minification` - Minification is the process of minimizing code and markup in your web pages and script files.
* `Image optimization`
* `Caching while development`

## Q: What is `.gitignore`? What should we `add and not add` into it?
A:`.gitignore` is a file that is used to specify files and directories that should be ignored by Git when tracking changes in a project. The purpose of `.gitignore` is to prevent unnecessary files from being committed to a repository, which can bloat the repository size and make it harder to manage.

Here are some examples of files and directories that should be added to a `.gitignore` file:

*.Compiled code and build artifacts, such as object files, executables, and DLLs.
*.Package managers and their files, such as node_modules/ or vendor/ directories.
*.Log files, backups, and caches.
*.IDE and editor-specific files and directories, such as .vscode/, .idea/, and .DS_Store.
*.Configuration files that contain sensitive information, such as API keys or database credentials.

Anything that can be regenerated in the server should be added to `.gitignore`

On the other hand, you should not add the following files to `.gitignore`:
*.Source code files, which should be tracked by Git.
*.Documentation files, which should also be tracked by Git.
*.Configuration files that do not contain sensitive information and are required for the project to function properly.
*.Files and directories that are required for the project to run, such as assets and data files.

