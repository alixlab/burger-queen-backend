const router = require('express').Router();
const User = require('../controllers/user');

router.get("/", User.getUser);
router.get("/:id", User.getUserById);
router.post("/", User.postUser);
router.put("/:id", User.putUser);
router.delete("/:id", User.deleteUser);

module.exports = router;