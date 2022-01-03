# Node.js PostgreSQL CRUD example with Express Rest APIs

Full Article with implementation:
> [Node.js PostgreSQL CRUD example with Express Rest APIs](https://bezkoder.com/node-express-sequelize-postgresql/)

The following table shows overview of the Rest APIs that will be exported:

- GET     `api/movies`	           get all Movies
- GET     `api/movies/:id`         get Movie by id
- POST    `api/movies`             add new Movie
- PUT     `api/movies/:id`         update Movie by id
- DELETE  `api/movies/:id`         remove Movie by id

## Model

| Field | Type  | Description
|---    |---    |---
| `id` | `string` | A UUID for the movie (automatically generated)
| `name` | `string` | Name of the movie
| `genre` | `string` | Movie genre
| `img` | `string` | URL to a movie poster image
| `updatedAt` | `string` | Updated timestamp (automatically generated)
| `createdAt` | `string` | Creation timestamp (automatically generated)

Example:

```json
{
    "id": "630e28f8-0048-41f3-833a-dc0657309f0b",
    "name": "Dune",
    "genre": "Science Fiction",
    "img": "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    "updatedAt": "2021-12-17T18:55:47.053Z",
    "createdAt": "2021-12-17T18:55:47.053Z"
}
```

## Setup

Update `config/db.config.js` with the values for your local database.

Install the application

```sh
nvm use 14
npm install
```

Run the application

```
node server.js
```

## Resources

Cheat Sheet: <https://github.com/enochtangg/quick-SQL-cheatsheet>

Data Types: <https://www.postgresql.org/docs/14/datatype-numeric.html>
