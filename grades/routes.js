import db from "../Database/index.js";

const GradeRoutes = (app) => {
    app.get("/api/courses/:cid/enrollments", (req, res) => {
        const { cid } = req.params;
        const enrollments = db.enrollments.filter(
            (enrollment) => enrollment.course === cid
        );
        res.json(enrollments);
    });

    app.get("/api/users/:uid", (req, res) => {
        const { uid } = req.params;
        const users = db.users.find((user) => user._id === uid);
        res.json(users);
    });

    app.get("/api/grades/:aid/:uid", (req, res) => {
        const { aid, uid } = req.params;
        const grades = db.grades.find(
            (grade) => grade.student === uid && grade.assignment === aid
        );
        res.json(grades);
    });
};

export default GradeRoutes;
