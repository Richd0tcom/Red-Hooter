import mongoose from 'mongoose';
import { IUser } from 'src/users/entities/user.entity';

export interface IStartup {
  name: string;
  descrption: string;
  no_of_available_units: number;
  price_per_unit: string;
  investors: IUser[];
}

export const StartupSchema = new mongoose.Schema<IStartup>(
  {
    name: {
      type: String,
      required: true,
    },
    descrption: {
      type: String,
    },
    no_of_available_units: {
      type: Number,
      required: true,
      default: 0,
    },
    price_per_unit: {
      type: String,
      required: true,
    },
    investors: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Users',
        },
      ],
      required: true,
      default: []
    },
  },
  {
    timestamps: true,
  },
);

