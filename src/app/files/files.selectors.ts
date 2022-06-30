import { RootState } from '../store';
import FileReaderService, { IFile } from '../../services/FileReader.service';
import { formatRelative } from 'date-fns';

const formatDateTime = (file: IFile) => ({
    ...file,
    relativeDateTime: formatRelative(file.datetime, Date.now())
});
const formatCsv = (file: IFile & { relativeDateTime: string }) => {
    console.log(file);
    return {
        ...file,
        total: file.data.reduce((total:number, item: any) => total + Number(item.Total), 0)
    };
};
const filesSelectors = {
    getFiles: (state: RootState) => state.files,
    getImages: (state: RootState) => state.files.filter(({ type }) => type === FileReaderService.allowedTypes.png).map(formatDateTime),
    getCsv: (state: RootState) => state.files.filter(({ type }) => type === FileReaderService.allowedTypes.csv).map(formatDateTime).map(formatCsv),
    getRecent: (state: RootState) => state.files.slice(0,5).map(formatDateTime),
};

export default filesSelectors;