import { IsNotEmpty, IsString } from "class-validator";


export class CreateVenueTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}