import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";
import { District } from "../../district/models/district.model";
import { Region } from "../../region/models/region.model";
import { Country } from "../../country/models/country.model";

interface ICustomerAdressCreationAttr {
  customerId: number;
  name: string;
  countryId: number;
  regionId: number;
  districtId: number;
  street: string;
  house: string;
  flat: number;
  location: string;
  post_index: string;
  info: string;
}

@Table({ tableName: "customer_address", timestamps: false })
export class CustomerAddress extends Model<
  CustomerAddress,
  ICustomerAdressCreationAttr
> {
  @ApiProperty({
    example: 1,
    description: "Customer's unique id",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 1,
    description: "Customer address id",
  })
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;

  @ApiProperty({
    example: "John doe",
    description: "Customer's name",
  })
  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @ApiProperty({
    example: 1,
    description: "Customer's country id",
  })
  @ForeignKey(() => Country)
  @Column({
    type: DataType.INTEGER,
  })
  countryId: number;

  @ApiProperty({
    example: 1,
    description: "Customer's region id",
  })
  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  regionId: number;

  @ApiProperty({
    example: 1,
    description: "Customer's district id",
  })
  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
  })
  districtId: number;

  @ApiProperty({
    example: "Shovvozlar ko'chasi",
    description: "Customer's street address",
  })
  @Column({
    type: DataType.STRING(100),
  })
  street: string;

  @ApiProperty({
    example: "123",
    description: "Customer's house number",
  })
  @Column({
    type: DataType.STRING(100),
  })
  house: string;

  @ApiProperty({
    example: 12,
    description: "Customer's flat number",
  })
  @Column({
    type: DataType.INTEGER,
  })
  flat: number;

  @ApiProperty({
    example: "Toshkent",
    description: "Customer's location",
  })
  @Column({
    type: DataType.STRING(100),
  })
  location: string;

  @ApiProperty({
    example: "200000",
    description: "Customer's postal index",
  })
  @Column({
    type: DataType.STRING(10),
  })
  postIndex: string;

  @ApiProperty({
    example: "Jamiyat da o'sgan",
    description: "Customer's additional information",
  })
  @Column({
    type: DataType.TEXT,
  })
  info: string;

  @BelongsTo(() => Customer)
  customer: Customer;

  @BelongsTo(() => Region)
  region: Region;

  @BelongsTo(() => District)
  district: District;
}
