import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";

interface LanguageAttr {
  name: string;
}

@Table({ tableName: "language", timestamps:false })
export class Language extends Model<Language, LanguageAttr> {
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

  @HasMany(()=> Event)
  events: Event[];

}
