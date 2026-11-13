import {
  createServer,
  IncomingMessage,
  Server,
  ServerResponse,
} from "node:http";
import config from "./config/env.config.js";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse): void => {

    // Request Method url
    // console.log("Method:", req.method);
    // console.log("Raw url:", req.url);

    // Client Request headers
    // console.log("Host Header", req.headers.host);
    // console.log("User Agnet", req.headers["user-agent"]);

    //Set HTTP Status and headers
    res.writeHead(200, { "content-type": "application/json" });

    // send body and close stream
    res.end(
      JSON.stringify({
        success: true,
        message: "Node.js Server Is Smoothly Runing",
        requestedMethod: req.method,
        requestedUrl: req.url,
      }),
    );
  },
);

server.listen(config.port, () => {
  console.log(`Server is runing on http://localhost:${config.port}`);
});
