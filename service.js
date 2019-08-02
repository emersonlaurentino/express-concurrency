const axios = require('axios');

const AtomService = request => {
  const publicGetUser = async () => {
    const data = await request.get('https://randomuser.me/api/');

    return data;
  };

  return {
    getUser: publicGetUser
  };
};

module.exports = AtomService;