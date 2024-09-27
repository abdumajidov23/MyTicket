import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateEventTypeDto {
  @ApiProperty({
    example: "Concert",
    description: "Event type name",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 1,
    description: "Parent event type ID",
  })
  parent_event_typeId?: number;
}
