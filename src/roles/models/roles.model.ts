import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserRoles } from "../../users/models/user-role.model";
import { User } from "../../users/models/user.model";

interface IRolesCreationAttr{
  value: string;
  description: string;
}

@Table({tableName: "roles", timestamps: false})
export class Roles extends Model<Roles,IRolesCreationAttr>{
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "Role id"
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    // unique: true,
    allowNull: false,
  })
  value: string;

  @Column({
    type: DataType.STRING(255),
  })
  description: string;

  @BelongsToMany(()=> User,()=> UserRoles)
  users: User[];

}
