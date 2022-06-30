import Papa from 'papaparse';
import { v4 } from 'uuid';

export type IFile = {
    fileName: string;
    data: any;
    type: string;
    timestamp: number;
    id: string;
}

class FileReaderService {
    instance: FileReader;
    
    constructor() {
        this.instance = new FileReader();
    }
    
    static get allowedTypes() {
        return {
            csv: 'text/csv',
            png: 'image/png',
        };
    }
    
    createFile(fileName: string, type: string, data: any): IFile {
        return { fileName, data, type, timestamp: Date.now(), id: v4() };
    }
    
    readFile(file: File): Promise<IFile> {
        switch(file.type) {
        case FileReaderService.allowedTypes.csv:
            return this.readCsvFile(file);
        case FileReaderService.allowedTypes.png:
            return this.readPngFile(file);
        default:
            throw new Error('unknown files type');
        }
    }
    
    readPngFile(file: File): Promise<IFile> {
        return new Promise((resolve, reject) => {
            this.instance.onload = (event: ProgressEvent<FileReader>) => {
                const dataUrl = event.target?.result as string;
                if(dataUrl) {
                    resolve(this.createFile(file.name, file.type, dataUrl));
                }
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
                    if(results.meta.fields.length > 1 || results.meta.fields[0] !=='Total') {
                        reject(new Error('unexpected csv files'));
                    }
                    resolve(this.createFile(file.name, file.type, results.data));
                },
            });
        });
    }
}

export default FileReaderService;