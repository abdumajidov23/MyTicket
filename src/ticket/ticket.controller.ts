import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { AdminGuard } from '../guards/admin.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Ticket")
@Controller("ticket")
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @UseGuards(AdminGuard)
  @Post("create")
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @Get("all")
  findAll() {
    return this.ticketService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.ticketService.findOne(+id);
  }

  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(+id, updateTicketDto);
  }

  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.ticketService.remove(+id);
  }
}
