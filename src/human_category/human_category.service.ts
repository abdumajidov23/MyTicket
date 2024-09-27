import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { HumanCategory } from "./models/human_category.model";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(HumanCategory) private humanCategoryModel: typeof HumanCategory
  ) {}

  async createHumanCategory(
    createHumanCategoryDto: CreateHumanCategoryDto
  ): Promise<HumanCategory> {
    const human_category = await this.humanCategoryModel.create(
      createHumanCategoryDto
    );
    return human_category;
  }

  async getAllHumanCategories(): Promise<HumanCategory[]> {
    return this.humanCategoryModel.findAll();
  }

  async getHumanCategoryById(id: number): Promise<HumanCategory> {
    return this.humanCategoryModel.findByPk(id);
  }

  async getHumanCategoryByName(name: string): Promise<HumanCategory> {
    return this.humanCategoryModel.findOne({where: {name}});
  }

  async updateHumanCategory(
    id: number,
    updateHumanCategoryDto: UpdateHumanCategoryDto
  ): Promise<HumanCategory> {
    // const human_category = await this.humanCategoryModel.update(updateHumanCategoryDto, {where:{id},returning:true})
      // return human_category[1][0]       

    const human_category = await this.humanCategoryModel.findByPk(id);
    if (!human_category) {
      throw new Error("Human Category not found");
    }
    await human_category.update(updateHumanCategoryDto);
    return human_category;
  }

  async deleteHumanCategory(id: number): Promise<void> {
    const human_category = await this.humanCategoryModel.findByPk(id);
    if (!human_category) {
      throw new Error("Human Category not found");
    }
    await human_category.destroy();
  }
}
