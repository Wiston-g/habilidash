import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreateHabilityDto } from './dto/create-hability.dto';
import { UpdateHabilityDto } from './dto/update-hability.dto';
import { Hability } from './interfaces/hability.interface';

@Injectable()
export class HabilityService {
  constructor(
    @InjectModel('Hability') readonly habilityModel: Model<Hability>,
  ) {}

  async getHabilitiesNamesByIds(habilityId: string[]): Promise<string[]> {
    const habilities = await this.habilityModel.find({
      _id: { $in: habilityId },
    });
    return habilities.map((habilidad) => habilidad.name);
  }

  async create(createHabilityDto: CreateHabilityDto) {
    const newHability = new this.habilityModel(createHabilityDto);
    await newHability.save();
    return newHability;
  }

  async findAll(): Promise<Hability[]> {
    return await this.habilityModel.find();
  }

  async findOne(id: string): Promise<Hability> {
    return await this.habilityModel.findById(id);
  }

  async update(
    id: string,
    updateHabilityDto: UpdateHabilityDto,
  ): Promise<Hability> {
    return await this.habilityModel.findByIdAndUpdate(id, updateHabilityDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return await this.habilityModel.findByIdAndDelete(id);
  }
}
