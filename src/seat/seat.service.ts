import { Injectable } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Seat } from './models/seat.model';
import { TicketStatus } from '../ticket_status/models/ticket_status.model';
import { Ticket } from '../ticket/models/ticket.model';

@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private seatModel: typeof Seat) {}
  async create(createSeatDto: CreateSeatDto) {
    return this.seatModel.create(createSeatDto);
  }


  async findAll() {
    return this.seatModel.findAll({ include: { all: true } });
  }

  async findSoldSeatsByEvent(eventId: number) {
    return this.seatModel.findAll({
      include: [
        {
          model: Ticket,
          where: {
            eventId, // Ma'lum bir event_id ga tegishli chiptalarni olish
            statusId: await this.getSoldStatusId(), // Sotilgan statusini tekshirish
          },
        },
      ],
    });
  }

  // Status jadvalidan "Sotilgan" holatini olish
  private async getSoldStatusId() {
    const soldStatus = await TicketStatus.findOne({ where: { name: "tolangan" } });
    return soldStatus.id;
  }

  async findOne(id: number) {
    return this.seatModel.findOne({ where: { id }, include: { all: true } });
  }

  async update(id: number, updateSeatDto: UpdateSeatDto) {
    const seat = await this.seatModel.update(updateSeatDto, {
      where: { id },
      returning: true,
    });
    return seat[1][0];
  }

  remove(id: number) {
    return this.seatModel.destroy({ where: { id } });
  }
}
