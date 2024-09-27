
import { ForeignKey, Table, Model, Column, DataType, BelongsTo } from "sequelize-typescript";
import { Venue } from "src/venue/models/venue.model";
import { VenueType } from "src/venue_type/models/venue_type.model";

interface IVenueVenueTypeCreationAttr{
  venueId: number;
  venueTypeId: number;
}

@Table({tableName: "venue_venue_type", timestamps: false})
export class VenueVenueType extends Model<VenueVenueType,IVenueVenueTypeCreationAttr> {
  @ForeignKey(()=> Venue)
  @Column({type: DataType.INTEGER})
  venueId: number;

  @ForeignKey(()=> VenueType)
  @Column({type: DataType.INTEGER})
  venueTypeId: number;


  @BelongsTo(()=> Venue)
  venue: Venue;

  @BelongsTo(()=> VenueType)
  venueType: VenueType;

  

}
