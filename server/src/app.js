import express from 'express';
import cors from 'cors';

import planetsRouter from './routes/planets/planets.router.js';

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/hello', (req, res) => {
    res.json({
        'greetings': 'Hello! :)',
    });
});

app.use(planetsRouter);

export default app;
