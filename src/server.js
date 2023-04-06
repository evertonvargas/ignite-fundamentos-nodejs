import http from "node:http";
import { jsonMid } from "./middleware/jsonMid.js";

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await jsonMid(req, res); // middleware

  if (method === "GET" && url === "/user") {
    return res.end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/user") {
    const { name, email } = req.body;

    users.push({
      name,
      email,
    });
    return res.writeHead(201).end();
  }

  return res.end("Hello World");
});

server.listen(4000);
