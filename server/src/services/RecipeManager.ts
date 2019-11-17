import Recipe from '../models/Recipe';
import { RecipeDoc } from '../models/db/RecipeSchema';
import RecipeVersion from '../models/RecipeVersion';
import { RecipeVersionDoc } from '../models/db/RecipeVersionSchema';
import mongoose from 'mongoose';
import { BadRequestException, NotFoundException } from './Exceptions';
import RecipeResponse from '../models/response/RecipeResponse';

export const getLatestRecipes = async () => {
  let items: Recipe[] = await RecipeDoc.find();
  let ids = items.map(item => item.actualVersion);
  let result: RecipeVersion[] = await RecipeVersionDoc.find({ _id: { $in: ids } }).sort({ dateCreated: 'descending' });
  return mapRecipesToResponse(result);
};

export const saveNewRecipe = async (description: string | null) => {
  if (description === null || description.length === 0) {
    throw new BadRequestException('Provide description');
  }

  const newRecipeId = new mongoose.Types.ObjectId();
  const newRecipeVersionId = new mongoose.Types.ObjectId();

  await new RecipeDoc({
    _id: newRecipeId,
    actualVersion: newRecipeVersionId
  }).save();
  await new RecipeVersionDoc({
    _id: newRecipeVersionId,
    recipeId: newRecipeId,
    description: description
  }).save();
};

export const saveNewRecipeVersion = async (recipeId: string | null, newDescription: string | null) => {
  if (recipeId === null || recipeId.length === 0) {
    throw new BadRequestException('Provide recipe id');
  } else if (newDescription === null || newDescription.length === 0) {
    throw new BadRequestException('Provide new description');
  }

  const newRecipeVersionId = new mongoose.Types.ObjectId();

  try {
    await RecipeDoc.updateOne({ _id: recipeId }, { actualVersion: newRecipeVersionId });
  } catch (e) {
    throw new NotFoundException('No such recipe id');
  }
  await new RecipeVersionDoc({
    _id: newRecipeVersionId,
    recipeId: recipeId,
    description: newDescription
  }).save();
};

export const getAllVersionsOfRecipe = async (recipeId: string | null) => {
  if (recipeId === null || recipeId.length === 0) {
    throw new BadRequestException('Provide recipe id');
  }

  try {
    let recipeVersions: RecipeVersion[] = await RecipeVersionDoc.find({ recipeId: recipeId }).sort({
      dateCreated: 'descending'
    });
    return mapRecipesToResponse(recipeVersions);
  } catch (e) {
    throw new NotFoundException('No such recipe id');
  }
};

export const clear = async () => {
  await RecipeDoc.deleteMany({});
  await RecipeVersionDoc.deleteMany({});
};

const mapRecipesToResponse = (items: RecipeVersion[]) => {
  return items.map((item: RecipeVersion) => {
    let recipe: RecipeResponse = {
      id: item.recipeId,
      description: item.description,
      dateCreated: item.dateCreated
    };
    return recipe;
  });
};
