import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateEventDto {
  @ApiProperty({
    example: "Event Name",
    description: "Event Name",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "https://example.com/photo.jpg",
    description: "Event Photo",
  })
  @IsString()
  @IsNotEmpty()
  photo: string;

  @ApiProperty({
    example: "2022-01-01",
    description: "Event Start Date",
  })
  @IsDateString()
  start_date: Date;

  @ApiProperty({
    example: "2022-01-31",
    description: "Event Finish Date",
  })
  @IsDateString()
  finish_date: Date;

  @ApiProperty({
    example: "14:00",
    description: "Event Start Time",
  })
  @IsString()
  start_time: Date;

  @ApiProperty({
    example: "17:00",
    description: "Event Finish Time",
  })
  @IsString()
  finish_time: Date;

  @ApiProperty({
    example: "Event info",
    description: "Event Description",
  })
  @IsString()
  info: string;

  @ApiProperty({
    example: 1,
    description: "Event Type ID",
  })
  event_typeId: number;

  @ApiProperty({
    example: 1,
    description: "Human Category ID",
  })
  human_categoryId: number;

  @ApiProperty({
    example: 1,
    description: "Venue ID",
  })
  venueId: number;

  @ApiProperty({
    example: 1,
    description: "Language ID",
  })
  languageId: number;

  @ApiProperty({
    example: "2022-01-01",
    description: "Event Release Date",
  })
  @IsDateString()
  release_date: Date;
}
