const express = require('express');
const app = express();

app.use(express.json());

const server = app.listen(8000, () => {
    console.log("server listening on port 8000");
});
