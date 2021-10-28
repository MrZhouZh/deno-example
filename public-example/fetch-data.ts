import { serve } from "https://deno.land/std@0.95.0/http/server.ts";

const server = serve({ port: 8001 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8001/`);

/**
 * Output: JSON Data
 */
// const json = fetch("https://api.github.com/users/denoland");

// json.then((response) => {
//   return response.json();
// }).then((jsonData) => {
//   console.log(jsonData);
// });

/**
* Output: HTML Data
*/
try {
  const text = await fetch("https://deno.land/");
  console.log('response>>>', text)
  const textData = await text.text()
  console.log('server>>>', textData, server)
  for await (const request of server) {
    let bodyContent = textData;
    bodyContent += request.headers.get("user-agent") || "Unknown";
    request.respond({ status: 200, body: bodyContent });
  }
} catch(err) {
  console.log('response text err>>>>>>>>', err)
}

// text.then((response) => {
//   return response.text();
// }).then((textData) => {
//   console.log(textData);
  
// });

/**
* Output: Error Message
*/
const error = fetch("https://does.not.exist/");
error.catch((error) => console.log(error.message));
