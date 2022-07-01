import FileReaderService, { IFile } from 'services/FileReader.service';
import { config } from 'config';
import { FileReaderMock } from '__tests/mocks/FileReaderMock';

type PapaparseResult = {
    meta: {
        fields: string[]
    },
    data: string,
}
const mockData = 'test_data';
const mockAllowedHeader = config.csvAllowedHeader;
const mockAllowedTypes = {
    csv: 'text/csv',
    png: 'image/png',
};

jest.mock('papaparse', () => ({
    parse: (testFile: string, options: { complete: (result: PapaparseResult) => IFile }) => {
        const results = {
            meta: {
                fields: [ mockAllowedHeader ],
            },
            data: mockData,
        };
        options.complete(results);
    }
}));

describe('FileReader Service:', () => {
    let fileReader: FileReaderService;
    const testFileData = {
        fileName: 'test_name',
        data: 'test_data',
        type: mockAllowedTypes.csv,
    };
    
    jest.spyOn(window, 'FileReader')
        .mockImplementation(() => new FileReaderMock(true, mockData));
    
    beforeAll(() => {
        fileReader = new FileReaderService(config.csvAllowedHeader);
    });
    
    test('Should create instance correctly', () => {
        expect(fileReader).toBeDefined();
        expect(fileReader).toBeInstanceOf(FileReaderService);
    });
    
    test('Should create file', () => {
        const testFile = fileReader.createFile(testFileData.fileName, testFileData.type, testFileData.data);
        expect(testFile.fileName).toEqual(testFileData.fileName);
        expect(testFile.type).toEqual(testFileData.type);
        expect(testFile.data).toEqual(testFileData.data);
        expect(typeof testFile.timestamp).toBe('number');
        expect(typeof testFile.id).toBe('string');
    });
    
    test('Should read png file', async() => {
        const file = new File([ testFileData.data ], testFileData.fileName, { type: mockAllowedTypes.png });
        const readedFile = await fileReader.readPngFile(file);
        expect(readedFile.fileName).toEqual(testFileData.fileName);
        expect(readedFile.type).toEqual(mockAllowedTypes.png);
        expect(readedFile.data).toEqual(mockData);
        expect(typeof readedFile.timestamp).toBe('number');
        expect(typeof readedFile.id).toBe('string');
    });
    
    test('Should read cvs file', async() => {
        const file = new File([ testFileData.data ], testFileData.fileName, { type: testFileData.type });
        const readedFile = await fileReader.readCsvFile(file);
        expect(readedFile.fileName).toEqual(testFileData.fileName);
        expect(readedFile.type).toEqual(testFileData.type);
        expect(readedFile.data).toEqual(mockData);
        expect(typeof readedFile.timestamp).toBe('number');
        expect(typeof readedFile.id).toBe('string');
    });
});