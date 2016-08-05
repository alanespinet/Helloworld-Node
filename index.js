const express = require('express');
const app = express();

app.get('/', (req, res) => res.end('hello world'));
app.listen(1919, () => console.log('listening at port 1919...'));
