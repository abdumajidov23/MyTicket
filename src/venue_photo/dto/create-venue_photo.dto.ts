import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateVenuePhotoDto {
  venueId: number;

  @IsString()
  @IsOptional()
  url: string;
}
