// import { ArchitectureBaseDto, ArchitectureClientBaseDto } from "../architectures/architecture.dto";
import { FileDto,} from "../file.dto";
import { Expose, Type } from "class-transformer";
import { SubProcessTreeStructDto } from "../sub-processes/subProcess.dto";
import "reflect-metadata";
export class ProcessBaseDto {
  @Expose()
  id: number;
  @Expose()
  title: string;
  @Expose()
  code: string;
  @Expose()
  architecture_id: number;
}

export class ProcessDto extends ProcessBaseDto {
  @Expose()
  slug: string;
  @Expose()
  @Type(()=>FileDto)
  files: FileDto[];
  @Expose()
  status: number;
  @Expose()
  description: string;
  @Expose()
  created_at: string;
  // @Expose()
  // @Type(()=>ArchitectureBaseDto)
  // architecture: ArchitectureBaseDto
}
export class ProcessBaseClientDto {
  @Expose()
  title: string;
}
export class ProcessClientDto extends ProcessBaseClientDto {
  @Expose()
  type: string;
  @Expose()
  slug: string;
  @Expose()
  code: string;
  @Expose()
  created_at: string;
  // @Expose()
  // @Type(()=>ArchitectureClientBaseDto)
  // architecture: ArchitectureClientBaseDto
  @Expose()
  rowNumber?: number
}
export class ProcessDetailsClientDto extends ProcessClientDto {
  @Expose()
  @Type(()=>FileDto)
  files: FileDto[];
  @Expose()
  description: string;
}
export class ProcessDtoPagination {
  @Expose()
  @Type(()=>ProcessDto)
  processes: ProcessDto[];
  @Expose()
  links: LinksDto;
  @Expose()
  meta: MetaDto
  
}
export class ProcessClientDtoPagination {
  @Expose()
  @Type(()=>ProcessClientDto)
  processes: ProcessClientDto[];
  @Expose()
  links: LinksDto;
  @Expose()
  meta: MetaDto
  
}
export class LinksDto{
  @Expose()
  first:string;
  @Expose()
  last:string;
  @Expose()
  prev:string;
  @Expose()
  next:string;
}
export class MetaDto{
  @Expose()
  current_page:number;
  @Expose()
  last_page	: number;
  @Expose()
  path: string;
  @Expose()
  per_page: number;
  @Expose()
  total:number
}
export class ProcessTreeStructDto extends ProcessBaseDto{
  @Expose()
  slug: string;
  @Expose()
  @Type(() => SubProcessTreeStructDto)
  subProcesses: SubProcessTreeStructDto[]
}