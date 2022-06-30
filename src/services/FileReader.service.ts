import Papa from 'papaparse';

export type IFile = {
    fileName: string;
    data: any;
    type: string;
    datetime: number;
}

class FileReaderService {
    instance: FileReader;
    
    constructor() {
        this.instance = new FileReader();
    }
    
    get allowedTypes() {
        return {
            csv: 'text/csv',
            png: 'image/png',
        };
    }
    
    createFile(fileName: string, type: string, data: any): IFile{
        return {fileName, data, type, datetime: Date.now()};
    }
    
    readFile(file: File): Promise<IFile> {
        switch(file.type) {
        case this.allowedTypes.csv:
            return this.readCsvFile(file);
        case this.allowedTypes.png:
            return this.readPngFile(file);
        default:
            throw new Error('unknown file type');
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
                    if(results.meta.length > 1){
                        reject(new Error('unexpected csv file'));
                    }
                    resolve(this.createFile(file.name, file.type, results.data));
                },
            });
        });
    }
}

export default FileReaderService;