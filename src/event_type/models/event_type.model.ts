import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";

interface IEventTypeCreationAttr{
  name: string;
  parent_event_typeId: number;
}

@Table({tableName: "event_type"})
export class EventType extends Model<EventType,IEventTypeCreationAttr>{
  @ApiProperty({
    example: 1,
    description: "Event type's unique id(autoincrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "ID"
  })
  id: number;

  @ApiProperty({
    example: "مروع ��علامي",
    description: "Event type's name",
  })
  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @ApiProperty({
    example: 1,
    description: "Event type's parent id(if it's a sub event type)",
  })
  @ForeignKey(()=>EventType)
  @Column({
    type: DataType.INTEGER,
  })
  parent_event_typeId: number;

  @BelongsTo(()=>EventType)
  parentEventType: EventType;

  @HasMany(()=>Event)
  events: Event[];
}
