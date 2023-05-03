import mongoose from 'mongoose';
import { Role } from 'src/common/enums/roles.enum';

export interface IUser {
  username: string;
  email: string;
  password: string;
  investments: IUserInvestment[];
  role: Role;
}

export interface IUserInvestment {
  startup_id: string;
  no_of_units_purchased: number;
}

export const UserSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    investments: {
      type: [
        {
          _id: false,
          startup_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Startups',
          },
          no_of_units_purchased: Number,
        },
      ],
      required: true,
      default: [],
    },
    role: {
      type: String,
      required: true,
      default: Role.Customer,
    },
  },
  {
    timestamps: true,
  },
);
