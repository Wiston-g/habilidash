import { Schema } from 'mongoose';

export const HabilitySchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 55,
  },
  usersArray: {
    type: Array,
    required: true,
  },
  creaedAt: {
    type: Date,
    default: Date.now,
  },
});
