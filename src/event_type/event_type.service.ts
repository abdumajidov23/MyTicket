import { Injectable } from '@nestjs/common';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { EventType } from './models/event_type.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class EventTypeService {
  constructor(@InjectModel(EventType) private eventTypeModel:typeof EventType){}
  create(createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeModel.create(createEventTypeDto);
  }

  findAll() {
    return this.eventTypeModel.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.eventTypeModel.findOne({where:{id},include: {all:true}});
  }

  update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    return `This action updates a #${id} eventType`;
  }

  remove(id: number) {
    return this.eventTypeModel.destroy({where: {id}});
  }
}
