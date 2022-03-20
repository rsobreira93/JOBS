## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## create controllers

```bash
$ nest g controller controller name
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

## Docker

Para rodar o redis na sua máquina com o docker. O redis se faz necessário, pois
o bull precisa dele para executar

```bash
$  docker run --name redisNest -p 6379:6379 -d -t redis:alpine
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
