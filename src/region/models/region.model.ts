import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { District } from "../../district/models/district.model";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";
import { Country } from "../../country/models/country.model";
import { Venue } from "../../venue/models/venue.model";

interface RegionCreationAttr{
  name: string;
  countryId: number;
}

@Table({ tableName: "region", timestamps: false })
export class Region extends Model<Region, RegionCreationAttr> {
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

  @ForeignKey(() => Country)
  @Column({
    type: DataType.INTEGER,
    comment: "所属城市ID",
  })
  countryId: number;

  @BelongsTo(() => Country)
  country: Country;

  @HasMany(() => Venue)
  venues: Venue[];

  @HasMany(() => CustomerAddress)
  addresses: CustomerAddress[];

  @HasMany(() => District)
  districts: District[];
}