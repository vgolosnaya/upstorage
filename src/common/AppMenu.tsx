import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { routes } from 'Router';
import './AppMenu.css';
import { Button } from '@mui/material';

function AppMenu(): JSX.Element {
    return (
        <AppBar position="static">
            <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1 }}>
                    {routes.map(({
                        path,
                        isNavRoute,
                        label,
                    }) => {
                        if(isNavRoute) {
                            return (
                                <Button key={path} href={path} sx={{ color: 'white' }}>{label}</Button>
                            );
                        }
                    })}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default AppMenu;
