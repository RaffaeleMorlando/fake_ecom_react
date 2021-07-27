import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import itemsRoutes from './routes/items.js';
import authRoutes from './routes/auth.js';

import auth from './middleware/auth.js';

// Recupera informazioni da .env
dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use('/auth', authRoutes);

//TEST TO DELETE COOKIES
// app.get('/items/delete',(req,res) => {
//   res.status(202).clearCookie('jwt').json({message: 'ACCOUNT LOGOUT'})
// });
//

//MIDDLEWARE -> (ITEMS)
app.use(auth);
app.use('/items', itemsRoutes);


const PORT = process.env.PORT || 7000;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);



