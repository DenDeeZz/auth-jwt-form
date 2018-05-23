const express = require('express');
var bodyParser = require("body-parser");
var parser = bodyParser.urlencoded({extended: false});
const jwt = require('json-web-token');
const app = express();
app.use(bodyParser.text());

  let secret = 'TOPSECRET' //secret key for JWT
  let template = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IlJPT1QiLCJwYXNzd29yZCI6InJvb3QifQ.-Xm8T_evWDGoQRkyaYhXq5kqfiVNUtfxoj7vqJd9Nfs' //Example token: Username: ROOT, Password: root

const port = 5000;

app.listen(port, () => {
  console.log('Server started on port ' + port);
});

app.post('/auth/', (req, res) => {

  let src = JSON.parse(req.body);

  console.log(src.username);
  console.log(src.password);

  let payload = {
    username: src.username,
    password: src.password,
  }

    let clientData = {token: '', access: false};

  jwt.encode(secret, payload, (err, token) => {
      //template comparison
    if(token === template) {
      clientData.access = true;
      clientData.token = token;
      res.send({clientData});
    } else {
      res.send({clientData});
    }
    //
  });

})