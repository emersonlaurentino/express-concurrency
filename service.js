const axios = require('axios');

const AtomService = request => {
  const publicGetUsers = async () => {
    const data = await request.get('https://randomuser.me/api/');

    return data;
  };

  return {
    getUsers: publicGetUsers
  };
};

module.exports = AtomService;