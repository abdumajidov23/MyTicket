import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';

@Injectable()
export class CustomerService {
  constructor(@InjectModel(Customer) private customerModel:typeof Customer){}
  create(createCustomerDto: CreateCustomerDto) {
    return this.customerModel.create(createCustomerDto);
  }

  findAll() {
    return this.customerModel.findAll({include: {all:true}});;
  }

  findOne(id: number) {
    return this.customerModel.findOne({where: {id},include: {all:true}});
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const c = await this.customerModel.update(updateCustomerDto,{where: {id},returning: true})
    return c[1][0];
  }

  remove(id: number) {
    return this.customerModel.destroy({where: {id}});
  }
}
