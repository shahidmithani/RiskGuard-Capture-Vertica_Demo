const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const AppServer = require('../src/AppServer').default;
const AppServerBrokerStmts = require('../src/AppServerBrokerStmts').default;


const app = express();
const PORT = process.env.PORT || 3001;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>App Server</title>
      </head>
      <body>
        <div id="root">You've reached the Web Server that inserts information extracted by Capture Service into Vertica Analytics database</div>
      </body>
    </html>`;

  res.send(html);
});

app.post('/', (req, res) => {
  const data = req.body
  var content

  if (data.includes(data.find(({name}) => name === "BrokerNumber"))){
    content = ReactDOMServer.renderToString(<AppServerBrokerStmts data={data} />);
  }
  else if (data.includes(data.find(({name}) => name === "LabName"))) {
    content = ReactDOMServer.renderToString(<AppServer data={data} />);
  }
  else {
    content = 'Database not setup to store data for this document type'
  }

  res.send(content)
  res.end()
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
