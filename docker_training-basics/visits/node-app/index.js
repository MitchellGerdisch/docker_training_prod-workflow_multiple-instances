const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();

const client = redis.createClient({
    host: 'redis-server',  // this is a reference to the service in the docker compose file which then will be resolved by Docker when the call is made.
    port: 6379
});
//client.set('visits', 0)

app.get('/error', (req,res) => {
    process.exit(1);
});

app.get('/', (req,res) => {
    client.get('visits', (err, visits) => {
        if (!visits) {
            visits = "0"
        }
        res.send('Number of previous visits: ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log("Access node app at http://localhost:4001");
});
