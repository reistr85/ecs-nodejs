const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  const postIdRandon = Math.floor(Math.random() * 100);
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postIdRandon}`);

  res.send(`<h1>Novo Post</h1><p>${data.title}</p><p>${data.body}</p><a href="http://localhost:3000">Novo Post</a>`);
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
