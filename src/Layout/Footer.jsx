import { Box, Button, IconButton, Input, InputAdornment, List, ListItemButton, ListItemText, ListSubheader, Typography} from '@mui/material';
import { React } from 'react'
import { icons } from '../Assets/Icons/Index';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '../Assets/Icons/SendIcon';




const Footer = () => {


    return (
        <>
            <Box maxWidth='100%' sx={{ display: 'grid', placeContent: 'center', placeItems: 'center', justifyContent: 'center', bgcolor: '#141414' }}>
                <Box sx={{ width: '90%', display: {xs:'grid',sm:'flex'},backgroundImage:`url(${icons.FooterDesign})`, height: 'auto', alignItems: 'center', justifyItems: 'center' }}>
                    <Box sx={{ alignItems: 'stretch', display: 'grid', flexDirection: 'column', width: { xs: '90%', md: '75%' }, justifyContent: 'center', placeContent: 'center', alignContent: 'center', height: 'auto', paddingY: '60px' }}>
                        <Typography sx={{ color: 'white', fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', fontStyle: 'normal', fontSize: { xs: "25px", md: '35px' }, alignSelf: 'stretch' }}>
                            Start Your Real Estate Journey Today
                        </Typography>
                        <Typography sx={{ color: '#999', fontFamily: 'Urbanist', fontStyle: 'normal', fontSize: { xs: "14px", sm: '16px' }, fontWeight: '500', alignSelf: 'stretch' }}>
                            Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
                        </Typography>
                    </Box>
                    <Box sx={{ width: {xs:'90%',md:'25%'}, placeContent: 'center', display: 'flex' }}>
                        <Button className='btn-primary' variant='contained'  sx={{ p:2,minHeight:'40px',bgcolor: '#703BF7', display: 'flex', placeSelf: 'center', borderRadius: '8px', fontSize: '12px' }}>
                            Explore Properties
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ py: '60px', width: '90%', display: { md: 'flex', xs: 'grid' }, }}>
                    <Box sx={{ width: { xs: "90%", sm: 1 / 3 }}}>
                        <Box sx={{ display: 'flex', py: '20px'}}>
                            <Box sx={{
                                "& img": {
                                    display: 'flex',
                                    marginRight: '4px'
                                }
                            }}>
                                <img src={icons.Logo} alt='Logo' />
                            </Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    color: 'white',
                                    textDecoration: 'none',
                                }}>
                                Estatein
                            </Typography>
                        </Box>
                        <Input className='input-field' placeholder='Enter Your Email'
                        startAdornment={
                            <InputAdornment><EmailIcon sx={{ fill: 'white', mr: '6px' }} /></InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment>
                            <IconButton>
                                <SendIcon/>
                            </IconButton>
                            </InputAdornment>
                        }
                        sx={{ color: 'white' }}></Input>
                    </Box>
                    <Grid container spacing={2} sx={{justifyItems:'center'}}>
                        <Grid xs={6} sm={4} md={2.25}>
                            <List
                                sx={{ width: '100%',maxWidth: 360, color: 'white', bgcolor: '#141414' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader sx={{ bgcolor: '#141414', color: 'gray' }} component="div" id="nested-list-subheader">
                                        Home
                                    </ListSubheader>
                                }
                            >
                                <ListItemButton>
                                    <ListItemText >Hero Section</ListItemText>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText  >Features</ListItemText>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText  >Properties</ListItemText>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText  >Testimonials</ListItemText>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText  >FAQ’s</ListItemText>
                                </ListItemButton>
                            </List>
                        </Grid>
                        <Grid xs={6} sm={4} md={2.25}>
                            <List
                                sx={{ width: '100%', maxWidth: 360, color: 'white', bgcolor: '#141414' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader sx={{ bgcolor: '#141414', color: 'gray' }} component="div" id="nested-list-subheader">
                                        About Us
                                    </ListSubheader>
                                }
                            >
                                <ListItemButton>
                                    <ListItemText  >Our Story</ListItemText>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText  >Our Works</ListItemText>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText  >How It Works</ListItemText>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText  >Our Team</ListItemText>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText  >Our Clients</ListItemText>
                                </ListItemButton>
                            </List>
                        </Grid>
                        <Grid xs={6} sm={4} md={2}>
                            <List
                                sx={{ width: '100%', maxWidth: 360, color: 'white', bgcolor: '#141414' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader sx={{ bgcolor: '#141414', color: 'gray' }} component="div" id="nested-list-subheader">
                                        Properties
                                    </ListSubheader>
                                }
                            >
                                <ListItemButton>
                                    <ListItemText  >Portfolio</ListItemText>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText  >Categories</ListItemText>
                                </ListItemButton>
                            </List>
                        </Grid>
                        <Grid xs={6} sm={4} md={3}>
                            <List
                                sx={{ width: 'auto', maxWidth: 360, color: 'white', bgcolor: '#141414' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader sx={{ bgcolor: '#141414', color: 'gray' }} component="div" id="nested-list-subheader">
                                        Services
                                    </ListSubheader>
                                }
                            >
                                <ListItemButton>
                                    <ListItemText>Valuation Mastery</ListItemText>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText>Strategic Marketing</ListItemText>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText>Negotiation Wizardry</ListItemText>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText>Closing Success</ListItemText>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText>Property Management</ListItemText>
                                </ListItemButton>
                            </List>
                        </Grid>
                        <Grid xs={6} sm={4} md={2.5}>
                            <List
                                sx={{ width: '100%', maxWidth: 360, color: 'white', bgcolor: '#141414' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader sx={{ bgcolor: '#141414', color: 'gray' }} component="div" id="nested-list-subheader">
                                        Contact Us
                                    </ListSubheader>
                                }
                            >
                                <ListItemButton>
                                    <ListItemText>Contact Form</ListItemText>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText>Our Offices</ListItemText>
                                </ListItemButton>
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Footer