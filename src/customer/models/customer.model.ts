import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Language } from "../../language/models/language.model";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";
import { CustomerCard } from "../../customer_card/models/customer_card.model";
import { Cart } from "../../cart/models/cart.model";


interface ICustomerCreationAttr{
  first_name: string;
  last_name: string;
  phone: string;
  hashed_password: string;
  email: string;
  birth_date: Date;
  gender: string;
  languageId: number;
  hashed_refresh_token: string;
}

@Table({ tableName: "customer" })
export class Customer extends Model<Customer, ICustomerCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Customer's unique id(autoincrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "John",
    description: "Customer's first name",
  })
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  first_name: string;

  @ApiProperty({
    example: "Doe",
    description: "Customer's last name",
  })
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  last_name: string;

  @ApiProperty({
    example: "1234567890",
    description: "Customer's phone number",
  })
  @Column({
    type: DataType.STRING(20),
  })
  phone: string;

  @ApiProperty({
    example: "hashed_password",
    description: "Customer's hashed password",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  hashed_password: string;

  @ApiProperty({
    example: "john.doe@example.com",
    description: "Customer's email",
  })
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
  })
  email: string;

  @ApiProperty({
    example: "1990-01-01",
    description: "Customer's birth date",
  })
  @Column({
    type: DataType.DATEONLY,
  })
  birth_date: Date;

  @ApiProperty({
    example: "male",
    description: "Customer's gender",
  })
  @Column({
    type: DataType.STRING(10),
  })
  gender: string;

  @ApiProperty({
    example: 1,
    description: "Customer's language id",
  })
  @ForeignKey(() => Language)
  @Column({
    type: DataType.INTEGER,
  })
  languageId: number;

  @ApiProperty({
    example: "hashed_refresh_token",
    description: "Customer's hashed refresh token",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  hashed_refresh_token: string;

  @BelongsTo(() => Language)
  language: Language;

  @HasMany(() => CustomerAddress)
  addresses: CustomerAddress[];

  @HasMany(() => CustomerCard)
  cards: CustomerCard[];

  @HasMany(() => Cart)
  carts: Cart[];
}
