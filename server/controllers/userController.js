const model = require('../config/db.js');
const password = require('../config/passwordTools.js');
var uniqueIdentifier;

module.exports = {
  signup: (req, res) => {
    const newUser = models.User.build({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      cohort: req.body.cohort,
      profilePic: req.body.profilePic,
      bio: req.body.bio,
    });

    newUser.save() //saves to database
      .then(inputs => {
        res.status(200).send("USER INPUT SAVED");
      })
      .catch(err => {
        console.log("ERROR", err)
        res.status(500).send("Something inside of userController: ", err);
      })
  },

  signin: (req, res) => {
    if((!req.body.username && !req.body.email) || !req.body.password){
      res.status(500).send("Invalid or missing inputs");
    }
    uniqueIdentifier = (req.body.username) ? 'username' : 'email';
    model.findOne({
      where:{
        uniqueIdentifier : req.body[uniqueIdentifier]
      },
      attributes: ['id', 'firstName', 'lastName', 'email', 'username', 'password', 'profilePic', 'bio']
    })
      .then( foundUser => {
        if(!foundUser) res.status(500).send('User not found.');
        else {
          password.checkPassword(req.body.password, user.password)
            .then( successfulMatch => {
              console.log("Successful login");
              //INSERT JSON WEBTOKEN
          })
            .catch( err => {
              console.log('Error:', err);
              res.status(500).send("Password do not match", err);
            })
        }
      })
  },

  //Logout
  //Change Password
  //email verification;

}

