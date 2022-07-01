import React from 'react';
import FileReaderService from './services/FileReader.service';
import { config } from './config';

export const fileReader = new FileReaderService(config.csvAllowedHeader);
export const FileReaderContext = React.createContext(fileReader);

export default FileReaderContext;