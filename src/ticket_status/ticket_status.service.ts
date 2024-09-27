import { Injectable } from '@nestjs/common';
import { CreateTicketStatusDto } from './dto/create-ticket_status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket_status.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TicketStatus } from './models/ticket_status.model';

@Injectable()
export class TicketStatusService {
  constructor(@InjectModel(TicketStatus) private ticket_statusModel: typeof TicketStatus) {}

  create(createTicketStatusDto: CreateTicketStatusDto) {
    return this.ticket_statusModel.create(createTicketStatusDto);
  }

  findAll() {
    return this.ticket_statusModel.findAll({include: {all:true}});;
  }

  findOne(id: number) {
    return this.ticket_statusModel.findOne({where: {id},include: {all:true}});
  }

  async update(id: number, updateTicketStatusDto: UpdateTicketStatusDto) {
    const ticket_status = await this.ticket_statusModel.update(
      updateTicketStatusDto,
      { where: { id }, returning: true }
    );
    return ticket_status[1][0];
  }

  remove(id: number) {
    return this.ticket_statusModel.destroy({where: {id}});
  }
}
