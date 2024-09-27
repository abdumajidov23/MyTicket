import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { HumanCategoryService } from "./human_category.service";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { HumanCategory } from "./models/human_category.model";

@ApiTags("HumanCategory")
@Controller("human-category")
export class HumanCategoryController {
  constructor(private readonly humanCategoryService: HumanCategoryService) {}

  @Post('create')
  @ApiOperation({summary: "Create a new human category"})
  @ApiResponse({
    status: 201,
    description: "A new human category has been successfully created",
    type: HumanCategory,
  })
  async createHumanCategory(@Body() createHumanCategoryDto: CreateHumanCategoryDto){
    return this.humanCategoryService.createHumanCategory(createHumanCategoryDto)
  }

  @Get('all')
  @ApiOperation({summary: "Get all human categories"})
  @ApiResponse({
    status: 200,
    description: "List of all human categories",
    type: [HumanCategory],
  })
  async getAllHumanCategories(){
    return this.humanCategoryService.getAllHumanCategories()
  }

  @Get('search')
  @ApiOperation({summary: "Get a human category by name"})
  @ApiResponse({
    status: 200,
    description: "A human category by name",
    type: HumanCategory,
  })
  async getHumanCategoryByName(@Query('name') name: string){
    return this.humanCategoryService.getHumanCategoryByName(name)
  }

  @Get(':id')
  @ApiOperation({summary: "Get a human category by id"})
  @ApiResponse({
    status: 200,
    description: "Got human category by id",
    type: HumanCategory,
  })
  async getHumanCategoryById(@Param('id') id: number){
    return this.humanCategoryService.getHumanCategoryById(id)
  }


  @Put('update/:id')
  @ApiOperation({summary: "Update a human category by id"})
  @ApiResponse({
    status: 200,
    description: "Updated human category by id",
    type: HumanCategory,
  })
  async updateHumanCategory(@Param('id') id: number, @Body() updateHumanCategoryDto: UpdateHumanCategoryDto){
    return this.humanCategoryService.updateHumanCategory(id, updateHumanCategoryDto)
  }

  @Delete('delete/:id')
  @ApiOperation({summary: "Delete a human category by id"})
  @ApiResponse({
    status: 200,
    description: "Deleted human category by id",
  })
  async deleteHumanCategory(@Param('id') id: number){
    return this.humanCategoryService.deleteHumanCategory(id)
  }
}
