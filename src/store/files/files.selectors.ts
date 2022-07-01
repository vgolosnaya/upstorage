import { RootState } from 'store';
import { IFile } from 'services/FileReader.service';
import { formatRelative } from 'date-fns';
import { config } from 'config';

const formatTimestamp = (file: IFile) => ({
    ...file,
    relativeTimestamp: formatRelative(file.timestamp, Date.now())
});
const formatCsv = (file: IFile & { relativeTimestamp: string }) => {
    return {
        ...file,
        total: file.data.reduce((total: number, item: { Total: string }) => total + Number(item.Total), 0)
    };
};
const filesSelectors = {
    getFiles: (state: RootState) => state.files,
    getImages: (state: RootState) => state.files
        .filter(({ type }) => type === config.allowedTypes.png)
        .map(formatTimestamp),
    getCsv: (state: RootState) => state.files
        .filter(({ type }) => type === config.allowedTypes.csv)
        .map(formatTimestamp).map(formatCsv),
    getRecent: (state: RootState) => state.files.slice(0, 5).map(formatTimestamp),
};

export default filesSelectors;