import { Module } from '@nestjs/common';
import { HabilityService } from './hability.service';
import { HabilityController } from './hability.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HabilitySchema } from './schemas/hability.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Hability',
        schema: HabilitySchema,
      },
    ]),
  ],
  controllers: [HabilityController],
  providers: [HabilityService],
})
export class HabilityModule {}
