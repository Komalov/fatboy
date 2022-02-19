const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
  ctx.body = "Hello! I am fatboy";
});

app.listen(3000);
