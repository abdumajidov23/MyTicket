import { ApiProperty } from "@nestjs/swagger";

export class CreateBookingDto {
  @ApiProperty({
    example: 1,
    description: "The id of the cart to create bookings"
  })
  cartId: number;

  @ApiProperty({
    example: new Date(),
    description: "The date and time when the booking was created"
  })
  createdAt: Date;

  @ApiProperty({
    example: new Date(),
    description: "The date and time when the booking was finished"
  })
  finishedAt: Date;

  @ApiProperty({
    example: 1,
    description: "The id of the payment method used in the booking"
  })
  payment_methodId: number;

  @ApiProperty({
    example: 1,
    description: "The id of the delivery method used in the booking"
  })
  delivery_methodId: number;

  @ApiProperty({
    example: 1,
    description: "The id of the discount coupon used in the booking"
  })
  discount_couponId: number;

  @ApiProperty({
    example: 1,
    description: "The id of the booking status in the booking"
  })
  statusId: number;
}
