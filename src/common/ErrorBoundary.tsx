import React from 'react';
import LABELS from '../labels';
import { Typography } from '@mui/material';

class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }
    
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    
    render() {
        if(this.state.hasError) {
            return <Typography variant="h4" component="div" gutterBottom>
                {LABELS.something_went_wrong}
            </Typography>;
        }
        
        return this.props.children;
    }
}

export default ErrorBoundary;