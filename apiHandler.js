const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
	return response.send('hi')
});

router.get('/discord/user/:code', (request, response) => {
    const authCode = request.params.code
    fetch(process.env.DISCORD_API_ENDPOINT, {
        method: "POST",
        cache: "default",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        redirect: "manual",
        body: {
            "client_id": process.env.APP_ID,
            "client_secret": process.env.APP_SECRET,
            "grant_type": "authorization_code",
            "code": authCode,
            "redirect_uri": process.env.REDIRECT_URI
        }
    }).then((res) => {
        return response.send(JSON.stringify(res))
    })

	return response.send('hi')
});

module.exports = router