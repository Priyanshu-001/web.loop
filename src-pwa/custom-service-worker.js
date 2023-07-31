import { registerRoute } from "workbox-routing";
import { precacheAndRoute } from "workbox-precaching";
console.log("cookie");
const helpers = {
  delay: (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  },
  getResource: (url /* handler CB url */) => {
    const [_, resource] = url.pathname.split("qres", 2);
    return !!resource && resource;
  },
};

function engine() {
  const data = {
    serve: {
      "/hello": {
        delay: 0,
        contentType: "text/plain",
        content: "Yo boi",
        statusCode: 500,
      },
    },
    reqHits: 0,
  };
  const fns = (function () {
    function captureRoute(routeObj) {
      data.serve = { ...data.serve, ...routeObj };
    }
    function isKnown(link) {
      return Object.keys(data.serve).includes(link);
    }
    function val(link) {
      return data.serve[link];
    }
    return { val, isKnown, captureRoute };
  })();
  return fns;
}

let { val, isKnown, captureRoute } = engine();
const handlers = {
  responseHandler: async ({ url }) => {
    const {
      delay,
      content,
      contentType,
      statusCode: status,
    } = val(helpers.getResource(url));
    await helpers.delay(delay);
    return new Response(content, {
      status,
      headers: { "Content-Type": contentType },
    });
  },
};
// Register a route to handle all GET requests
registerRoute(
  // ({ request }) => {
  //   console.log(request);
  //   return request.path true;
  // },
  ({ url }) => {
    // console.log(url);
    if (!url.pathname.startsWith("/qres")) return false;
    const resource = helpers.getResource(url);
    return isKnown(resource);
  },
  // Define a custom handler to respond with 'hi'
  handlers.responseHandler
);

precacheAndRoute(self.__WB_MANIFEST);
