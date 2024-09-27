import { Injectable } from '@nestjs/common';
import { CreateBookingStatusDto } from './dto/create-booking_status.dto';
import { UpdateBookingStatusDto } from './dto/update-booking_status.dto';
import { BookingStatus } from './models/booking_status.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BookingStatusService {
  constructor(
    @InjectModel(BookingStatus) private booking_statusModel: typeof BookingStatus
  ) {}
  create(createBookingStatusDto: CreateBookingStatusDto) {
    return this.booking_statusModel.create(createBookingStatusDto)
  }

  findAll() {
    return this.booking_statusModel.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.booking_statusModel.findOne({where: {id}});
  }

  async update(id: number, updateBookingStatusDto: UpdateBookingStatusDto) {
    const bs = await this.booking_statusModel.update(updateBookingStatusDto,{where: {id},returning: true}) 
    return bs[1][0];
  }

  remove(id: number) {
    return this.booking_statusModel.destroy({where: {id}});
  }
}
