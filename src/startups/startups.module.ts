import { Module } from '@nestjs/common';
import { StartupsService } from './startups.service';
import { StartupsController } from './startups.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StartupSchema } from './entities/startup.entity';
import { UserSchema } from 'src/users/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Startups',
        schema: StartupSchema,
      },
      {
        name: 'Users',
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [StartupsController],
  providers: [StartupsService],
})
export class StartupsModule {}
