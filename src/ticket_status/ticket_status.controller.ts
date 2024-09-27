import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketStatusService } from './ticket_status.service';
import { CreateTicketStatusDto } from './dto/create-ticket_status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket_status.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("TicketStatus")
@Controller('ticket-status')
export class TicketStatusController {
  constructor(private readonly ticketStatusService: TicketStatusService) {}

  @Post('create')
  create(@Body() createTicketStatusDto: CreateTicketStatusDto) {
    return this.ticketStatusService.create(createTicketStatusDto);
  }

  @Get('all')
  findAll() {
    return this.ticketStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketStatusService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateTicketStatusDto: UpdateTicketStatusDto) {
    return this.ticketStatusService.update(+id, updateTicketStatusDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.ticketStatusService.remove(+id);
  }
}
