const app = require('express')();

app.get('/', (request, response) => {
  response.json({"client-ip": request.ip})
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('server start!');
});
