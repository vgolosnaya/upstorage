export class FileException {
    type: string;
    message: string;
    
    constructor({ type, message }: { type: string, message: string }) {
        this.type = type;
        this.message = message;
    }
}

export const config = {
    csvAllowedHeader: 'Total',
    allowedTypes: {
        csv: 'text/csv',
        png: 'image/png',
    },
    errors: {
        fileType: { type: 'fileType', message: 'Incorrect file extension' },
        csvSyntax: { type: 'csvSyntax', message: 'Incorrect csv syntax' },
        largeFileSize: { type: 'largeFileSize', message: 'File is too large to upload' },
        readFileError: { type: 'readFileError', message: 'File is not read' },
    }
};