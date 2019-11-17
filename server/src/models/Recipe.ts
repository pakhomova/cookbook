import { Document } from 'mongoose';

export default interface Recipe extends Document {
  actualVersion: string;
}
