import jwt from 'jsonwebtoken';
import User from '../models/user.js'

const secure = async (req, res, next) => {

  try {

    let token;
    if (req.cookies) token = req.cookies.jwt;

    if (!token || token === "expiredtoken") {
      res.status(401).json({
        status: "Unauthorized",
        message: "You are not authorized to view this content",
      });
    }
    
    const jwtInfo = await jwt.verify(token,'test');

    const user = await User.findById(jwtInfo.id);

    if (!user) {
      res.status(401).json({
        status: "unauthorized",
        message: "You are not authorized to view this content",
      });
    }
    
    req.user = user;
    next();

  } catch (error) {

    console.log('error',error.message);

  }
  
};

export default secure;