const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
	return response.send('hi')
});

module.exports = router