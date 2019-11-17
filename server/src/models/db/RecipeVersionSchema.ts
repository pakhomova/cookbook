import { model, Model, Schema } from 'mongoose';
import RecipeVersion from '../RecipeVersion';

const RecipeVersionSchema = new Schema({
  _id: Schema.Types.ObjectId,
  recipeId: { type: Schema.Types.ObjectId, ref: 'Recipe' },
  description: String,
  dateCreated: { type: Date, default: Date.now }
});

export const RecipeVersionDoc: Model<RecipeVersion> = model<RecipeVersion>('RecipeVersion', RecipeVersionSchema);
