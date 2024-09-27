import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/models/cart.model";
import { BookingStatus } from "../../booking_status/models/booking_status.model";

interface IBookingCreationAttr{
  cartId: number;
  createdAt: Date;
  finishedAt: Date;
  payment_methodId: number;
  delivery_methodId: number;
  discount_couponId: number;
  statusId: number;
}

@Table({tableName: "booking"})
export class Booking extends Model<Booking,IBookingCreationAttr>{
  @ApiProperty({
    example: 1,
    description: "Booking's unique id(autoincrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 1,
    description: "Cart's id",
  })
  @ForeignKey(()=>Cart)
  @Column({
    type: DataType.INTEGER,
  })
  cartId: number;


  @ApiProperty({
    example: new Date(),
    description: "Created at",
  })
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createdAt: Date;


  @ApiProperty({
    example: new Date(),
    description: "Finished at",
  })
  @Column({
    type: DataType.DATE,
  })
  finishedAt: Date;


  @ApiProperty({
    example: 1,
    description: "Payment method id",
  })
  @Column({
    type: DataType.INTEGER,
  })
  payment_methodId: number;


  @ApiProperty({
    example: 1,
    description: "Delivery method id",
  })
  @Column({
    type: DataType.INTEGER,
  })
  delivery_methodId: number;


  @ApiProperty({
    example: 1,
    description: "Discount coupon id",
  })
  @Column({
    type: DataType.INTEGER,
  })
  discount_couponId: number;


  @ApiProperty({
    example: 1,
    description: "Status id",
  })
  @ForeignKey(()=>BookingStatus)
  @Column({
    type: DataType.INTEGER,
  })
  statusId: number;

  @BelongsTo(()=>Cart)
  cart: Cart;

  @BelongsTo(()=>BookingStatus)
  status: BookingStatus;
}
