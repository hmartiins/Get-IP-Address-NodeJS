var express = require('express');
var app = express();
  
app.get('/',function(request, response) {
    var idAddress = request.header('x-forwarded-for') || request.connection.remoteAddress;
    response.json({"ip": idAddress});
});
  
app.listen(3000, () => console.log(`App listening on port 3000`))
