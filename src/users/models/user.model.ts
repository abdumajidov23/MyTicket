import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserRoles } from "./user-role.model";
import { ApiProperty } from "@nestjs/swagger";
import { Roles } from "../../roles/models/roles.model";


interface IUserCreationAttr{
  name: string;
  email: string;
  password: string;
  role_value: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, IUserCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "User's unique id(autoincrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "ID",
  })
  id: number;

  @ApiProperty({
    example: "user1",
    description: "User's name ",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: "user@gmail.com",
    description: "User's email ",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @ApiProperty({
    example: "userpassword",
    description: "User's password ",
  })
  @Column({
    type: DataType.STRING,
  })
  password: string;

  @ApiProperty({
    example: "userrole",
    description: "User's role ",
  })
  @Column({
    type: DataType.STRING,
  })
  role_value: string;

  @ApiProperty({
    example: "false",
    description: "User's activation(active,not active - boolean(true,false),defaultValue-false) ",
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @BelongsToMany(() => Roles, () => UserRoles)
  roles: Roles[];
}
