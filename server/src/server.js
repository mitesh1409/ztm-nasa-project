import http from 'node:http';

import app from './app.js';

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server up and running on port ${PORT}...`));
