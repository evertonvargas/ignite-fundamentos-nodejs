import http from "node:http";
import { jsonMid } from "./middleware/jsonMid.js";
import { Database } from "./database.js";
import { randomUUID } from "node:crypto";

const database = new Database();

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await jsonMid(req, res); // middleware

  if (method === "GET" && url === "/user") {
    const users = database.select("users");
    return res.end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/user") {
    const { name, email } = req.body;

    const user = {
      id: randomUUID(),
      name,
      email,
    };

    database.insert("users", user);
    return res.writeHead(201).end();
  }

  return res.writeHead(404).end("Hello World");
});

server.listen(4000);
