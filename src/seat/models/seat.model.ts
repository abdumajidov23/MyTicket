import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { SeatType } from "../../seat_type/models/seat_type.model";
import { Ticket } from "../../ticket/models/ticket.model";

interface SeatCreationAttr{
  sector: number;
  row_number: number;
  number: number;
  venueId: number;
  seat_typeId: number;
  location_in_schema: string;
}

@Table({ tableName: "seat", timestamps: false })
export class Seat extends Model<Seat, SeatCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "ID",
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: "القطعة",
  })
  sector: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: "الصف",
  })
  row_number: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: "الرقم",
  })
  number: number;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
    comment: "المكان التي تحتوي على القا��مة",
  })
  venueId: number;

  @ForeignKey(()=>SeatType)
  @Column({
    type: DataType.INTEGER,
    comment: "نوع القا�مة",
  })
  seat_typeId: number;

  @Column({
    type: DataType.STRING,
    comment: "موقع القا�مة في المكان التي تحتوي عليه",
  })
  location_in_schema: string;

  @BelongsTo(()=>Venue)
  venue: Venue;

  @BelongsTo(()=>SeatType)
  seat_type: SeatType;

  @HasMany(()=>Ticket)
  tickets: Ticket[];
}
