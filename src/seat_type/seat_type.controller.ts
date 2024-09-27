import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SeatTypeService } from './seat_type.service';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("SeatType")
@Controller("seat-type")
export class SeatTypeController {
  constructor(private readonly seatTypeService: SeatTypeService) {}

  @Post("create")
  async createSeatType(
    @Body() createSeatTypeDto: CreateSeatTypeDto
  ) {
    return this.seatTypeService.createSeatType(
      createSeatTypeDto
    );
  }

  @Get('all')
  async getAllSeatTypes() {
    return this.seatTypeService.getAllSeatTypes();
  }


  @Get(':id')
  async getSeatTypeById(@Param('id') id: number) {
    return this.seatTypeService.getSeatTypeById(id);
  }

  @Put('update/:id')
  async updateSeatTypeById(@Param('id') id: number, @Body() updateSeatTypeDto: UpdateSeatTypeDto){
    return this.seatTypeService.updateSeatType(id, updateSeatTypeDto);
  }

  @Delete('delete/:id')
  async deleteSeatType(@Param('id') id: number) {
    return this.seatTypeService.deleteSeatType(id);
  }
}
