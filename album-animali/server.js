const express = require('express');
const app = express();
const animals = require('./animals.json');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { animals: animals.animals });
});

app.get('/animal/:id', (req, res) => {
  const animal = animals.animals.find(a => a.id_figurina === parseInt(req.params.id));
  if (animal) {
    res.render('animal', animal);
  } else {
    res.status(404).send('Animale non trovato');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
