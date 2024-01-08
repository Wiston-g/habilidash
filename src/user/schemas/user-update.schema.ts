import { Schema } from 'mongoose';

export const UserUpdateSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 55,
  },
  wallet: {
    type: String,
    required: true,
  },
  linkURL: {
    type: String,
    required: true,
    min: 2,
    max: 155,
  },
  habilitiesArray: {
    type: Array,
    required: true,
  },
  creaedAt: {
    type: Date,
    default: Date.now,
  },
});
