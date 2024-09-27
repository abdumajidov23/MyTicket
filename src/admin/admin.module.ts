import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';

@Module({
  imports: [SequelizeModule.forFeature([Admin])],
  exports: [AdminService],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}