import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerDto {
  @ApiProperty({
    example: "John",
    description: "Customer's first name",
  })
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({
    example: "Doe",
    description: "Customer's last name",
  })
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({
    example: "+1234567890",
    description: "Customer's phone number",
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: "qwerty123",
    description: "Customer's password",
  })
  @IsString()
  @IsNotEmpty()
  hashed_password: string;

  @ApiProperty({
    example: "john.doe@example.com",
    description: "Customer's email address",
  })
  @IsEmail()
  email: string;


  @ApiProperty({
    example: "2000-01-01",
    description: "Customer's birth date",
  })
  @IsDateString()
  birth_date: Date;


  @ApiProperty({
    example: "Male",
    description: "Customer's gender",
  })
  @IsString()
  gender: string;


  @ApiProperty({
    example: 1,
    description: "Customer's language ID",
  })
  languageId: number;


  @ApiProperty({
    example: "refresh_token_123",
    description: "Customer's hashed refresh token",
  })
  @IsString()
  hashed_refresh_token: string;
}
