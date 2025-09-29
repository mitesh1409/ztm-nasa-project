import express from 'express';
import planetsRouter from './routes/planets/planets.router.js';

const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
    res.json({
        'greetings': 'Hello! :)',
    });
});

app.use(planetsRouter);

export default app;
