import express from "express";
import Hello from "./hello.js";
const app = express();

Hello(app);
app.listen(4000, () => console.log("Server is running on port 4000"));
