/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CreateHabilityDto } from './dto/create-hability.dto';
import { UpdateHabilityDto } from './dto/update-hability.dto';
import { Hability } from './interfaces/hability.interface';
export declare class HabilityService {
    readonly habilityModel: Model<Hability>;
    constructor(habilityModel: Model<Hability>);
    getHabilitiesNamesByIds(habilityId: string[]): Promise<string[]>;
    create(createHabilityDto: CreateHabilityDto): Promise<import("mongoose").Document<unknown, {}, Hability> & Hability & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Hability[]>;
    findOne(id: string): Promise<Hability>;
    update(id: string, updateHabilityDto: UpdateHabilityDto): Promise<Hability>;
    remove(id: string): Promise<any>;
}
