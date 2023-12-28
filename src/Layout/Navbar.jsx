import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { icons } from '../Assets/Icons/Index';
import { Menu } from '@mui/icons-material';

const Navbar = () => {
    return (
        <>
            <AppBar sx={{ bgcolor: '#1A1A1A', height: { xs: '68px', md: '77px', lg: '99px' } }} >
                <Container maxWidth='xl' sx={{ m: 'auto' }}>
                    <Toolbar sx={{ m: 'auto' }}  >
                        <Box sx={{
                            "& img": {
                                display: { xs: 'none', sm: 'block' },
                                marginRight: '4px'
                            }
                        }}>
                            <img src={icons.Logo} />
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', sm: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}>
                            Estatein
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' }, placeItems: 'center' }}>
                            <Box sx={{
                                "& img": {
                                    display: { xs: 'block', sm: 'none' },
                                    mr: 1
                                }
                            }}>
                                <img src={icons.Logo} />
                            </Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    display: { xs: 'flex', sm: 'none' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}>
                                Estatein
                            </Typography>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                // onClick={handleOpenNavMenu}
                                color="inherit"
                                sx={{ mr: 0, ml: 'auto' }}
                            >
                                <Menu />
                            </IconButton>
                        </Box>
                    </Toolbar>

                </Container>
            </AppBar>
        </>
    )
}

export default Navbar