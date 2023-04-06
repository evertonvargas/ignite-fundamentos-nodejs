import http from "node:http";
import { Transform } from "node:stream";

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;
    console.log("transformed", transformed);
    callback(null, Buffer.from(String(transformed)));
  }
}

// req => ReadableStream
// res => WritableStream

const server = http.createServer(async (req, res) => {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  const fullContext = Buffer.concat(buffers).toString();
  console.log("fullContent", fullContext);

  return res.end(fullContext);
});

server.listen(4002);
