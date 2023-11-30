const express = require('express');
const app = express();
//const port = 4000;
const mainRoutes = require ('./src/routes/mainRoutes');
const shopRoutes = require ('./src/routes/shopRoutes');
const adminRoutes = require ('./src/routes/adminRoutes');
const authRoutes = require ('./src/routes/authRoutes');

app.use(express.static('public'));
app.use('/', mainRoutes);
app.use('/', shopRoutes);
app.use('/', adminRoutes);
app.use('/', authRoutes);

//app.get('/ping', (req, res) => res.send('pong'));

app.listen(4000, () => {console.log('El servidor esta corriendo en el http://localhost:4000');
})