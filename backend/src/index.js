const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const app = express();

const data = {histories: [{
    id: 1,
    isEmpHist: true,
    title: "Academic",
    location: "James Cook University",
    yearStart: "2012",
    yearEnd: "Current",
    activities: ["Dissemination of technical knowledge to lay audience", "Diagnosing and assisting client queries", "Assessing and providing feedback of deliverables"],
    achievements: ["Sessional Teaching Award - 2016", "Bev Frangos Graduate Instructor Prize in Information Technology - 2019", "Consistent positive feedback from students"],
    overview: `This role requires me to accurately and clearly instruct tertiary level students in the subject matter as well as encourage their professional growth. I have instructed content areas such as 
                programming, networking, databasing, user interaction/experience, and security. I have developed a strong sense for "getting to the bottom" of an individual's issue(s) so that I can then guide them
                towards a solution/understanding.`
},
{
    id:2,
    isEmpHist: false,
    title: "Bachelor of Information Technology",
    location: "James Cook University",
    yearStart: "2011",
    yearEnd: "2014",
    overview: "This course covered a breadth of IT fields including programming, networking, databasing, user interaction/experience, and security.",
    achievements: ["University Medal (awarded for a GPA of at least 6.5 (max: 7))"]
},
{
    id: 3,
    isEmpHist: false,
    title: "Bachelor of Information Technology - Honours",
    location: "James Cook University",
    yearStart: "2014",
    yearEnd: "2015",
    overview: `Abstract from Thesis: There is a growing need for conservation stakeholders to make more cost-effective decisions as the strain placed on our 
            ecosystems grows while the amount of resources available for conservation efforts lags. The decision making process however suffers from a number of 
            flaws including efficiency, accuracy, and human misjudgement and errors. This paper shows that the use of serious games as a decision support tool 
            can be used to overcome some of these flaws.`,
    achievements: ["Class 1B overall result"],
}],
skills: [{
    id: 1,
    type: "Technical",
    skill: "Javascript",
    level: "Working Knowledge",
},
{
    id: 2,
    type: "Technical",
    skill: "HTML + CSS",
    level: "Working Knowledge",
},
{
    id: 3,
    type: "Technical",
    skill: "Python",
    level: "Working Knowledge",
},
{
    id: 4,
    type: "Technical",
    skill: "PHP",
    level: "Needs Review",
},
{
    id: 5,
    type: "Technical",
    skill: "Web Development Frameworks - React.js, Bootstrap, Node.js",
    level: "Learning -> Working Knowledge"
},
{
    id: 6,
    type: "Professional",
    skill: "Client Communications - General (Digital, Oral, Written)",
    level: "Highly Proficient"
},
{
    id: 7,
    type: "Professional",
    skill: "Client Communications - Knowledge Transfer",
    level: "Highly Proficient"
},
{
    id: 8,
    type: "Professional",
    skill: "Client Communications - Requirements Gathering",
    level: "Highly Proficient"
},
{
    id: 9,
    type: "Professional",
    skill: "Adaptability",
    level: "Highly Proficient"
},
{
    id: 10,
    type: "Professional",
    skill: "Teamwork",
    level: "Highly Proficient"
},
{
    id: 11,
    type: "Technical",
    skill: "Server Management",
    level: "Learning"
},
{
    id: 12,
    type: "Technical",
    skill: "Cloud Technology",
    level: "Learning"
},
{
    id: 13,
    type: "Technical",
    skill: "C#",
    level: "Working Knowledge"
},
{
    id: 14,
    type: "Professional",
    skill: "Research skills - Critical Analysis, Creative Thinking, Problem Solving",
    level: "Working Knowledge"
}
],
testimonials: ["Tim is good", "Tim is helpful", "Tim is great"]
};

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

app.get('/', (req, res) => {
    return res.status(200).send(data);
})

app.get('/histories', (req, res) => {
    const history = data.histories.map(hist => ({
        id: hist.id,
        title: hist.title,
        location: hist.location,
        isEmpHist: hist.isEmpHist,
    }));
    res.send(history);
});

app.get('/histories/:id', (req, res) => {
    const history = data.histories.filter(q => (q.id === parseInt(req.params.id)));
    if (history.length > 1) return res.status(500).send();
    if (history.length === 0) return res.status(404).send();
    res.send(history[0]);
})

app.get('/skills', (req, res) => {
    const skills = JSON.stringify(data.skills);

    res.send(skills);
} )

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