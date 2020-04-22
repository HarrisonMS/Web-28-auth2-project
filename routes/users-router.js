  
const router = require("express").Router();

const Users = require("./users-model");

router.get("/", (req, res) => {
	Users.find()
		.then(users => {
			res.json(users);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: "couldnt retrieve users info" });
		});
});

module.exports = router;