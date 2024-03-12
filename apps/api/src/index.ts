import { createServer } from "./server";

const port = 8080;
const server = createServer();

server.listen(port, '0.0.0.0', () => {
  console.log(`api running on ${port}`);
});
