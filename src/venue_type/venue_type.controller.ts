import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { VenueTypeService } from "./venue_type.service";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("VenueType")
@Controller("venue-type")
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) {}

  @Post("create")
  async createVenueType(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeService.createVenueType(createVenueTypeDto);
  }

  @Get("all")
  async getAllVenueTypes() {
    return this.venueTypeService.getAllVenueTypes();
  }

  @Get(":id")
  async getVenueTypeById(@Param("id") id: number) {
    return this.venueTypeService.getVenueTypeById(id);
  }

  @Put("update/:id")
  async updateVenueTypeById(
    @Param("id") id: number,
    @Body() updateVenueTypeDto: UpdateVenueTypeDto
  ) {
    return this.venueTypeService.updateVenueType(id, updateVenueTypeDto);
  }

  @Delete("delete/:id")
  async deleteVenueType(@Param("id") id: number) {
    return this.venueTypeService.deleteVenueType(id);
  }
}
