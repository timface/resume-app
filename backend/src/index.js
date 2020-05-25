const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const app = express();

const workHistory = [];

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

app.get('/', (req, res) => {
    const qs = workHistory.map(q => ({
        id: q.id,
        title: q.title,
        description: q.description,
        details: q.details.length,
    }));
    res.send(qs);
});

app.get('/:id', (req, res) => {
    const question = workHistory.filter(q => (q.id === parseInt(req.params.id)));
    if (question.length > 1) return res.status(500).send();
    if (question.length === 0) return res.status(404).send();
    res.send(question[0]);
})

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache:true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://dev-timface.au.auth0.com/.well-known/jwks.json`
    }),

    audience: 'svsGPl786Av6Ti916yyoaVZ58SFFSl0D',
    issuer: `https://dev-timface.au.auth0.com/`,
    algoritms: ['RS256']
});

app.post('/', checkJwt, (req, res) => {
    const {title, description} = req.body;
    const newQuestion = {
        id: workHistory.length+1,
        title,
        description,
        details: [],
    };
    workHistory.push(newQuestion);
    res.status(200).send();
});

app.post('/details/:id', checkJwt, (req, res) => {
    const {detail} = req.body;

    const question = workHistory.filter(q => (q.id === parseInt(req.params.id)));
    if (question.length > 1) return res.status(500).send();
    if (question.length === 0) return res.status(404).send();

    question [0].details.push({
        detail,
    });

    res.status(200).send();
});

app.listen(8081, () => {
    console.log('App started: listening on port 8081');
})