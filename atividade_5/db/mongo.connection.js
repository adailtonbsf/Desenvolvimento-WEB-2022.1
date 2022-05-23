var mongoose = require('mongoose');

var mongoDB_URI = 'mongodb://localhost:27017/university_ufc';
mongoose.connect(mongoDB_URI, { useNewUrlParser: true });

var db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose Connected to ' + mongoDB_URI);
});

db.on('disconnected', () => {
    console.log('Mongoose Disconnected to ' + mongoDB_URI);
});

db.on('error', (err) => {
    console.log('Mongoose Error: ' + err);
});