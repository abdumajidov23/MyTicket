import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCustomerAddressDto {
  @ApiProperty({
    example: 1,
    description: "Customer's ID",
  })
  customerId: number;

  @ApiProperty({
    example: "John Doe",
    description: "Customer's full name",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 1,
    description: "Country ID",
  })
  countryId: number;

  @ApiProperty({
    example: 1,
    description: "Region ID",
  })
  regionId: number;
  
  @ApiProperty({
    example: 1,
    description: "District ID",
  })
  districtId: number;

  @ApiProperty({
    example: "123 Main St",
    description: "Customer's street address",
  })
  @IsString()
  @IsNotEmpty()
  street: string;
  
  @ApiProperty({
    example: "Apt. 201",
    description: "Customer's house number",
  })
  @IsString()
  @IsNotEmpty()
  house: string;

  @ApiProperty({
    example: 12345,
    description: "Customer's flat number",
  })
  @IsNumber()
  flat: number;

  @ApiProperty({
    example: "12.2424,33.34324",
    description: "Customer's geographical coordinates",
  })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    example: "10000",
    description: "Customer's postal code",
  })
  @IsString()
  post_index: string;

  @ApiProperty({
    example: "Customer's additional info",
    description: "Customer's additional information",
  })
  @IsString()
  info: string;
}
