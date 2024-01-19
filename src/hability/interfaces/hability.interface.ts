import { Document } from 'mongoose';

export interface Hability extends Document {
  readonly name: string;
  readonly usersArray: string[];
  readonly creaedAt: Date;
}
