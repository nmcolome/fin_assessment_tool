const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.locals.title = 'Financial Assessment Tool';
app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, './build')));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, './build', 'index.html')));

app.listen(app.get('port'), () => console.log(`${app.locals.title} is running on ${app.get('port')}`));
