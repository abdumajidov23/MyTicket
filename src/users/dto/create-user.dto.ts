import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    example: "username",
    description: "User's name",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "useremail@gmail.com",
    description: "User's email",
  })
  @IsEmail()
  email: string;

  // @IsStrongPassword({ minLength: 6,minSymbols: 0 })
  @ApiProperty({
    example: "userpassword",
    description: "User's password,needs strong password(symbol,number,alphabet)",
  })
  password: string;

  @ApiProperty({
    example: "UserRole",
    description: "User's role",
  })
  @IsString()
  @IsNotEmpty()
  role_value: string;
}
