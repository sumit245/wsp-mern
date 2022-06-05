const express = require('express');
const path = require("path")

const app = express();
app.use(express.static(path.join(__dirname, "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
}
)
const PORT = process.env.PORT || 4000;

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
);