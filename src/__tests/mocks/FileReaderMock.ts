export class FileReaderMock {
    isSuccess: boolean;
    mockData: string;
    DONE = FileReader.DONE;
    EMPTY = FileReader.EMPTY;
    LOADING = FileReader.LOADING;
    readyState = 0;
    error: FileReader['error'] = null;
    result: FileReader['result'] = null;
    abort = jest.fn();
    addEventListener = jest.fn();
    dispatchEvent = jest.fn();
    onabort = jest.fn();
    onerror = jest.fn();
    onload = jest.fn();
    onloadend = jest.fn();
    onloadprogress = jest.fn();
    onloadstart = jest.fn();
    onprogress = jest.fn();
    readAsArrayBuffer = jest.fn();
    readAsBinaryString = jest.fn();
    readAsDataURL = (testData: Blob) => {
        this.isSuccess ? this.onload( { target: { result: this.mockData } }) : this.onerror(testData);
    };
    readAsText = jest.fn();
    removeEventListener = jest.fn();
    
    constructor(isSuccess: boolean, mockData: string) {
        this.isSuccess = isSuccess;
        this.mockData = mockData;
    }
}