import express from 'express';

import * as planetsController from './planets.controller.js';

const planetsRouter = express.Router();

planetsRouter.get('/planets', planetsController.getAllPlanets);

export default planetsRouter;
