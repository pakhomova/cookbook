import { PORT } from './constants/Constants';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Controller } from './Controller';
import mongoose from 'mongoose';
import { MONGO_URL } from './constants/Constants';

class App {
  app: Application;
  controller: Controller;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setMongoConfig();

    this.controller = new Controller(this.app);
  }

  private setConfig = () => {
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(cors());
  };

  private setMongoConfig = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true
    });
  };
}

new App().app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
