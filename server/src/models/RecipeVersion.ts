import { Document } from 'mongoose';

export default interface RecipeVersion extends Document {
  recipeId: string;
  description: string;
  dateCreated: Date;
}
