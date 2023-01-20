# namaste-react-dev
namaste-react by akshay saini 
    Chapter 01 - Inception
    Theory -
    What is Emmet?

    Difference between a Library and Framework?

    What is CDN? Why do we use it?

    Why is React known as React?

    What is crossorigin in script tag?

    What is difference between React and ReactDOM?

    What is difference between react.development.js and react.production.js files via CDN?

    What is async and defer?

    Coding -

    Set up all the tools in your laptop

    VS Code

    Chrome

    Extensions of Chrome

    Create a new Git repo

    Build your first Hello World program using,

    Using just HTML

    Using JS to manipulate the DOM

    Using React

    use CDN Links

    Create an Element

    Create nested React Elements

    Use root.render

    Push code to Github (Theory as well as code)

    Learn about Arrow Functions before the next class

    References:
    https://beta.reactjs.org/apis/react/createElement
    https://www.youtube.com/watch?v=IrHmpdORLu8


1. What is Emmet?
    A.Emmet uses different abbreviations and short expressions depending on what's passed, and then dynamically converts the abbreviations into the full code. Emmet is mostly used for HTML, XML, and CSS, but it can also be used with programming languages.
2. Difference between a Library and Framework?
    A.The technical difference between a framework and library lies in a term called inversion of control.
        When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.
3. What is CDN? Why do we use it?
    A: A content delivery network (CDN) refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content. The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.
4. Why is React known as React?
    A: React is named React because of its ability to react to changes in data. React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces. The name "React" was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner. React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.
5. What is crossorigin in script tag?
    A: The crossorigin attribute sets the mode of the request to an HTTP CORS Request. The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

    Syntax
        <script crossorigin="anonymous|use-credentials">
6. What is diference between React and ReactDOM
    A: React is a JavaScript library for building User Interfaces whereas ReactDOM is also JavaScript library that allows React to interact with the DOM. The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().
7. What is difference between react.development.js and react.production.js files via CDN?
    A: Development is the stage of an application before it's made public while production is the term used for the same application when it's made public. Development build is several times (maybe 3-5x) slower than the production build.
8. What is async and defer? - see my Youtube video ;)

    A: Async - The async attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed as soon as it is available (do not block HTML DOM construction during downloading process ) and don’t wait for anything.

    Syntax
        <script src="demo_async.js" async></script>
    Defer - The defer attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed after the page has finished parsing(when browser finished DOM construction). The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.

    Syntax
        <script src="demo_defer.js" defer></script>

Session #2 of Namaste React course:
Topics covered in this session:
Bundlers
Parcel setup
About npm
About node_modules
Understanding package.json and package-lock.json
installing react as a packge using npm
Setting up our own create-react-app setup without using create-react-app

        Chapter 02 - Assignment - Igniting our App
Please Note: Write the answers and code on your own while finishing your assignments. Try to
put down your thoughts into words by yourself in your own words. (This will help you develop
muscle memory and you will remember all the concepts properly) ✌
# Theory Assignment:
● - What is `NPM`?
● - What is `Parcel/Webpack`? Why do we need it?
● - What is `.parcel-cache`
● - What is `npx` ?
● - What is difference between `dependencies` vs `devDependencies`
● - What is Tree Shaking?
● - What is Hot Module Replacement?
● - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.
● - What is `.gitignore`? What should we add and not add into it?
● - What is the difference between `package.json` and `package-lock.json`
● - Why should I not modify `package-lock.json`?
● - What is `node_modules` ? Is it a good idea to push that on git?
● - What is the `dist` folder?
● - What is `browserlists`
Read about dif bundlers: vite, webpack, parcel
● Read about: ^ - caret and ~ - tilda
● Read about Script types in html (MDN Docs)
# Project Assignment:
- In your existing project
● - intialize `npm` into your repo
● - install `react` and `react-dom`
● - remove CDN links of react
● - install parcel
● - ignite your app with parcel
● - add scripts for “start” and “build” with parcel commands
● - add `.gitignore` file
● - add `browserlists`
● - build a production version of your code using `parcel build`
# References
● Creating your own create-react-app
● Parcel Documentation
● Parcel on Production
● BrowsersList: https://browserslist.dev/


Q1:	  What is `NPM`?
Ans:	NPM is the world largest software library(Registry). It also package manager and 
installer. Open source developers use it to share software. It is free to use.

Q2: 	What is `Parcel/Webpack`? Why do we need it?
Ans:	Parcel/Webpack are the bundlers that used for mostly Javascript and Typescript. It offers blazing fast performance utilizing multicore processing and requires zero configuration.

Q3:   What is `.parcel-cache`?
Ans:  Parcel cache stores a information about your project when parcel build it, so when it rebuilds, it
      it doesn't have to re-parse and re-analyze everything from the scratch.

Q4:   What is `npx` ?
Ans:  A tool for executing node packages.

Q5:   What is difference between `dependencies` vs `devDependencies`?
Ans:  devDependencies are modules which are only required during development, while dependencies are
      modules hich are also required at runtime.

Q6:   What is Tree Shaking?
Ans:  Tree shaking means removing unreachable code from the bundle.

Q7:   What is Hot Module Replacement?
Ans:  Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.

Q8:   List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
      own words.
Ans:  HMR - Hot module replacement : Parcel provides HMR properties to keep track of files changes by   using file watcher algorithms.
      Compression : Parcel provides compression properties to compress our files e.g images to optimize the performance of our app.
      Minification : Parcel minifies the code.
      Zero config : Unlike Webpack, Parcel requires zero configurations to setup.
      Old browser competibility : Parcel allows support for older broser also.

Q9:  What is .gitignore? What should we add and not add into it?
Ans: This file contains the list of files that we should not commit to the repository.

Q10. What is the difference betweeen package.json and package-lock.json.

Ans:  package.json : this file is mandatory for every project. It contains basicinformation about the project Application name/version/scripts (ng scripts)

      package-lock.json : This file is automatically generated for those operations where npm modifies either the node_module tree or package-json.
        It is generated after an npm install
        It allows future devs & automated systems to download the same dependencies as the project.
        It records the same version of the installed packages which allows to reinstall them. Future installs wll be capable of building identical description tree.

Q11. Why should I not modify package-lock.json?
Ans:    package-lock.json file contains the information about the dependencies and their versions used in the project. Modifying, it would cause depencies issues in the production environment.

Q12: What is `node_modules` ? Is it a good idea to push that on git?
Ans:  `node_modules` is a folder that contains all the packages and dependecies used for the development of the applicaion. It is big file that we should not push to github.

Q13:  What is the `dist` folder?
Ans:  dist folder is created when parcel creates the build for the application . It contains the required file that help to run your application, files like HTML and CSS and JS with other files for the build.

Q14:  What is browserlists?
Ans   browserlist is a list browsers that our applicaion should support . It also covers the browser coverage over a geographical area. It help to run our application in older browser.