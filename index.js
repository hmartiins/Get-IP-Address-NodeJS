const express = require('express');
const app = express();
  
const requestIp = require('request-ip');
    
app.get('/',function(request, response) {
  const clientIp = requestIp.getClientIp(request);
  response.json({"ip": clientIp});
});
  
app.listen(3000, () => console.log(`App listening on port 3000`))