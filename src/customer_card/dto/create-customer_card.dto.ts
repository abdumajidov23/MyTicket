import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsBooleanString, IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerCardDto {
  @ApiProperty({
    example: 1,
    description: "The customer's ID",
  })
  customerId: number;

  @ApiProperty({
    example: "John Doe",
    description: "The customer's name",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "+989123456789",
    description: "The customer's phone number",
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: "1234",
    description: "The customer's card number",
  })
  @IsString()
  number: string;

  @ApiProperty({
    example: "2024",
    description: "The customer's card year",
  })
  @IsString()
  year: string;

  @ApiProperty({
    example: "12",
    description: "The customer's card month",
  })
  @IsString()
  month: string;

  @ApiProperty({
    example: true,
    description: "Is the card active",
  })
  @IsBooleanString()
  is_active: boolean;

  @ApiProperty({
    example: true,
    description: "Is the card the main card"
  })
  @IsBooleanString()
  is_main: boolean;
}
