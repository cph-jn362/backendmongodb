// Require express package 
const express = require('express');

// Require mongodb package
const mongodb = require('mongodb').MongoClient;

// Require file system
const fs = require('fs');

// Require cors package
const cors = require('cors');

// Set up app with express
const app = express();

// Set up database
let db;

// Define PORT 
const PORT = 3000;

// Connect to mongodb from server
let connectionString = 'mongodb://localhost:27017/web-traveldestinations';

mongodb.connect(
    connectionString,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err, client) => {
        db = client.db();
        app.listen(3000);
    }
)

// Express reads JSON
app.use(express.json());

app.use(cors());

// HTTP POST method
app.post('/traveldestination', (req,res) => {
    const traveldestination = {
        title: req.body.title,
        description: req.body.description,
        dateFrom: req.body.dateFrom,
        dateTo: req.body.dateTo,
        country: req.body.country,
        location: req.body.location,
        googleMapsLink: req.body.googleMapsLink,
    };
    if (err) {
        console.log(req.body)
        res.status(400);
        res.send('error'); 
        }
    else {
        db.collection('traveldestinations').insertOne(traveldestination, 
            (err,info) => {
                console.log(req.body)
                res.status(201);
                res.send('Got a POST request');            
            })
        }
})

// HTTP GET method to get data in array
app.get('/', (req,res) => {
    db.collection('traveldestinations')
    .find()
    .toArray( (err, items) => {
        res.send(items);
    })
})
    
    
    // // HTTP PUT method
    // app.put('/:tdId', (req,res) => {
    //     console.log(req.params.tdId);
    //     res.send('Got a PUT request');
    // })

// HTTP GET method
// app.get('/', (req,res) => {
//     console.log('Hej')
//     res.status(200);
//     res.end('Hi there');
// })



// // HTTP GET method (id)
// app.get('/Id', (req,res) => {
//     console.log(req.params.Id);
//     res.send('Hi there');
// })



// // // HTTP DELETE method
// // app.delete('/:tdId', (req,res) => {
// //     console.log(req.params.tdId);
// //     res.send('Got a DELETE request');
// // })

