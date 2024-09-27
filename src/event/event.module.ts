import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './models/event.model';
import { SeatModule } from 'src/seat/seat.module';
import { FileModule } from 'src/file/file.module';

@Module({
  imports: [SequelizeModule.forFeature([Event]),SeatModule,FileModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
