const express = require('express');
const app = express();
  
app.get('/',function(request, response) {
  const ipAddress = request.socket.remoteAddress;
  response.json({"ip": ipAddress});
});
  
app.listen(3000, () => console.log(`Started!`))