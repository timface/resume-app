const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

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
        answers: q.answers.length,
    }));
    res.send(qs);
});

app.get('/:id', (req, res) => {
    const question = workHistory.filter(q => (q.id === parseInt(req.params.id)));
    if (question.length > 1) return res.status(500).send();
    if (question.length === 0) return res.status(404).send();
    res.send(question[0]);
})

app.post('/', (req, res) => {
    const {title, description} = req.body;
    const newQuestion = {
        id: workHistory.length+1,
        title,
        description,
        answers: [],
    };
    workHistory.push(newQuestion);
    res.status(200).send();
});

app.post('/answer/:id', (req, res) => {
    const {answer} = req.body;

    const question = workHistory.filter(q => (q.id === parseInt(req.params.id)));
    if (question.length > 1) return res.status(500).send();
    if (question.length === 0) return res.status(404).send();

    question [0].answers.push({
        answer,
    });

    res.status(200).send();
});

app.listen(8081, () => {
    console.log('App started: listening on port 8081');
})