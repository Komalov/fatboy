const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
  ctx.body = "Hello! I am fatboy";
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);
