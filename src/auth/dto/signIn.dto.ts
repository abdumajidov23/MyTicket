import { IsEmail, IsNotEmpty } from "class-validator";

export class SignInDto {
  @IsEmail()
  @IsNotEmpty()
  login: string;

  @IsNotEmpty()
  hashed_password: string;
}
