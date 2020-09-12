/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const authenticate = () => {

    return (req, res, next) => {
        const authError = {
            message: "Invalid credentials."
        };

        try {
            if(!req.session || !req.session.user){
                return res.status(401).json(authError);
            }

            next();
    
       } catch (err) {
            next(err);
       }
    }    
};

const validateUser = (req, res, next) => {

  if (!req.body.username || !req.body.password) {
      res.status(400).json({message: 'Must include username and password.'})
  } else {
      next();
  }
};

module.exports = {authenticate, validateUser};