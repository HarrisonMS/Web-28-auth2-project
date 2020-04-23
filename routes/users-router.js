  
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


router.post('/', (req, res) => {
  const userData = req.body
  Users.add(userData)
  .then(user => {
    res.status(201).json(user)
  })
  .catch((err) => {
    console.log(err)
    res.status(500).json({errorMessage: 'unable to create user at this time'})
  })
})
module.exports = router;