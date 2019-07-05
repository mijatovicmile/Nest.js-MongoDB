## Introduction

**Nest.js** is a Node.js framework (we use it on the server side). It's builds up on Express.js, so under the hood of Nest.js is Express.js which although is a Node.js framework. 

*The question is what's the idea of that framework of a framework ?*

**Nest.js** adds some cool ideas to the server side (Node.js): 

* We can build any Server side application with Nest.js,
*	It embraces TypeScript, Dependency Injection & Modularity. Whilst we can actually also work with or without TypeScript, it's definetely meant to be use with TypeScript, 
*	Can be used to build MVC (Model, View, Controller) or Representational State Transfer (REST) applications,
*	Enforces clean code and a clear project structure by giving us a series of building blocks,
*	Makes building complex application easy, because we are forced into certain patterns which make our code easier to manage


## Installation

Because it's a Node.js framework, we of course need Node.js installed, so make sure you have that installed from [nodejs.org](https://nodejs.org) (latest version).

Setting up a new project is quite simple with the [Nest CLI](https://docs.nestjs.com/cli/overview). With npm installed, you can create a new Nest project with the following commands in your OS terminal:

```bash
$ npm i -g @nestjs/cli
$ nest new project-name
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

  Nest is [MIT licensed](LICENSE).
