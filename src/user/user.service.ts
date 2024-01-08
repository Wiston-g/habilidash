import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/user-create.dto';
//import { UpdateUserDTO } from './dto/user-update.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') readonly userModel: Model<User>) {}

  async findAllUsers(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findOneUser(userID: string): Promise<User> {
    return await this.userModel.findById(userID);
  }

  async findOneUserLogin(wallet: string): Promise<User> {
    return await this.userModel.findOne(wallet);
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const newUser = new this.userModel(createUserDTO);
    await newUser.save();
    return newUser;
  }

  async deleteUser(userID: string): Promise<any> {
    return await this.userModel.findByIdAndDelete(userID);
  }

  async updateUser(
    userID: string,
    createUserDTO: CreateUserDTO,
  ): Promise<User> {
    return await this.userModel.findByIdAndUpdate(userID, createUserDTO, {
      new: true,
    });
  }
}
