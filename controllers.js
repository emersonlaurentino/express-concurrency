const axios = require('axios');

async function getRandomUser(req, res) {
  try {
    const { data, config } = await req.atomService.getUser();

    res.json(config.headers);
  } catch (error) {
    throw error;
  }
}

module.exports = { getRandomUser };
