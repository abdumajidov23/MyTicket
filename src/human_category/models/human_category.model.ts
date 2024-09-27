import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table,  } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";

interface HumanCategoryAttr {
  name: string;
  start_age: number;
  finish_age: number;
  gender: number;
}

@Table({tableName: "human_category"})
export class HumanCategory extends Model<HumanCategory, HumanCategoryAttr> {
  @ApiProperty({
    example: 1,
    description: "ID",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "ID",
  })
  id: number;

  @ApiProperty({
    example: "儿��",
    description: "名称",
  })
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  name: string;

  @ApiProperty({
    example: 18,
    description: "start age",
  })
  @Column({
    type: DataType.SMALLINT,
    comment: "开始年��",
  })
  start_age: number;

  @ApiProperty({
    example: 60,
    description: "finish age",
  })
  @Column({
    type: DataType.SMALLINT,
    comment: "结束年��",
  })
  finish_age: number;

  @ApiProperty({
    example: 1,
    description: "gender",
  })
  @Column({
    type: DataType.SMALLINT,
    comment: "性别：1-男性，2-女性",
  })
  gender: number;

  @HasMany(()=>Event)
  events: Event[];
}
