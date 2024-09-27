import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Ticket } from "../../ticket/models/ticket.model";
import { Customer } from "../../customer/models/customer.model";
import { CartStatus } from "../../cart_status/models/cart_status.model";
import { Booking } from "../../booking/models/booking.model";

interface ICartCreationAttr{
  ticketId: number;
  customerId: number;
  createdAt: Date;
  finishedAt: Date;
  statusId: number;
}

@Table({ tableName: "cart" })
export class Cart extends Model<Cart, ICartCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Cart ID",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 1,
    description: "Ticket ID",
  })
  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
  })
  ticketId: number;

  @ApiProperty({
    example: 1,
    description: "Customer ID",
  })
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;

  @ApiProperty({
    example: new Date(),
    description: "Created At",
  })
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createdAt: Date;

  @ApiProperty({
    example: new Date(),
    description: "Finished At",
  })
  @Column({
    type: DataType.DATE,
  })
  finishedAt: Date;

  @ApiProperty({
    example: 1,
    description: "Status ID",
  })
  @ForeignKey(() => CartStatus)
  @Column({
    type: DataType.INTEGER,
  })
  statusId: number;

  @HasMany(() => Booking)
  bookings: Booking[];

  @BelongsTo(() => Ticket)
  ticket: Ticket;

  @BelongsTo(() => Customer)
  customer: Customer;

  @BelongsTo(() => CartStatus)
  status: CartStatus;
}
