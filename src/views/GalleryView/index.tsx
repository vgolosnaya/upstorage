import React from 'react';
import { useAppSelector } from 'store/hooks';
import { Container, Card, CardMedia, CardContent, Typography } from '@mui/material';
import filesSelectors from 'store/files/files.selectors';
import './index.scss';
import LABELS from '../../labels';

const GalleryView = (): JSX.Element => {
    const images = useAppSelector(filesSelectors.getImages);
    
    return (
        <div className="gallery-container">
            {images.map((file) => (
                <Card key={file.id}>
                    <CardMedia
                        component="img"
                        image={file.data}
                        height="200"
                        alt={file.fileName}
                        sx={{ 'object-fit': 'scale-down' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body2" component="div">
                            {file.fileName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {LABELS.uploaded} {file.relativeTimestamp}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default GalleryView;
