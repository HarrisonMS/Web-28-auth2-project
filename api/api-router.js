const router = require('express').Router();


const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../routes/users-router.js");
const authenticator = require('../auth/restricted-mid')



router.use('/auth', authRouter);
router.use('/users', authenticator, usersRouter);

router.get("/", (req, res) => {
  res.json({api: "You figured it out!"});
});

module.exports = router;