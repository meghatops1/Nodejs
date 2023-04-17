const app = require('express')();

app.use('/', (req, res) =>
{
    res.status(300).send('Tops technology');
});

app.listen(8080);