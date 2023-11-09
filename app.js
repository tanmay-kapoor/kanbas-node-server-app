import "dotenv/config";
import session from "express-session";

import express from "express";
import cors from "cors";

import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";

const app = express();
app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
    })
);

const PORT = process.env.PORT || 4000;

Lab5(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
