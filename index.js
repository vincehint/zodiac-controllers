const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(layouts);

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/layout', (req, res) => {
    res.render('layout.ejs');
});

app.use('/water', require(''./routes/water'));

app.get('/air', (req, res) => {
    
    res.render('air.ejs', {airTraits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']})
});


app.get('/fire', (req, res) => {
    res.render('fire.ejs', {fireTraits: ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']})
});

app.get('/earth', (req, res) => {
    res.render('earth.ejs', {earthTraits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']})
});


app.listen(3000, () => {
    console.log('I can heeeeaaaar you')
})