import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Region } from "../../region/models/region.model";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";
import { Venue } from "../../venue/models/venue.model";

interface DistrictCreationAttr {
  name: string;
  regionId: number;
}

@Table({ tableName: "district", timestamps: false })
export class District extends Model<District, DistrictCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "District unique ID"
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "ID",
  })
  id: number;

  @ApiProperty({
    example: "Wallen",
    description: "District name"
  })
  @Column({
    type: DataType.STRING(100),
    comment: "名称",
  })
  name: string;

  @ApiProperty({
    example: 1,
    description: "Region ID"
  })
  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
    comment: "所属城市ID",
  })
  regionId: number;

  @HasMany(() => Venue)
  venues: Venue[];

  @HasMany(() => CustomerAddress)
  addresses: CustomerAddress[];

  @BelongsTo(() => Region)
  region: Region;
}
