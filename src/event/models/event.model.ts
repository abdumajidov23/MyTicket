import { ApiOperation, ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { EventType } from "../../event_type/models/event_type.model";
import { Venue } from "../../venue/models/venue.model";
import { Language } from "../../language/models/language.model";
import { HumanCategory } from "../../human_category/models/human_category.model";
import { Ticket } from "../../ticket/models/ticket.model";

interface IEventCreationAttr {
  name: string;
  photo: string;
  start_date: Date;
  start_time: Date;
  finish_date: Date;
  finish_time: Date;
  info: string;
  event_typeId: number;
  human_categoryId: number;
  venueId: number;
  languageId: number;
  release_date: Date;
}

@Table({ tableName: "event" })
export class Event extends Model<Event, IEventCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Event's unique id(autoincrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "ID",
  })
  id: number;

  @ApiProperty({
    example: "Event name",
    description: "Event name",
  })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    example: "photo.jpg",
    description: "Event photo",
  })
  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @ApiProperty({
    example: "2022-01-01",
    description: "Event start date",
  })
  @Column({
    type: DataType.DATEONLY,
  })
  start_date: Date;

  @ApiProperty({
    example: "10:00:00",
    description: "Event start time",
  })
  @Column({
    type: DataType.TIME,
  })
  start_time: Date;

  @ApiProperty({
    example: "2022-01-01",
    description: "Event finish date",
  })
  @Column({
    type: DataType.DATEONLY,
  })
  finish_date: Date;

  @ApiProperty({
    example: "17:00:00",
    description: "Event finish time",
  })
  @Column({
    type: DataType.TIME,
  })
  finish_time: Date;

  @ApiProperty({
    example: "Event info",
    description: "Event description",
  })
  @Column({
    type: DataType.TEXT,
  })
  info: string;

  @ApiProperty({
    example: 1,
    description: "Event's type id",
  })
  @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER,
  })
  event_typeId: number;

  @ApiProperty({
    example: 1,
    description: "Event's human category id",
  })
  @ForeignKey(() => HumanCategory)
  @Column({
    type: DataType.INTEGER,
  })
  human_categoryId: number;

  @ApiProperty({
    example: 1,
    description: "Event's venue id",
  })
  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;

  @ApiProperty({
    example: 1,
    description: "Event's language id",
  })
  @ForeignKey(() => Language)
  @Column({
    type: DataType.INTEGER,
  })
  languageId: number;

  @ApiProperty({
    example: "2022-01-01",
    description: "Event release date",
  })
  @Column({
    type: DataType.DATEONLY,
  })
  release_date: Date;

  @HasMany(() => Ticket)
  tickets: Ticket[];

  @BelongsTo(() => EventType)
  eventType: EventType;

  @BelongsTo(() => HumanCategory)
  humanCategory: HumanCategory;

  @BelongsTo(() => Venue)
  venue: Venue;

  @BelongsTo(() => Language)
  language: Language;
}
