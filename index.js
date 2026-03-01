const express = require('express');
const path = require('path');   
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
   res.render('index.html');
});

app.get('/about', (req, res) => {
   res.render('about.ejs');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});