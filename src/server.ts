import { app } from "./app";

const port = process.env.PORT || 33333;

const server = app.listen(port, () =>
  console.log(`Sarted at the port: ${port}`),
);

process.on("SIGINT", () => {
  server.close();
  console.log("App finished");
});
