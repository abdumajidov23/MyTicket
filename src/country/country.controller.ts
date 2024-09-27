import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { CountryService } from "./country.service";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Country } from "./models/country.model";
import { AdminGuard } from "../guards/admin.guard";

@ApiTags("Country")
@Controller("country")
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @UseGuards(AdminGuard)
  @ApiOperation({ summary: "Create a new country" })
  @ApiResponse({
    status: 201,
    description: "The new country has been successfully created",
    type: Country,
  })
  @Post("create")
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create(createCountryDto);
  }

  @ApiOperation({ summary: "View all countries" })
  @ApiResponse({
    status: 200,
    description: "list of all countries",
    type: [Country],
  })
  @UseGuards(AdminGuard)
  @Get("all")
  findAll() {
    return this.countryService.findAll();
  }

  @ApiOperation({ summary: "View one country by id" })
  @ApiResponse({
    status: 200,
    description: "view one country by id",
    type: Country,
  })
  @UseGuards(AdminGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.countryService.findOne(+id);
  }

  @ApiOperation({ summary: "Update the country by id" })
  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateCountryDto: UpdateCountryDto) {
    return this.countryService.update(+id, updateCountryDto);
  }

  @ApiOperation({ summary: "Delete the country by id" })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.countryService.remove(+id);
  }
}
