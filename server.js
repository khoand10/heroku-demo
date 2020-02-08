const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.listen(port, () => console.log(`Example app listening on port ${port}!`))