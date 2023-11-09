import express from "express";
import cors from "cors";

import Hello from "./hello.js";
import Lab5 from "./lab5.js";

const app = express();
app.use(express.json());
app.use(cors());

Lab5(app);
Hello(app);

app.listen(4000, () => console.log("Server is running on port 4000"));
