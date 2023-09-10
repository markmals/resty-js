# Resty

A library for building type-safe API clients in TypeScript

## Installation

```sh
npm i resty-js
```

## Usage

```typescript
import { API } from "resty-js"

class TheMovieDB extends API {
    protected baseUrl = "https://api.themoviedb.org/3"

    public async newMovies() {
        return await this
            .get("discover/movies")
            .fetchJson<{ movies: Movie[] }>()
    }
}

let client = new TheMovieDB()
let movies = await client.newMovies()
```

## License

Published under the [MIT License](./LICENSE).
