import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDistrictDto {
  @ApiProperty({
    example: "WallHand",
    description: "District's name",
  })
  @IsString()
  @IsNotEmpty()
  name: string;


  @ApiProperty({
    example: 1,
    description: "Region's ID",
  })
  regionId: number;
}
