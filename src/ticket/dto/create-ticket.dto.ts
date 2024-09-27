import { IsNumber, IsString } from "class-validator";

export class CreateTicketDto {
  eventId: number;
  seatId: number;

  @IsNumber()
  price: number;

  @IsNumber()
  service_fee: number;

  @IsNumber()
  statusId: number;

  @IsString()
  ticket_type: string;
}
