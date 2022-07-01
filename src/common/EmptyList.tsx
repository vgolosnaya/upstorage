import React from 'react';
import Typography from '@mui/material/Typography';
import LABELS from 'labels';

export const EmptyList = ()=>{
    return <Typography variant="overline">{LABELS.empty_list}</Typography>;
};

export default EmptyList;