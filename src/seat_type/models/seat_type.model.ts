import { Column, DataType, HasMany, Model, Table,  } from "sequelize-typescript";
import { Seat } from "../../seat/models/seat.model";

interface SeatTypeAttr {
  name: string;
}

@Table({tableName: "seat_type"})
export class SeatType extends Model<SeatType, SeatTypeAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "ID",
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  name: string;

  @HasMany(()=>Seat)
  seats: Seat[];

}
