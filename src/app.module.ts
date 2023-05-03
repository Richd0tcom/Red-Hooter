import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { StartupsModule } from './startups/startups.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './shared/mongo/seeds/mongo.service';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './common/guards/roles.guard';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    UsersModule,
    AuthModule,
    StartupsModule,
    ConfigModule.forRoot({
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass:
        RolesGuard /* A guard that is used to protect routes with roles. */,
    },
  ],
})
export class AppModule {}
