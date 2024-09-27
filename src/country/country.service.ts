import { Injectable } from "@nestjs/common";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Country } from "./models/country.model";

@Injectable()
export class CountryService {
  constructor(@InjectModel(Country) private countryModel: typeof Country) {}
  async create(createCountryDto: CreateCountryDto) {
    return this.countryModel.create(createCountryDto);
  }

  async findAll() {
    return this.countryModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.countryModel.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    const country = await this.countryModel.update(updateCountryDto, {
      where: { id },
      returning: true,
    });
    return country[1][0];
  }

  async remove(id: number) {
    return this.countryModel.destroy({ where: { id } });
  }
}
