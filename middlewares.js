const axios = require('axios');
const AtomService = require('./service');

async function axiosInterceptors(req, res, next) {
  console.log('request.headers', req.headers);

  const axiosAudora = axios.create({
    headers: {
      ['postman-token']: req.headers['postman-token'],
    }
  });
  
  req.atomService = AtomService(axiosAudora);
  
  next();
}

module.exports = { axiosInterceptors };
