import { app } from "./server";

app.get("/", (req, res) => {
    res.send("API Working");
});
