import { registerRoute } from "workbox-routing";
import { precacheAndRoute } from "workbox-precaching";

console.log("cookie");
// Register a route to handle all GET requests
registerRoute(
  // ({ request }) => {
  //   console.log(request);
  //   return request.path true;
  // },
  "/hello",
  // Define a custom handler to respond with 'hi'
  async ({ event }) => {
    console.log("HELOOO");
    return new Response("hi", {
      headers: { "Content-Type": "text/plain" },
    });
  }
);

precacheAndRoute(self.__WB_MANIFEST);
