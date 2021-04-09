const express = require('express');

const app = express();

var redis = require("redis"),
    client = redis.createClient();
   
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);

app.get('/jobs', async (req, res)=>{

    const jobs = await getAsync('github');

    res.header("Access-Control-Allow-Origin", "http://localhost:3000");

    return res.send(JSON.parse(jobs));
})

const port = 3001
app.listen(port, ()=> console.log("running on port "+ port))    