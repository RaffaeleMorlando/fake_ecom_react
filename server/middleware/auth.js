import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {

  const token = req.headers.authorization.split(' ')[1];
  
  try {
    if(token) {
      const decodedData = jwt.verify(token,'test');
      console.log(decodedData);
      next()
    }
  } catch (error) {
    res.json({message: error.message})
  }

}
export default auth;