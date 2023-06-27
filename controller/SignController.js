var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/addSignature', async (req, res) => {
    const from = req.body.address;
    try {
        const message = 'Hello, Chainfuse!';
        const msg = `0x${Buffer.from(message, 'utf8').toString('hex')}`;
        const sign = await ethereum.request({
            method: 'personal_sign',
            params: [msg, from]
        });
        res = sign.data;
        if (res.status === true) {
            console.log('Signature success');
            res.send(JSON.stringify(res));
        } else {
            console.log('Signature failed: ', res.err);
            res.send(JSON.stringify(res));
        }
    } catch (err) {
        const errors = err.response.data.errors;
        console.log('Signature API error', errors);
        res.send(JSON.stringify(res));
    }
})