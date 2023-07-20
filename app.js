const path = require('path');
const express = require('express');
const electron = require('electron');

const app = express();

app.use('',express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
	return response.sendFile('auth.html', { root: '.' });
});

app.get('/auth/discord', (request, response) => {
	return response.sendFile('dashboard.html', { root: '.' });
});

const port = '51235';
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));