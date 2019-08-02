const axios = require('axios');
const AtomService = require('./service');

async function createAxios(req, res, next) {
  const instance = axios.create({
    headers: {
      ['postman-token']: req.headers['postman-token'],
    }
  });
  
  req.atomService = AtomService(instance);
  
  next();
}

module.exports = { createAxios };
