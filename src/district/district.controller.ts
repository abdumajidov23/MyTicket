import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { District } from './models/district.model';
import { AdminGuard } from '../guards/admin.guard';

@ApiTags("District")
@Controller("district")
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @UseGuards(AdminGuard)
  @Post("create")
  @ApiOperation({ summary: "Create a new district" })
  @ApiResponse({
    status: 201,
    description: "The new district has been successfully created",
    type: District,
  })
  async create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.create(createDistrictDto);
  }

  @UseGuards(AdminGuard)
  @Get("all")
  @ApiOperation({ summary: "Get all districts" })
  @ApiResponse({
    status: 200,
    description: "All districts retrieved successfully",
    type: [District],
  })
  async findAll() {
    return this.districtService.findAll();
  }

  @UseGuards(AdminGuard)
  @Get(":id")
  @ApiOperation({ summary: "Get a district by ID" })
  @ApiResponse({
    status: 200,
    description: "District retrieved successfully",
    type: District,
  })
  async findOne(@Param("id") id: string) {
    return this.districtService.findOne(+id);
  }

  @UseGuards(AdminGuard)
  @Patch("update/:id")
  @ApiOperation({ summary: "Update a district by ID" })
  @ApiResponse({
    status: 200,
    description: "District updated successfully",
    type: District,
  })
  async update(
    @Param("id") id: string,
    @Body() updateDistrictDto: UpdateDistrictDto
  ) {
    return this.districtService.update(+id, updateDistrictDto);
  }

  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  @ApiOperation({ summary: "Delete a district by ID" })
  @ApiResponse({
    status: 200,
    description: "District deleted successfully",
  })
  async remove(@Param("id") id: string) {
    return this.districtService.remove(+id);
  }
}
