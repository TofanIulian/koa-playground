const Koa = require("koa");
const KoaRouter = require("koa-router");
const json = require("koa-json");
const fetch = require("node-fetch");

const app = new Koa();
const router = new KoaRouter();

// Json Prettier Middleware
app.use(json());

// Simple Middleware Example
// app.use(async (ctx) => (ctx.body = "Hello world"));

router.get("/test", (ctx) => {
  fetch("http://localhost:1337/api/partners/1")
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (ctx.body = "Hello Test");
});

// Router Middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("### Server Started ###"));
