const path = require('path');
const express = require('express');

const app = express();

app.use('',express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
	return response.sendFile('auth.html', { root: '.' });
});

app.get('/auth/discord', (request, response) => {
	return response.sendFile('dashboard.html', { root: '.' });
});

// const port = '51235';
const port = process.env.PORT || 3000;
app.listen(port);