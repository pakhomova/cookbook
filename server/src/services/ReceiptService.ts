import { Request, Response } from 'express';
import { BadRequestException, NotFoundException } from './Exceptions';
import * as recipeManager from './RecipeManager';

export const welcomeMessage = (req: Request, res: Response) => {
  return res.send('Welcome to receipt API');
};

export const getAllReceipts = async (req: Request, res: Response) => {
  try {
    res.send(await recipeManager.getLatestRecipes());
  } catch (e) {
    handleException(res, e);
  }
};

export const saveNewRecipe = async (req: Request, res: Response) => {
  try {
    res.send(await recipeManager.saveNewRecipe(req.body.description));
  } catch (e) {
    handleException(res, e);
  }
};

export const saveNewRecipeVersion = async (req: Request, res: Response) => {
  try {
    res.send(await recipeManager.saveNewRecipeVersion(req.params.id, req.body.description));
  } catch (e) {
    handleException(res, e);
  }
};

export const getAllVersionsOfRecipe = async (req: Request, res: Response) => {
  try {
    res.send(await recipeManager.getAllVersionsOfRecipe(req.params.id));
  } catch (e) {
    handleException(res, e);
  }
};

export const clear = async (req: Request, res: Response) => {
  try {
    res.send(await recipeManager.clear());
  } catch (e) {
    handleException(res, e);
  }
};

const handleException = (res: Response, e: Error) => {
  switch (e.name) {
    case BadRequestException.NAME:
      res.status(400);
      break;
    case NotFoundException.NAME:
      res.status(404);
      break;
    default:
      res.status(500);
  }
  res.send(getErrorBody(e.message));
};

const getErrorBody = (message: string) => {
  return { error: message };
};
