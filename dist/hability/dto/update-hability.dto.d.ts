import { CreateHabilityDto } from './create-hability.dto';
declare const UpdateHabilityDto_base: import("@nestjs/common").Type<Partial<CreateHabilityDto>>;
export declare class UpdateHabilityDto extends UpdateHabilityDto_base {
    readonly name: string;
    readonly usersArray?: string[];
    readonly creaedAt?: Date;
}
export {};
