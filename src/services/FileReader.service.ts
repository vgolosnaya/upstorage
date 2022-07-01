import Papa from 'papaparse';
import { v4 } from 'uuid';
import { config, FileException } from 'config';

export type IFile = {
    fileName: string;
    data: any;
    type: string;
    timestamp: number;
    id: string;
}

class FileReaderService {
    instance: FileReader;
    csvAllowedHeader: string;
    
    constructor(csvAllowedHeader: string) {
        this.instance = new FileReader();
        this.csvAllowedHeader = csvAllowedHeader;
    }
    
    createFile(fileName: string, type: string, data: any): IFile {
        return { fileName, data, type, timestamp: Date.now(), id: v4() };
    }
    
    readFile(file: File): Promise<IFile> {
        switch(file.type) {
        case config.allowedTypes.csv:
            return this.readCsvFile(file);
        case config.allowedTypes.png:
            return this.readPngFile(file);
        default:
            throw new FileException(config.errors.fileType);
        }
    }
    
    readPngFile(file: File): Promise<IFile> {
        return new Promise((resolve, reject) => {
            this.instance.onload = (event: ProgressEvent<FileReader>) => {
                const dataUrl = event.target?.result as string;
                if(dataUrl) {
                    resolve(this.createFile(file.name, file.type, dataUrl));
                    return;
                }
                reject(new FileException(config.errors.readFileError));
            };
            this.instance.onerror = reject;
            this.instance.readAsDataURL(file);
        });
    }
    
    readCsvFile(file: File): Promise<IFile> {
        return new Promise((resolve, reject) => {
            Papa.parse(file, {
                header: true,
                complete: (results: any) => {
                    if(results.meta.fields.length > 1 || results.meta.fields[0] !== this.csvAllowedHeader) {
                        reject(new FileException(config.errors.csvSyntax));
                    }
                    resolve(this.createFile(file.name, file.type, results.data));
                },
            });
        });
    }
}

export default FileReaderService;