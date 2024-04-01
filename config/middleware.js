module.exports = {
    settings: {
      jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: '1h', // JWT will expire after 1 hour
      },
      cors: {
        enabled: true,
        origin: '*', // Allow all origins
        headers: '*', // Allow all headers
      },
    },
  };