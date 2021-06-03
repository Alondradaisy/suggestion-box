require('dotenv').config(); //without this line of code, our app does not understand that .env environment exists -> env = environment variable

const mongoose= require('mongoose');

const app = require('./app');

const port = 3000;

mongoose
    .connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server connected on ${port}`);
            console.log('MongoDB Connected');
        });
    })
    .catch((e) => {
        console.log(e);
    });