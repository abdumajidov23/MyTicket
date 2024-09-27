import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Language } from './models/language.model';

@Injectable()
export class LanguageService {
  constructor(@InjectModel(Language) private languageModel: typeof Language) {}
  create(createLanguageDto: CreateLanguageDto) {
    return this.languageModel.create(createLanguageDto);
  }

  findAll() {
    return this.languageModel.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.languageModel.findOne({where: {id},include: {all: true}});
  }

  async update(id: number, updateLanguageDto: UpdateLanguageDto) {
    const lang = await this.languageModel.update(updateLanguageDto,{where: {id},returning: true});
    return lang[1][0];
  }

  remove(id: number) {
    return this.languageModel.destroy({where: {id}});
  }
}
