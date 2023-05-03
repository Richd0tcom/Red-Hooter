import { Injectable } from '@nestjs/common';
import { CreateStartupDto } from './dto/create-startup.dto';
import { UpdateStartupDto } from './dto/update-startup.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IStartup } from './entities/startup.entity';
import { IUser } from 'src/users/entities/user.entity';

@Injectable()
export class StartupsService {
  constructor(
    @InjectModel('Startups') private readonly Startup: Model<IStartup>,
    @InjectModel('Users') private readonly User: Model<IUser>,
  ) {}

  async create(createStartupDto: CreateStartupDto) {
    const new_startup = await this.Startup.insertMany(createStartupDto);
    return new_startup;
  }

  findAll() {
    return `This action returns all startups`;
  }
  async findUserInvestments(user_id: string, page: string) {
    const user = await this.User.findById(user_id);
    let { investments } = user;

    const pageLength = investments.length;
    investments = investments.slice(
      Number(page) * 10 - 10,
      Number(page) * 10 - 1,
    );

    return {
      data: {
        user_id: user._id,
        username: user.username,
        investments,
      },
      page: page,
      totalPages: Number(Math.ceil(pageLength / 10)),
      pageCount: investments.length,
      totalTalents: pageLength,
    };
  }
  invest(startup_id: string, user_id: string) {
    return `This action returns a #${id} startup`;
  }

  update(id: number, updateStartupDto: UpdateStartupDto) {
    return `This action updates a #${id} startup`;
  }

  remove(id: number) {
    return `This action removes a #${id} startup`;
  }
}
