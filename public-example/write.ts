/**
 * write.ts
 */
 const write = Deno.writeTextFile("public-example/hello.txt", "Hello World!");

 write.then(() => console.log("File written to public-example/hello.txt"));