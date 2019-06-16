const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://APP:Rz9YVQ5RIfdKXIGC@clusteratlas-2019-04-28-07-27-19-g8wj9.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3333);
