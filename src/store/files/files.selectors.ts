import { RootState } from 'store';
import FileReaderService, { IFile } from 'services/FileReader.service';
import { formatRelative } from 'date-fns';

const formatTimestamp = (file: IFile) => ({
    ...file,
    relativeTimestamp: formatRelative(file.timestamp, Date.now())
});
const formatCsv = (file: IFile & { relativeTimestamp: string }) => {
    console.log(file);
    return {
        ...file,
        total: file.data.reduce((total: number, item: any) => total + Number(item.Total), 0)
    };
};
const filesSelectors = {
    getFiles: (state: RootState) => state.files,
    getImages: (state: RootState) => state.files
        .filter(({ type }) => type === FileReaderService.allowedTypes.png)
        .map(formatTimestamp),
    getCsv: (state: RootState) => state.files
        .filter(({ type }) => type === FileReaderService.allowedTypes.csv)
        .map(formatTimestamp).map(formatCsv),
    getRecent: (state: RootState) => state.files.slice(0, 5).map(formatTimestamp),
};

export default filesSelectors;