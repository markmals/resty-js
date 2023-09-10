// import { describe, expect, test } from "vitest"
// import { greet } from "./resty"

// describe("package name", () => {
//     let testCases = [
//         { input: "Mark", output: "Hello Mark" },
//         { input: "Melissa", output: "Hello Melissa" },
//     ]

//     for (let { input, output } of testCases) {
//         test(`greet with name ${input}`, () => {
//             let result = greet(input)
//             expect(result).toEqual(output)
//         })
//     }
// })

// class TheMovieDB extends API {
//     protected baseUrl = "https://api.themoviedb.org/3";

//     public async newMovies() {
//         return await this
//             .get("discover/movies")
//             .fetchJson<{ movies: string[] }>();
//     }
// }

// let client = new TheMovieDB();
// let _movies = await client.newMovies();

