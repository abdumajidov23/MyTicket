import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { AdminGuard } from '../guards/admin.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Venues")
@Controller("venue")
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @UseGuards(AdminGuard)
  @Post("create")
  async create(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }

  @Get("all")
  async findAll() {
    return this.venueService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.venueService.findOne(+id);
  }

  @UseGuards(AdminGuard)
  @Patch("update/:id")
  async update(
    @Param("id") id: string,
    @Body() updateVenueDto: UpdateVenueDto
  ) {
    return this.venueService.update(+id, updateVenueDto);
  }

  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  async remove(@Param("id") id: string) {
    return this.venueService.remove(+id);
  }
}
