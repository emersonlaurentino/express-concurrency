const axios = require('axios');

async function getRandomUser(req, res) {
  try {
    const { data, config } = await req.atomService.getUsers();

    res.json(config.headers);
  } catch (error) {
    throw error;
  }
}

module.exports = { getRandomUser };
