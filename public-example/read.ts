/**
 * read.ts
 */
const text = Deno.readTextFile("public-example/people.json");

text.then((response) => console.log(response));