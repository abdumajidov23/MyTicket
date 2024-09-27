import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
  @ApiProperty({
    example: "ADMIN",
    description: "The role of the user or admin",
  })
  @IsString({ message: "String bo'lishi kerak!" })
  @IsNotEmpty()
  value: string;

  @ApiProperty({
    example: "Role's description",
    description: "The description of the role",
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
