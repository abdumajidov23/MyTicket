import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateHumanCategoryDto {
  @ApiProperty({
    example: "chol",
    description: "Name of the human category",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 18,
    description: "Start age of the human category",
  })
  @IsNumber()
  start_age: number;

  @ApiProperty({
    example: 99,
    description: "Finish age of the human category",
  })
  @IsNumber()
  finish_age: number;

  @ApiProperty({
    example: 1,
    description: "Gender of the human category",
  })
  @IsNumber()
  gender: number;
}