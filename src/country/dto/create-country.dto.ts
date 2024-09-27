import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCountryDto {
  @ApiProperty({
    example: "Egypt",
    description: "Country's name",
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
