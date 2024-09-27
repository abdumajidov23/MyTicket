import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateVenueDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  address: string;

  @IsString()
  location: string;

  @IsString()
  site: string;

  @IsString()
  phone: string;

  regionId: number;
  
  @IsNotEmpty()
  @IsArray()
  schema: string[];
}
