const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const app = express();

const workHistory = [{
    id: 1,
    title: "Academic",
    location: "James Cook University",
    yearStart: "2012",
    yearEnd: "Current",
    details: [{
        activities: ["Dissemination of technical knowledge to lay audience", "Diagnosing and assisting client queries", "Assessing and providing feedback of deliverables"]
    }]
}];

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

app.get('/', (req, res) => {
    const history = workHistory.map(hist => ({
        id: hist.id,
        title: hist.title,
        location: hist.location,
    }));
    res.send(history);
});

app.get('/:id', (req, res) => {
    const history = workHistory.filter(q => (q.id === parseInt(req.params.id)));
    if (history.length > 1) return res.status(500).send();
    if (history.length === 0) return res.status(404).send();
    res.send(history[0]);
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
    const newhistory = {
        id: workHistory.length+1,
        title,
        description,
        details: [],
    };
    workHistory.push(newhistory);
    res.status(200).send();
});

app.post('/details/:id', checkJwt, (req, res) => {
    const {detail} = req.body;

    const history = workHistory.filter(q => (q.id === parseInt(req.params.id)));
    if (history.length > 1) return res.status(500).send();
    if (history.length === 0) return res.status(404).send();

    history [0].details.push({
        detail,
    });

    res.status(200).send();
});

app.listen(8081, () => {
    console.log('App started: listening on port 8081');
})