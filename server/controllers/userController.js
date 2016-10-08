/**
 * Created by MikeTran on 10/8/16.
 */
const model = require('.../models/userModel.js');

let uniqueIdentifier;

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
        //will hash password here
        password.hash(req.body.password)
        .then(hashedPassword => {
          newUser.update({ password: hashedPassword });
          //create webtoken
        })
      .catch(err => console.log("Error while hashing password, ", err))
      })
      .catch(error => {
        console.log("Error while creating new User ", error);
        res.status(500).send(err);
      });
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
          //compare userPassword
            .then( successfulMatch => {

          })
            .catch( err => {
              console.log('Error:', err);
              res.status(500).send("Password do not match", err);
            })
        }
      })
  },

}

