const express = require("express");
const rp = require("request-promise");

app.post('/fetchData', function (req, res) {
rp("https://.../graphql", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: `
          query {
              heroSearchByName(name: "John") {
                name
              }
          }
          `,
  }),
})
  .then((body) => {
    res.send(body)
  })
  .catch((err) => {
    console.log(err);
  });


})

const PORT = 4000;
const app = express();
console.log(`Server listening on http://localhost:${PORT} ...`);
app.listen(PORT);
``