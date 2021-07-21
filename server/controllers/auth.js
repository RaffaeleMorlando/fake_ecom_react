import User from '../models/user.js';
import bycript from 'bcrypt';
import jwt from 'jsonwebtoken';

export const createUser = async (req,res) => {

  const { name, email, password } = req.body;

  //Check if email already exists
  const userExist = await User.findOne({ email });
  if(userExist) return res.json({message: 'User already exist'});

  //Hashing password
  const hashedPw =  await bycript.hash(password,15);

  const newUser = new User({name, email, password: hashedPw});
  console.log(newUser);
  const token = jwt.sign({ email: newUser.email, id: newUser._id }, 'test', { expiresIn: '1h' })

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
    //Check if users exist
    const userExist = await User.findOne({ email });
    if(!userExist) return res.json({message: 'User doesn\'t exist'});

    //Check if password is correct
    const checkPw =  await bycript.compare(password,userExist.password);
    if(!checkPw) return res.json({message: 'Password incorrect'});

    const token = jwt.sign({ email: userExist.email, id: userExist._id }, 'test', { expiresIn: '1h' })

    res.status(201).json({userExist,token});

  } catch (error) {

    console.log(error.message);
    res.json({message: error.message});

  }

}
