import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { ApiTags } from '@nestjs/swagger';
import { AdminGuard } from '../guards/admin.guard';

@ApiTags("Seat")
@Controller("seat")
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @UseGuards(AdminGuard)
  @Post("create")
  async create(@Body() createSeatDto: CreateSeatDto) {
    return this.seatService.create(createSeatDto);
  }

  @Get("all")
  async findAll() {
    return this.seatService.findAll();
  }

  @Get("sold/:eventId")
  async getSoldSeatsByEvent(@Param("eventId") eventId: number) {
    return this.seatService.findSoldSeatsByEvent(eventId);
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.seatService.findOne(+id);
  }

  @UseGuards(AdminGuard)
  @Patch("update/:id")
  async update(@Param("id") id: string, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.update(+id, updateSeatDto);
  }

  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  async remove(@Param("id") id: string) {
    return this.seatService.remove(+id);
  }
}
