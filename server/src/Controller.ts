import { Application } from 'express';
import * as receiptService from './services/ReceiptService';

export class Controller {
  constructor(private app: Application) {
    this.app.route('/').get(receiptService.welcomeMessage);
    this.app.route('/recipes').get(receiptService.getAllReceipts);
    this.app.route('/recipe').post(receiptService.saveNewRecipe);
    this.app.route('/recipe/:id').post(receiptService.saveNewRecipeVersion);
    this.app.route('/recipe/:id').get(receiptService.getAllVersionsOfRecipe);
    this.app.route('/clear').delete(receiptService.clear);
  }
}
