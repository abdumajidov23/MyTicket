import { IsNumber, IsString } from "class-validator";

export class CreateSeatDto {
  @IsNumber()
  sector: number;

  @IsNumber()
  row_number: number;

  @IsNumber()
  number: number;

  venueId: number;
  seat_typeId: number;

  @IsString()
  location_in_schema: string;
}
