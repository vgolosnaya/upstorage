import React from 'react';
import { useAppSelector } from 'store/hooks';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import filesSelectors from 'store/files/files.selectors';
import EmptyList from 'common/EmptyList';
import LABELS from 'labels';
import './index.scss';

const GalleryView = (): JSX.Element => {
    const images = useAppSelector(filesSelectors.getImages);
    const renderGallery = () => {
        if(!images.length) {
            return <EmptyList/>;
        }
        return images.map((file) => (
            <Card key={file.id}>
                <CardMedia
                    component="img"
                    image={file.data}
                    height="200"
                    alt={file.fileName}
                    sx={{ 'objectFit': 'scale-down' }}
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
        ));
    };
    
    return (
        <div className="gallery-container">
            {renderGallery()}
        </div>
    );
};

export default GalleryView;
