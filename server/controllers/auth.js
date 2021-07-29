import User from '../models/user.js';
import bycript from 'bcrypt';
import jwt from 'jsonwebtoken';

export const createUser = async (req,res) => {

  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });
  
  if(userExist) return res.status(401).json({message: 'Email already exist'});

  //Hashing password
  const hashedPw =  await bycript.hash(password,15);

  const newUser = new User({name, email, password: hashedPw});

  const token = jwt.sign({ email: newUser.email, id: newUser._id }, 'test', { expiresIn: '1h' })

  //COOKIE OPTIONS
  const option = {
    expires: new Date(Date.now() + 86400000),
    secure: true,
    httpOnly: true,
  };

  //CREATE COOKIE
  res.cookie('jwt',token,option);

  try {

    await newUser.save();
    res.status(201).json({newUser,token});

  } catch (error) {

    console.log(error.message);
    res.json({message: error.message});

  }

}

export const loginUser = async (req,res) => { 
  
  const { email, password } = req.body;

  try {

    const userExist = await User.findOne({ email });
    if(!userExist) return res.status(401).json({message: 'Email incorrect'});

    const checkPw =  await bycript.compare(password,userExist.password);
    if(!checkPw) return res.status(401).json({message: 'Password incorrect'});

    const token = jwt.sign({ email: userExist.email, id: userExist._id }, 'test', { expiresIn: '1h' })

    const option = {
      expires: new Date(Date.now() + 86400000),
      secure: true,
      httpOnly: true,
    };

    res.cookie('jwt',token,option);
    res.status(201).json({name: userExist.name, id:userExist._id, token});

  } catch (error) {

    console.log(error);
    
  }


}

export const logoutUser = async (req,res) => {

  try {
    res.status(202).clearCookie('jwt').json({message: 'ACCOUNT LOGOUT'})
  } catch (error) {
    res.json(error.message)
  }
}
