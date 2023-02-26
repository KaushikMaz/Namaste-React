## Q:What is an Emmet?
A: Emmet is a web development tool that allows you to write HTML and CSS code quickly and efficiently. It uses a shorthand syntax to help you write code faster and with fewer keystrokes.

With Emmet, you can write complex HTML and CSS code using abbreviations that are expanded into full HTML and CSS code. For example, you can type ul>li*5 and it will be expanded into:

```
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>

```

## Q: Difference between a Library and Framework?
A: A library and a framework are both collections of code that can be used to simplify the development of software applications, but there are some key differences between them.

A library is a collection of prewritten code that provides specific functions or features for use by developers, while a framework provides a structure and set of rules for developing software applications. Libraries are building blocks that give developers control over the application's structure and control flow, while frameworks dictate the overall architecture and provide a comprehensive set of tools and components. The choice between using a library or a framework depends on the specific needs and requirements of the project.

## Q: what is CDN ? Why do we use it?
A: CDN stands for Content Delivery Network. It is a geographically distributed network of servers that work together to deliver content to users in different locations. 

CDNs are used to improve website performance, reliability, and security. By storing copies of content on servers in multiple locations, CDNs can reduce the amount of time it takes for content to load by delivering it from a server that is closer to the user. This reduces latency and improves website speed and user experience.

## Q: why is React known as React?
A: React is a JavaScript library for building user interfaces for web and mobile applications. It was developed by Facebook and released to the public in 2013. The library is called "React" because it is based on the concept of "reactive" programming.

In reactive programming, changes to the state of a system trigger a chain of reactions that update the system's output. In the case of React, changes to the state of a user interface trigger the library to re-render the interface and update the DOM (Document Object Model) accordingly. This allows for a fast and seamless user experience without requiring the entire page to reload.

The name "React" also reflects the library's focus on building modular, reusable components that can be easily composed to create complex user interfaces. These components are designed to react to changes in the state of the application, making it easier to build and maintain large-scale applications.

Overall, the name "React" reflects the library's core principles of reactive programming, modularity, and reusability.

## Q:what is cross origin in scriptag?
A: The crossorigin attribute is used in the <script> tag to specify how the browser should handle requests for resources, such as scripts or fonts, that come from a different domain than the one hosting the webpage.

The crossorigin attribute allows the webpage to specify whether to allow or block cross-origin requests for a particular resource. There are two possible values for the crossorigin attribute: "anonymous" and "use-credentials."

anonymous: This value indicates that the resource should be loaded without sending any user credentials, such as cookies or authentication headers, to the server hosting the resource. This is the default value if crossorigin is not specified.

use-credentials: This value indicates that the resource should be loaded with user credentials, and the server hosting the resource must allow cross-origin requests with credentials.

## Q: what is the difference between React and ReactDOM?
A: React and ReactDOM are both related to building user interfaces using React, but they serve different purposes.

React is a JavaScript library for building user interfaces. It provides a declarative syntax for creating components, managing state, and handling user events. With React, you can write modular and reusable code, which makes it easier to build large-scale applications.

ReactDOM, on the other hand, is a package that provides the DOM-specific methods for working with React. It is responsible for rendering React components into the DOM (Document Object Model) and managing their lifecycle. It provides methods for creating and updating DOM elements, handling events, and managing component state.

## Q: what is the difference between react.development.js and react.production.js files via CDN?
A: React provides two different versions of its library: react.development.js and react.production.js. These files are used to serve different purposes, and they have several differences:

File size: react.development.js is a larger file than react.production.js because it contains additional debugging information and warnings that are not necessary for production use.

Performance: react.production.js is optimized for performance and has several features, such as dead code elimination, that are not present in react.development.js. This makes react.production.js faster and more efficient than react.development.js when used in a production environment.

Debugging: react.development.js includes extra debugging tools and warnings that can help developers identify and fix issues in their code. These tools and warnings are not present in react.production.js, which is optimized for performance and does not include these features.

## Q: what is async and defer?
A: The async and defer attributes in the <script> tag control how scripts are loaded and executed in HTML. async loads the script asynchronously and executes it immediately, while defer loads the script asynchronously but defers its execution until after the document has finished parsing. async is suitable for scripts that are not needed for initial rendering, while defer is useful for scripts that are required for the initial rendering but don't need to be executed immediately.