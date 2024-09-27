import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";
import { Seat } from "../../seat/models/seat.model";
import { TicketStatus } from "../../ticket_status/models/ticket_status.model";
import { Cart } from "../../cart/models/cart.model";



interface ITicketCreationAttr{
  eventId: number;
  seatId: number;
  price: number;
  service_fee: number;
  statusId: number;
  ticket_type: string;
}

@Table({tableName: "ticket"})
export class Ticket extends Model<Ticket,ITicketCreationAttr>{
  @ForeignKey(()=> Event)
  @Column({
    type: DataType.INTEGER, 
  })
  eventId: number;

  @ForeignKey(()=> Seat)
  @Column({
    type: DataType.INTEGER,
  })
  seatId: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  price: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  service_fee: number;

  @ForeignKey(()=> TicketStatus)
  @Column({
    type: DataType.INTEGER,
  })
  statusId: number;

  @Column({
    type: DataType.STRING(255),
  })
  ticket_type: string;

  @BelongsTo(()=> Event)
  event: Event;

  @BelongsTo(()=> Seat)
  seat: Seat;

  @BelongsTo(()=> TicketStatus)
  status: TicketStatus;

  @HasMany(()=> Cart)
  carts: Cart[];
}
