let ORIGIN_URI = 'http://localhost:3000';

const getCorsOptions = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
    return {
      cors: {
        origin: ORIGIN_URI,
        methods: ['GET', 'POST'],
      },
    };
  return {};
};

module.exports = getCorsOptions;
