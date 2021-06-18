'use strict';

const express = require('express');
const dotenv = require('dotenv')
dotenv.config({ path: '../config/config.env' })
const app = express();
const PORT = process.env.PORT || 3000;
const DB_PORT = process.env.DB_PORT;
const HOST = process.env.HOST;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connURL = `mongodb://mongo:${DB_PORT}`;
const databaseName = 'test-mongo1';

MongoClient.connect(connURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        console.log(error);
        return console.log('Database Error!!');
    }

    console.log('MongoDB successfully connected!!!');
    const db = client.db(databaseName);
});

const isArg1Arg2 = (arg1, arg2) => {
    return new Promise((resolve, reject) => {
        if (arg1 === arg2) {
            resolve('Yeah they are the same man.')
        }

        reject('Man, seriously.')
    });
};

app.get('/', async (req, res) => {
    res.send('Hello World! Gotcha man!');

    try {
        const result = await isArg1Arg2(1, 2);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
});

app.listen(PORT, HOST, () => {
    console.log(`App listening at http://${HOST}:${PORT} (${process.env.NODE_ENV})`);
});
