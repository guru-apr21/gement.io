require('dotenv').config();

let ORIGIN_URI = process.env.DEV_URI;

if (process.env.NODE_ENV === 'production')
  ORIGIN_URI = process.env.PRODUCTION_URI;

module.exports = { ORIGIN_URI };
