const faker = require('faker');
const cors = require('@koa/cors');
const serverless = require('serverless-http');
const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const router = new Router();
const app = new Koa();

app.use(cors());


function generateMessages() {
  const messages = [];
  for (let i = 0; i < 1; i++) {
    messages.push({
      id: faker.datatype.uuid(),
      from: `${faker.internet.userName()}@${faker.internet.domainName()}`,
      subject: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
      received: faker.date.recent().getTime(),
    });
  }
  return messages;
}

app.use(serve(path.join(__dirname, 'public'))); // предоставлять статические файлы из папки 'public'

router.get('/', async (ctx) => {
  ctx.body = 'Welcome to server!';
});

router.get('/messages/unread', async (ctx) => {
  const response = {
    status: 'ok',
    timestamp: Date.now(),
    messages: generateMessages(),
  };
  ctx.body = response;
});

app.use(router.routes()).use(router.allowedMethods());

const handler = serverless(app);
module.exports.handler = handler;
