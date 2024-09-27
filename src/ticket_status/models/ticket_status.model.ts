import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Ticket } from "../../ticket/models/ticket.model";

interface TicketStatusCreationAttr{
  name: string;
}

@Table({tableName: "ticket_status", timestamps: false})
export class TicketStatus extends Model<TicketStatus,TicketStatusCreationAttr>{
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "ID"
  })
  id: number;

  @Column({
    type: DataType.STRING,
    comment: "Name"
  })
  name: string;

  @HasMany(()=> Ticket)
  tickets: Ticket[];
}
