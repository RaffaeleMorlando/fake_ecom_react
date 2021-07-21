import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import itemsRoutes from './routes/items.js';
import authRoutes from './routes/auth.js';

// Recupera informazioni da .env
dotenv.config();

const app = express();
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


//Utilizzatto per impostare il middleware
// path + callback
app.use('/items',itemsRoutes);
app.use('/auth',authRoutes);

const PORT = process.env.PORT || 7000;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);



