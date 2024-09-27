import { Injectable } from '@nestjs/common';
import { CreateCartStatusDto } from './dto/create-cart_status.dto';
import { UpdateCartStatusDto } from './dto/update-cart_status.dto';
import { CartStatus } from './models/cart_status.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CartStatusService {
  constructor(
    @InjectModel(CartStatus) private cart_statusModel: typeof CartStatus
  ) {}

  create(createCartStatusDto: CreateCartStatusDto) {
    return this.cart_statusModel.create(createCartStatusDto);
  }

  findAll() {
    return this.cart_statusModel.findAll({include: {all:true}});;
  }

  findOne(id: number) {
    return this.cart_statusModel.findOne({where: {id},include: {all:true}});
  }

  async update(id: number, updateCartStatusDto: UpdateCartStatusDto) {
    const cs = await this.cart_statusModel.update(updateCartStatusDto,{where: {id},returning: true})
    return cs[1][0];
  }

  remove(id: number) {
    return this.cart_statusModel.destroy({where: {id}});
  }
}
