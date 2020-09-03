const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;

const app = express();
app.disable('x-powered-by');

let object = undefined;

app.use(bodyParser.json(), cors());

app.get('/', (_, res) => res.json(object));
app.post('/', (req, res) => {
    if (JSON.stringify(object) !== JSON.stringify(req.body))
        console.log("Received new", req.body);
    object = req.body;
    res.send();
});

app.listen(port, () => console.log(`Listening on port ${port}, using environment ${process.env.NODE_ENV}`));