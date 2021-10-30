const Koa = require('koa');
const app = new Koa();

// response
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

const port= 3000;

app.listen(port, ()=>{
    console.log(`Sunucu port ${port}\'de acildi...`);
});