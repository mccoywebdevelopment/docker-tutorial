const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Test");
});

app.listen(port, () => {
    console.log(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nServer up and running on port ${port}`)
});