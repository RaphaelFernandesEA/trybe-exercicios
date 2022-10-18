const express = require('express');
const activitiesRouter = require('./routes/activitiesRouter');
const signupRouter = require('./routes/signupRouter');

const app = express();

app.use(express.json());
app.use('/signup', signupRouter);

app.use('/activities', activitiesRouter);

module.exports = app;