const router = require("express").Router();
const {
 getProjects,
 addProject
} = require("../controllers/projectController");

router.get("/", getProjects);
router.post("/", addProject);

module.exports = router;