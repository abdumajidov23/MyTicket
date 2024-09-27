import { ApiProperty } from "@nestjs/swagger";

export class CreateCartDto {
  @ApiProperty({
    example: 1,
    description: "The id of the ticket",
  })
  ticketId: number;

  @ApiProperty({
    example: 1,
    description: "The id of the customer",
  })
  customerId: number;

  @ApiProperty({
    example: new Date(),
    description: "created At",
  })
  createdAt: Date;

  @ApiProperty({
    example: new Date(),
    description: "finished At",
  })
  finishedAt: Date;

  @ApiProperty({
    example: 1,
    description: "The id of the status",
  })
  statusId: number;
}
