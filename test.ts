import { Hono } from 'hono';

const app = new Hono();

app.get('/check', (c) => {
  const host = c.req.header;
  return c.json({ host });
});

export default app;
