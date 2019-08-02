async function getRandomUser(req, res) {
  try {
    const { data } = await req.atomService.getUser();

    res.json(data);
  } catch (error) {
    throw error;
  }
}

module.exports = { getRandomUser };
