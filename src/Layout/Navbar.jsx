import { AppBar, Box, Container, MenuItem, Menu, Toolbar, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { icons } from '../Assets/Icons/Index';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../Styles/Index.css'
import { images } from '../Assets/Images/Index';

const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <AppBar sx={{bgcolor: '#1A1A1A',backgroundImage:`url(${icons.Group})` ,height: { xs: '70px', sm: '77px', lg: '90px' , position:'relative'} }} >
                <Container maxWidth='xl' sx={{mt:'5', m: 'auto' }}>
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
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, placeItems: 'center' }}>
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
                            <Button
                                id="demo-positioned-button"
                                aria-controls={open ? 'demo-positioned-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                sx={{ ml: 'auto', mr: '0' }}
                            >
                                <MenuIcon sx={{color:'white',}} fontSize='large'
                                />
                            </Button>
                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                sx={{ display: { xs: 'block', md: 'none' }}}
                            >
                                <MenuItem component={Link} sx={{color:'white'}} to="/ " onClick={handleClose}>Home</MenuItem>
                                <MenuItem component={Link} sx={{color:'white'}} to="/aboutus " onClick={handleClose}>About us</MenuItem>
                                <MenuItem component={Link} sx={{color:'white'}} to="/properties " onClick={handleClose}>Properties</MenuItem>
                                <MenuItem component={Link} sx={{color:'white'}} to="/services " onClick={handleClose}>Services</MenuItem>
                                <MenuItem component={Link} sx={{color:'white'}} to="/contactus " onClick={handleClose}>Contact us</MenuItem>
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, fontSize: 15, display: { xs: 'none', md: 'flex', alignItems: 'center',justifyContent:'center', margin: 'auto' } }}>
                            <Button
                                component={Link} to="/"
                                sx={{ my: 2, color: 'white', display: 'flex', fontFamily: 'Urbanist' }}
                            >
                                Home
                            </Button>
                            <Button 
                                component={Link} to="/aboutus"
                                sx={{ my: 2, color: 'white', display: 'flex', fontFamily: 'Urbanist' }}
                            >
                                About us
                            </Button>
                            <Button
                                component={Link} to="/properties"
                                sx={{ my: 2, color: 'white', display: 'flex', fontFamily: 'Urbanist' }}
                            >
                                Properties
                            </Button>
                            <Button
                                component={Link} to="/services"
                                sx={{ my: 2, color: 'white', display: 'flex', fontFamily: 'Urbanist' }}
                            >
                                Services
                            </Button>
                        </Box>
                        <Button
                            component={Link} to="/contactus"
                            sx={{ my: 2, color: 'white', display: 'flex', fontFamily: 'Urbanist', display: { xs: 'none', md: 'block' } }}
                        >
                            Contact us
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar >
        </>
    )
}

export default Navbar