import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/models/cart.model";

interface CartStatusCreationAttr {
  name: string;
}

@Table({ tableName: "cart_status", timestamps: false })
export class CartStatus extends Model<CartStatus, CartStatusCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "ID",
  })
  id: number;

  @Column({
    type: DataType.STRING,
    comment: "Name",
  })
  name: string;

  @HasMany(() => Cart)
  carts: Cart[];
}
