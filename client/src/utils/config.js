import dotenv from 'dotenv';
dotenv.config();

let SERVER_URI = process.env.SERVER_URI;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
  SERVER_URI = 'http://localhost:5000';

export default SERVER_URI;
