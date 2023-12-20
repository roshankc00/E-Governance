import { IUserRepository } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
export class UserService implements IUserRepository {
  async create(data: any): Promise<any> {
    const user = await UserModel.create(data);
    return user;
  }
  async update(id: string, data: any): Promise<any> {
    const updUser = await UserModel.findByIdAndUpdate(
      id,
      {
        $set: data,
      },
      { new: true }
    );
    return updUser;
  }
  async delete(id: any): Promise<void> {
    await UserModel.findOneAndDelete(id);
  }
  async find(): Promise<any> {
    const users = await UserModel.find();
    return users;
  }
  async findOne(id: string): Promise<any> {
    const user = await UserModel.findById(id);
    return user;
  }
}
