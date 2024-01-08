import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly wallet: string;
  readonly linkURL: string;
  readonly habilitiesArray: string[];
  readonly creaedAt: Date;
}
