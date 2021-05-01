<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


GRANT ALL ON root.* TO 'root'@'103.232.231.228' IDENTIFIED BY 'root' ;
FLUSH PRIVILEGES;

GRANT SELECT, INSERT ON test_sam.* TO 'root'@'103.232.231.228';

HTTP - Request Methods
GET read (params)
POST add (body: {title: "", descrition: ""})
PUT update - extra (body: {title: "2"}, params: {id:})
DELETE delete - (params)
PATCH update - change  (body, params)


TODO project

Add TODO
- POST /todo
Get all todo
- GET /todo
Get todo: id
- GET /todo/id
Delete todo: id
- DELETE /todo/id
Delete todo: [id]

Update todo: id
- PUT /todo/id

NOTE
/note


Controllers
1. Input
2. Input format
3. Database call - service layer
4. output
5. Output format

Service
1. Database call




STEPS
1. nest install
2. nest create <project-name>
   nest create todo-sam
   select npm

3. ormconfig.js
   type - mysql
   host - <ip>
   port - <port>
   username - <username db>
   password - <password db>
   database - <database one of list>
   synchronize - true <creates table based on entity>

4. AppModule
   import: [TypeOrmModule.forRoot()] - register typeorm and database
   import: [TypeOrmModule.forFeature([TodoEntity])] - why this? to use todo repository in AppService


5. AppControllers
   Defined controllers like getTodos, addTodo, getTodo(id), updateTodo(id), deleteTodo(id)
   @Param - parameter from path - Eg: /todo/123 - GET("/todo/:id") => id = 123
   @Body - DTO -
   used methods of injected AppService

6. AppService
   Defined database calls using todoRepository

    - insert
    - find
    - findOne
    - delete
    - update

SERVER
- CREATE database <dbname>
- CREATE TABLE ? no - we didn't do it - using synchronize: true in ormconfig.js did this.