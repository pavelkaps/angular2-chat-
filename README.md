# Angular2 MEAN - QuickStart application with ExpressJS, MongoDB, Gulp and Typescript (Repository Pattern)

##Introduction

Basic MEAN application uses AngularJS, ExpressJS along with Mongo DB support (Mongoose) via a wrapper of Repository Pattern as Business layer.
It also uses Gulp for running task and TsLint.The seed application is built over node and uses latest node packages.

## Prerequisites

1. Latest version of Node to be installed.
2. Install MongoDB and make sure it is running on default port 27017.

## Global packages
```
    npm install ts-node -g
    npm install typescript-node -g
```

## Steps to Run
```sh
    npm install          <= install all the npm Dependencies
    npm run build        <= build and compile the dest folder
    npm run deploy       <= start the Nodemon and watch for changes.
```

## Directory Structure

```
angular2-MEAN
    ├── node_modules
    ├── client
    │    ├── app
    │    │    ├── components
    │    │    │    ├── add-book
    │    │    │    │    ├── add-book.component.html
    │    │    │    │    ├── dashboard.component.ts
    │    │    │    ├── dashboard
    │    │    │    │    ├── dashboard.component.css
    │    │    │    │    ├── dashboard.component.html
    │    │    │    │    ├── dashboard.component.ts
    │    │    │    ├── book-detail
    │    │    │    │    ├── book-detail.component.css
    │    │    │    │    ├── book-detail.component.html
    │    │    │    │    ├── book-detail.component.ts
    │    │    │    ├── books
    │    │    │    │    ├── books.component.css
    │    │    │    │    ├── books.component.html
    │    │    │    │    ├── books.component.ts
    │    │    │    ├── books-search
    │    │    │    │    ├── books-search.component.css
    │    │    │    │    ├── books-search.component.html
    │    │    │    │    ├── books-search.component.ts
    │    │    ├── models
    │    │    │    ├── book.ts
    │    │    ├── services
    │    │    │    ├── book.service.ts            <= Book Service for fetching api
    │    │    │    ├── hero-search.service.ts     <=Book-Search Service
    │    │    ├── app.component.css
    │    │    ├── app.component.ts
    │    │    ├── app.html
    │    │    ├── app.module.ts
    │    │    ├── app.routing.ts
    │    │    ├── main.ts
    │    ├── typings
    │    ├── index.html
    │    │    ├── systemjs.config.js
    │    ├── tsconfig.json
    │    ├── typings.json
    ├── server
    │    ├── src
    │    │    ├── app
    │    │    │    ├── business                    <= business logic for application
    │    │    │    │    ├── common
    │    │    │    │    │    ├── Read.ts           <= common Read method
    │    │    │    │    │    ├── Write.ts          <= common Write method
    │    │    │    │    ├── interfaces
    │    │    │    │    │    ├── BookBusiness.ts
    │    │    │    │    ├── BaseBusiness.ts
    │    │    │    │    ├── BookBusiness.ts
    │    │    │    ├── dataAccess
    │    │    │    │    ├── schemas
    │    │    │    │    │    ├── BookSchema.ts    <= Book Schema for MongoDB
    │    │    │    │    ├── DataAccess.ts         <= Connection with MongoDB
    │    │    │    ├── model
    │    │    │    │    ├── interfaces
    │    │    │    │    │    ├── BookModel.ts
    │    │    │    │    ├── BookModel.ts
    │    │    │    ├── repository
    │    │    │    │    ├── interfaces
    │    │    │    │    │    ├── Read.ts
    │    │    │    │    │    ├── Write.ts
    │    │    │    │    ├── BaseRepository.ts
    │    │    │    │    ├── BookRepository.ts
    │    │    ├── config
    │    │    │    ├── routes
    │    │    │    │    ├── BookRoutes.ts        <= Book API Routes like get,post,put,delete
    │    │    │    │    ├── Routes.ts            <= fetching all appliction routes here
    │    │    ├── controller
    │    │    │    ├── interfaces
    │    │    │    │    ├── ReadController.ts
    │    │    │    │    ├── WriteController.ts
    │    │    │    ├── BaseController.ts         <= Base Repository controller
    │    │    │    ├── BookController.ts
    │    │    ├── server.ts
    │    ├── typings
    │    ├── tsconfig.json
    │    ├── tsconfig.json
    ├── gulpfile.ts                              <= gulp tasks : clean, build, compile, run.
    ├── LICENSE
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── tslint.json

```

## Api Document (from MongoDB)

```
1. getAll    http://localhost:3000/store/books             <= get all books
1. getById   http://localhost:3000/store/books/:id         <= get book by Id
2. post      http://localhost:3000/store/books                <= create book
2. put       http://localhost:3000/store/books/:id         <= update book
2. delete    http://localhost:3000/store/books/:id         <= delete book

```