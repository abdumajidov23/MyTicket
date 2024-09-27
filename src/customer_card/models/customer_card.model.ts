import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";

interface ICustomerCardCreationAttr{
  customerId: number;
  name: string;
  phone: string;
  number: string;
  year: string;
  month: string;
  is_active: boolean;
  is_main: boolean;
}


@Table({tableName: "customer_card"})
export class CustomerCard extends Model<CustomerCard,ICustomerCardCreationAttr>{
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
    description: "Customer's id",
  })
  @ForeignKey(()=> Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;

  @ApiProperty({
    example: "Card name",
    description: "Card's name",
  })
  @Column({
    type: DataType.STRING(255),
  })
  name: string;

  @ApiProperty({
    example: "+998900077023",
    description: "Card's phone number",
  })
  @Column({
    type: DataType.STRING(255),
  })
  phone: string;

  @ApiProperty({
    example: "8600 9909 99044 3443",
    description: "Card's number",
  })
  @Column({
    type: DataType.STRING(255),
  })
  number: string;

  @ApiProperty({
    example: "2025",
    description: "Card's expiration year",
  })
  @Column({
    type: DataType.STRING(255),
  })
  year: string;

  @ApiProperty({
    example: "12",
    description: "Card's expiration month",
  })
  @Column({
    type: DataType.STRING(255),
  })
  month: string;

  @ApiProperty({
    example: true,
    description: "Is card active",
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @ApiProperty({
    example: true,
    description: "Is card main",
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_main: boolean;


  @BelongsTo(()=> Customer)
  customer: Customer;
}
