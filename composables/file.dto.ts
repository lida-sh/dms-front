import { Expose } from "class-transformer";
import "reflect-metadata";
export class FileDto {
    @Expose()
    id: number;
    @Expose()
    fileName: string;
    @Expose()
    filePath:string;
}