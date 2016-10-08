const pbkdf2 = require('pbkdf2');
var crypto = require('crypto');
var salt = crypto.randomBytes(128).toString('base64');

hash = param => {
  return new Promise(function(resolve, reject) {
    crypto.pbkdf2(param, salt, 10000, 512, function(error, hash) {
      if (error) {
        reject(error);
      } else {
        resolve(hash);
      }
    });
  });
};

checkPassword = (attemptedPass, hash) => {
  return new Promise(function(resolve, reject) {
    if (hash(attemptedPass) == hash){
      resolve(result);
    }
    reject(error);
  });
};

module.exports = {
  hash,
  checkPassword
}

