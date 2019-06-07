const express = require('express');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(express.json());

const {CONNECTION_STRING, SESSION_SECRET} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("Database Connected!")
})


const PORT = 4444

app.listen(PORT, () => {
    console.log(`App is Listening on port ${PORT}`)
})
