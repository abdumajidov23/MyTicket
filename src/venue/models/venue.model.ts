import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model,Table } from "sequelize-typescript";
import { Region } from "../../region/models/region.model";
import { District } from "../../district/models/district.model";
import { VenuePhoto } from "../../venue_photo/models/venue_photo.model";
import { Seat } from "../../seat/models/seat.model";
import { VenueType } from "../../venue_type/models/venue_type.model";
import { VenueVenueType } from "../../venue_venue_type/models/venue_venue_type.model";
import { Event } from "../../event/models/event.model";

interface VenueCreationAttr{
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  regionId:number;
  schema: string[];
}

@Table({ tableName: "venue", timestamps: false })
export class Venue extends Model<Venue, VenueCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(255),
  })
  address: string;

  @Column({
    type: DataType.STRING(255),
  })
  location: string;

  @Column({
    type: DataType.STRING(255),
  })
  site: string;

  @Column({
    type: DataType.STRING(15),
    unique: true,
  })
  phone: string;

  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  regionId: number;

  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
  })
  districtId: number;

  @BelongsTo(() => Region)
  region: Region;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    comment: "是否特色场��",
  })
  schema: string[];

  @HasMany(() => VenuePhoto)
  venue_photos: VenuePhoto[];

  @HasMany(() => Seat)
  seats: Seat[];

  @BelongsTo(() => District)
  district: District;


  @BelongsToMany(() => VenueType,()=> VenueVenueType)
  venueTypes: VenueType[];

  @HasMany(() => Event)
  events: Event[];
}
