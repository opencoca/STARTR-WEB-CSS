StartrCSS
========================

 StartrCSS is a simple, lightweight, and flexible CSS framework for building responsive, mobile-first projects on the web.
Powered by Flex-box and CSS variables and templated in Pug and LESS.

Our demo comes with a few examples of how you can use Startr to create your own website or web app. More examples are coming soon.

We include Pocketbase as a starting point for your project. It's a simple alternative to Firebase that uses a SQLite file as a database and is powered by Go. It's perfect for small projects and prototypes.

Pocketbase even comes with a simple admin panel to manage your data and users.

<!---
Expand on Pocketbase benefits
-->

Pocketbase allows you to create a simple REST API for your data. You can use this API to create a mobile app or to connect your website to a database. We've included a simple example todo app that uses Pocketbase as a backend. This app is built with Alpine.js and our own StartrCSS components.

<!---
Write setup instructions for StartrCSS and Pocketbase
-->

## Getting Started

### Prerequisites

- Node.js
- Yarn
  
### Installing

Clone the repository

```
git clone https://github.com/opencoca/StartrCSS
```

Install dependencies

```
yarn install
```

Start the server

```
yarn serve
```

To start the Pocketbase server, open a new terminal window and run

``` 
mv node_modules node_modules~ && ./pocketbase serve && mv node_modules~ node_modules
```
This will start the Pocketbase server on port 8090 and the REST API on port 8090/api/ and the admin panel on port 8090/_/

**Note:** Pocketbase is still in development and this is a temporary solution to get it running. We are investigating a better way to integrate Pocketbase into the project.
