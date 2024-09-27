import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './models/event.model';
import { SeatService } from 'src/seat/seat.service';
import { FileService } from 'src/file/file.service';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event) private eventModel: typeof Event,
    private readonly seatService: SeatService,
    private readonly fileService: FileService
  ) {}
  async create(createEventDto: CreateEventDto, photo: any) {
    const fileName = await this.fileService.saveFile(photo);

    return this.eventModel.create({...createEventDto,photo: fileName});
  }

  findAll() {
    return this.eventModel.findAll({ include: { all: true } });
  }

  async getSoldSeats(id: number) {
    const seats = await this.seatService.findSoldSeatsByEvent(id);
    return seats[0];
  }

  findOne(id: number) {
    return this.eventModel.findOne({ where: { id }, include: { all: true } });
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const event = await this.eventModel.update(updateEventDto, {
      where: { id },
      returning: true,
    });
    return event[1][0];
  }

  remove(id: number) {
    return this.eventModel.destroy({ where: { id } });
  }
}
