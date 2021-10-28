import { serve } from "https://deno.land/std@0.95.0/http/server.ts";
// Start listening on port 8080 of localhost.
const server = serve({ port: 8000 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8000/`);

for await (const request of server) {
  let bodyContent = "Your user-agent is:\n\n";
  bodyContent += request.headers.get("user-agent") || "Unknown";

  request.respond({ status: 200, body: bodyContent });
}