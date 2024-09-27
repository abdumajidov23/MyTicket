import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";
import { Region } from "../../region/models/region.model";


interface CountryCreationAttr {
  name: string;
}

@Table({ tableName: "country", timestamps: false })
export class Country extends Model<Country, CountryCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "ID",
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    comment: "名称",
  })
  name: string;

  @HasMany(() => CustomerAddress)
  addresses: CustomerAddress[];

  @HasMany(() => Region)
  regions: Region[];
}
