import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./user.model";
import { Roles } from "../../roles/models/roles.model";

interface IUserRoleCreationAttr{
  userId: number;
  roleId: number;
}

@Table({tableName: "user_roles"})
export class UserRoles extends Model<UserRoles, IUserRoleCreationAttr>{
  @ForeignKey(()=> User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @ForeignKey(()=> Roles)
  @Column({
    type: DataType.INTEGER,
  })
  roleId: number;

  @BelongsTo(()=> User)
  user: User;

  @BelongsTo(()=> Roles)
  role: Roles;
}
