const express = require('express');
const { getRandomUser } = require('./controllers');
const { axiosInterceptors } = require('./middlewares');

const app = express();
const port = 3000;

app.use(axiosInterceptors);
app.get('/users', getRandomUser);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
