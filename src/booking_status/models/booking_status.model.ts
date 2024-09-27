import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Booking } from "../../booking/models/booking.model";

interface BookingStatusCreationAttr {
  name: string;
}

@Table({ tableName: "booking_status", timestamps: false })
export class BookingStatus extends Model<BookingStatus, BookingStatusCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Booking's status id(auto increment)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "ID",
  })
  id: number;

  @ApiProperty({
    example: "Pending",
    description: "Booking's status name",
  })
  @Column({
    type: DataType.STRING,
    comment: "Name",
  })
  name: string;

  @HasMany(()=>Booking)
  bookings: Booking[];
}
