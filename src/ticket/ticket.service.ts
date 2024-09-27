import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Ticket } from './models/ticket.model';
import { TicketStatus } from 'src/ticket_status/models/ticket_status.model';
// import { TicketStatus } from 'src/ticket_status/models/ticket_status.model';
// import { Seat } from 'src/seat/models/seat.model';

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket) private ticketModel: typeof Ticket){}
  create(createTicketDto: CreateTicketDto) {
    return this.ticketModel.create(createTicketDto);
  }

  findAll() {
    return this.ticketModel.findAll({include: {all: true}});
  }


  findOne(id: number) {
    return this.ticketModel.findOne({where: {id},include: {all: true}});
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    const ticket = await this.ticketModel.update( updateTicketDto, {where: {id},returning: true});
    return ticket[1][0];
  }

  remove(id: number) {
    return this.ticketModel.destroy({where: {id}});
  }
}
