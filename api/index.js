const express = require("express");
const app = express();

app.get("/", (req, res) => {
    if (req.headers["user-agent"].includes("Twitterbot")) {
        res.setHeader("Location", "https://minecraft.net/");
        res.setHeader('Title', "Changes to Minecraft's Online Multiplayer System");
        return;
    }

    res.redirect(301, "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
