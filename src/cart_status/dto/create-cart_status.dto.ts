import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCartStatusDto {
  @ApiProperty({
    example: "Pending",
    description: "Cart status name",
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
