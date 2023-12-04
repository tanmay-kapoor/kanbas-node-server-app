import "dotenv/config";

import express from "express";
import cors from "cors";

import mongoose from "mongoose";
mongoose
    .connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";
import GradeRoutes from "./grades/routes.js";
import UserRoutes from "./users/routes.js";

const app = express();
app.use(express.json());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
    })
);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    next();
});

const PORT = process.env.PORT || 4000;

Lab5(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
GradeRoutes(app);
UserRoutes(app);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
