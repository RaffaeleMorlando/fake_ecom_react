import jwt from 'jsonwebtoken';
import User from '../models/user.js'

const secure = async (req, res, next) => {

// -------------------------------- HEADER AUTH TOKEN
  try {

    const token = req.headers.authorization.split(' ')[1];
    
    const jwtInfo = await jwt.verify(token,process.env.JWT_SECRET);

    const user = await User.findById(jwtInfo.id);

    req.user = user;
    res.status(201);

  } catch(error){

    console.log(error)
    res.status(401).json({message:'token expired'})

  }

  next()
}




//   try {
//     req
//     let token;
//     if (req.cookies) token = req.cookies.jwt;    

//     if (!token || token === "expiredtoken") {
//       res.status(401).json({
//         status: "Unauthorized",
//         message: "You are not authorized to view this content",
//       });
//     }
    
//     const jwtInfo = await jwt.verify(token,process.env.JWT_SECRET);

//     const user = await User.findById(jwtInfo.id);

//     console.log(user);

//     if (!user) {
//       res.status(401).json({
//         status: "unauthorized",
//         message: "You are not authorized to view this content",
//       });
//     }
    
//     req.user = user;
//     next();

//   } catch (error) {

//     console.log(error);

//   }
//   next()
// };

export default secure;