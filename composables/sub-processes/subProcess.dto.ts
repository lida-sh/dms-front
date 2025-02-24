// import {
//   ArchitectureBaseDto,
//   ArchitectureClientBaseDto,
// } from "../architectures/architecture.dto";
import { FileDto } from "../file.dto";
import { Expose, Type } from "class-transformer";
import {
  ProcessBaseDto,
  ProcessBaseClientDto,
} from "~/composables/processes/process.dto";
import "reflect-metadata";
export class SubProcessBaseDto {
  @Expose()
  id: number;
  @Expose()
  title: string;
  @Expose()
  code: string;
  @Expose()
  architecture_id: number;
  @Expose()
  process_id: number;
}

export class SubProcessDto extends SubProcessBaseDto {
  @Expose()
  slug: string;
  @Expose()
  @Type(() => FileDto)
  files: FileDto[];
  @Expose()
  status: number;
  @Expose()
  description: string;
  @Expose()
  created_at: string;
  @Expose()
  // @Type(() => ArchitectureBaseDto)
  // architecture: ArchitectureBaseDto;
  @Expose()
  @Type(() => ProcessBaseDto)
  process: ProcessBaseDto;
}
export class SubProcessClientDto {
  @Expose()
  title: string;
  @Expose()
  slug: string;
  @Expose()
  code: string;
  @Expose()
  type: string;
  @Expose()
  created_at: string;
  @Expose()
  // @Type(() => ArchitectureClientBaseDto)
  // architecture: ArchitectureClientBaseDto;
  @Expose()
  @Type(() => ProcessBaseClientDto)
  process: ProcessBaseClientDto;
  @Expose()
  rowNumber?: number;
}
export class SubProcessDetailsClientDto extends SubProcessClientDto {
  @Expose()
  @Type(() => FileDto)
  files: FileDto[];
  @Expose()
  description: string;
}
export class SubProcessDtoPagination {
  @Expose()
  @Type(() => SubProcessDto)
  subProcesses: SubProcessDto[];
  @Expose()
  links: LinksDto;
  @Expose()
  meta: MetaDto;
}
export class SubProcessClientDtoPagination {
  @Expose()
  @Type(() => SubProcessClientDto)
  subProcesses: SubProcessClientDto[];
  @Expose()
  links: LinksDto;
  @Expose()
  meta: MetaDto;
}
export class LinksDto {
  @Expose()
  first: string;
  @Expose()
  last: string;
  @Expose()
  prev: string;
  @Expose()
  next: string;
}
export class MetaDto {
  @Expose()
  current_page: number;
  @Expose()
  last_page: number;
  @Expose()
  path: string;
  @Expose()
  per_page: number;
  @Expose()
  total: number;
}
export class SubProcessTreeStructDto extends SubProcessBaseDto {
  @Expose()
  slug: string;
}
