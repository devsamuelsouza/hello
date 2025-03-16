import express from 'express';

var app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Hello World'
    }
    )
});

app.get('/ping', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'pong'
    }
    )
});

app.use((req, res) => {
    res.status(404).json({
        status: 404,
        message: 'Not found'
    });
});

app.listen(8080);