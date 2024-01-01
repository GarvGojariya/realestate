import { Box, Button, Card, CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import { images } from '../Assets/Images/Index';
import { icons } from '../Assets/Icons/Index';
import '../Styles/Index.css';
import GridViewIcon from '@mui/icons-material/GridView';

const AboutUs = () => {

  return (
    <>
      <Box maxWidth='100%' sx={{ bgcolor: '#141414', placeContent: 'center', placeItems: 'center', justifyContent: 'center', display: 'grid' }}>
        <Box maxWidth='90%' sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', mt: 7, flexWrap: 'nowrap' }}>
          <Grid container spacing={'60px'} sx={{ justifyItems: 'center' }}>
            <Grid xs={12} md={6} sx={{ display: 'grid' }}>
              <Box>
                <img src={icons.Stars} alt="stars" />
                <Typography sx={{ color: 'white', fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', fontStyle: 'normal', fontWeight: '600', fontSize: { xs: "20px", md: '30px' }, alignSelf: 'stretch' }}>
                  Our Journey
                </Typography>
                <Typography sx={{ mt: '3', color: '#999', fontFamily: 'Urbanist', fontStyle: 'normal', fontSize: { xs: "14px", sm: '16px' }, fontWeight: '500', alignSelf: 'stretch' }}>
                  Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
                </Typography>
              </Box>
              <Grid container={'true'} spacing={'16px'} gap={'5px'} width={'100%'} sx={{ display: 'flex', mt: 3, justifyContent: { xs: 'center', md: 'normal' }, flexWrap: 'nowrap' }} >
                <Grid xs={6} sm={4} maxHeight={'120px'} sx={{ bgcolor: '#1A1A1A', borderRadius: '10px', alignItems: 'center', display: 'grid', justifyItems: { xs: 'center', md: 'normal' } }}>
                  <Typography sx={{ color: 'white', fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', fontStyle: 'normal', fontWeight: '600', fontSize: { xs: "20px", md: '30px' }, alignSelf: 'stretch' }}>
                    200+
                  </Typography>
                  <Typography sx={{ mt: '3', color: '#999', fontFamily: 'Urbanist', fontStyle: 'normal', fontSize: { xs: "14px", sm: '16px' }, fontWeight: '500', alignSelf: 'stretch' }}>
                    Happy Customers
                  </Typography>
                </Grid>
                <Grid xs={6} sm={4} maxHeight={'120px'} sx={{ bgcolor: '#1A1A1A', borderRadius: '10px', alignItems: 'center', display: 'grid', justifyItems: { xs: 'center', md: 'normal' } }}>
                  <Typography sx={{ color: 'white', fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', fontStyle: 'normal', fontWeight: '600', fontSize: { xs: "20px", md: '30px' }, alignSelf: 'stretch' }}>
                    10k+
                  </Typography>
                  <Typography sx={{ mt: '3', color: '#999', fontFamily: 'Urbanist', fontStyle: 'normal', fontSize: { xs: "14px", sm: '16px' }, fontWeight: '500', alignSelf: 'stretch' }}>
                    Properties For Clients
                  </Typography>
                </Grid>
                <Grid xs={12} sm={4} maxHeight={'120px'} sx={{ bgcolor: '#1A1A1A', borderRadius: '10px', alignItems: 'center', display: 'grid', justifyItems: { xs: 'center', md: 'normal' } }}>
                  <Typography sx={{ color: 'white', fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', fontStyle: 'normal', fontWeight: '600', fontSize: { xs: "20px", md: '30px' }, alignSelf: 'stretch' }}>
                    16+
                  </Typography>
                  <Typography sx={{ mt: '3', color: '#999', fontFamily: 'Urbanist', fontStyle: 'normal', fontSize: { xs: "14px", sm: '16px' }, fontWeight: '500', alignSelf: 'stretch' }}>
                    Years of Experience
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} md={6} >
              <Box className='value-box' sx={{
                "& img": {
                  width: '100%'
                }
              }}>
                <img src={images.Home} alt="Home" />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: '90%', mt: 10, bgcolor: '#141414', display: { md: 'flex', xs: 'grid' }, placeItems: 'center' }}>
          <Box sx={{ width: { md: 1 / 3, xs: '90%' } }}>
            <img src={icons.Stars} alt="stars" />
            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', fontStyle: 'normal', fontWeight: '600', fontSize: { xs: "20px", md: '30px' }, alignSelf: 'stretch' }}>
              Our Values
            </Typography>
            <Typography sx={{ mt: '3', mr: 1, color: '#999', fontFamily: 'Urbanist', fontStyle: 'normal', fontSize: { xs: "14px", sm: '16px' }, fontWeight: '500', alignSelf: 'stretch' }}>
              Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.                </Typography>
          </Box>
          <Box className="value-box" sx={{ mt: { xs: 3, md: '0' }, justifyItems: 'center', width: { xs: '90%', md: 2 / 3 }, mb: 3, color: '#262626', border: 2, borderRadius: '12px' }}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6}>
                <Box sx={{ ml: 5 }}>
                  <Box sx={{ display: 'flex', py: '20px' }}>
                    <Box sx={{
                      "& img": {
                        display: 'flex',
                        marginRight: '4px'
                      }
                    }}>
                      <img src={icons.TrustIcon} alt='Logo' />
                    </Box>
                    <Typography variant="h6" noWrap
                      sx={{
                        ml: 2,
                        fontFamily: 'Urbanist',
                        fontWeight: 600,
                        fontSize: { xs: '18px', md: '20px' },
                        color: 'white',
                        display: 'flex',
                        placeItems: 'center'
                      }}>
                      Trust
                    </Typography>
                  </Box>
                  <Typography sx={{ color: '#999', fontSize: { xs: '14px', md: '16px', width: '90%' }, fontFamily: 'Urbanist' }}>
                    Trust is the cornerstone of every successful real estate transaction.
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} sm={6}>
                <Box sx={{ ml: 5 }}>
                  <Box sx={{ display: 'flex', py: '20px' }}>
                    <Box sx={{
                      "& img": {
                        display: 'flex',
                        marginRight: '4px'
                      }
                    }}>
                      <img src={icons.ExcellenceIcon} alt='Excellent' />
                    </Box>
                    <Typography variant="h6" noWrap
                      sx={{
                        ml: 2,
                        fontFamily: 'Urbanist',
                        fontWeight: 600,
                        fontSize: { xs: '18px', md: '20px' },
                        color: 'white',
                        textDecoration: 'none',
                        display: 'flex',
                        placeItems: 'center'
                      }}>
                      Excellence
                    </Typography>
                  </Box>
                  <Typography sx={{ color: '#999', fontSize: { xs: '14px', md: '16px', width: '90%' }, fontFamily: 'Urbanist' }}>
                    We set the bar high for ourselves. From the properties we list to the services we provide.
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} sm={6}>
                <Box sx={{ ml: 5 }}>
                  <Box sx={{ display: 'flex', py: '20px' }}>
                    <Box sx={{
                      "& img": {
                        display: 'flex',
                        marginRight: '4px'
                      }
                    }}>
                      <img src={icons.ClientIcon} alt='client' />
                    </Box>
                    <Typography variant="h6" noWrap
                      sx={{
                        ml: 2,
                        fontFamily: 'Urbanist',
                        fontWeight: 600,
                        fontSize: { xs: '18px', md: '20px' },
                        color: 'white',
                        textDecoration: 'none',
                        display: 'flex',
                        placeItems: 'center'
                      }}>
                      Client-Centric
                    </Typography>
                  </Box>
                  <Typography sx={{ color: '#999', fontSize: { xs: '14px', md: '16px', width: '90%' }, fontFamily: 'Urbanist' }}>
                    Your dreams and needs are at the center of our universe. We listen, understand.                    </Typography>
                </Box>
              </Grid>
              <Grid xs={12} sm={6}>
                <Box sx={{ ml: 5 }}>
                  <Box sx={{ display: 'flex', py: '20px' }}>
                    <Box sx={{
                      "& img": {
                        display: 'flex',
                        marginRight: '4px'
                      }
                    }}>
                      <img src={icons.CommitmentIcon} alt='Commitment' />
                    </Box>
                    <Typography variant="h6" noWrap
                      sx={{
                        ml: 2,
                        fontFamily: 'Urbanist',
                        fontWeight: 600,
                        fontSize: { xs: '18px', md: '20px' },
                        color: 'white',
                        textDecoration: 'none',
                        display: 'flex',
                        placeItems: 'center'
                      }}>
                      Our Commitment
                    </Typography>
                  </Box>
                  <Typography sx={{ color: '#999', mb: 3, fontSize: { xs: '14px', md: '16px' }, width: '90%', ontFamily: 'Urbanist' }}>
                    We are dedicated to providing you with the highest level of service, professionalism
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{ width: '90%', mt: 10, bgcolor: '#141414', display: 'grid', gap: 2 }}>
          <Box sx={{ width: '90%' }}>
            <img src={icons.Stars} alt="stars" />
            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', fontStyle: 'normal', fontWeight: '600', fontSize: { xs: "20px", md: '30px' }, alignSelf: 'stretch' }}>
              Our Achievements
            </Typography>
            <Typography sx={{ mt: '3', mr: 1, color: '#999', fontFamily: 'Urbanist', fontStyle: 'normal', fontSize: { xs: "14px", sm: '16px' }, fontWeight: '500', alignSelf: 'stretch' }}>
              Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
            </Typography>
          </Box>
          <Box sx={{ width: '100%', height: 'auto' }}>
            <Grid container spacing={2}>
              <Grid xs={12} md={4}>
                <Box className='experty-box' sx={{ border: 2, color: '#262626', borderRadius: '10px', alignItems: 'center', placeContent: { xs: 'start', md: 'center' }, display: 'grid', p: { xs: '20px', sm: '30px', md: '40px' } }}>
                  <Typography sx={{ color: 'white', fontSize: { xs: '20px', md: '24px' }, fontWeight: 500, fontFamily: 'Urbanist' }}>
                    3+ Years of Excellence
                  </Typography>
                  <Typography sx={{ color: '#999', fontSize: { xs: '14px', md: '16px' }, fontWeight: 500, fontFamily: 'Urbanist' }}>
                    With over 3 years in the industry, we've amassed a wealth of knowledge and experience.
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} md={4}>
                <Box className='experty-box' sx={{ border: 2, color: '#262626', borderRadius: '10px', alignItems: 'center', placeContent: { xs: 'start', md: 'center' }, display: 'grid', p: { xs: '20px', sm: '30px', md: '40px' } }}>
                  <Typography sx={{ color: 'white', fontSize: { xs: '20px', md: '24px' }, fontWeight: 500, fontFamily: 'Urbanist' }}>
                    Happy Clients
                  </Typography>
                  <Typography sx={{ color: '#999', fontSize: { xs: '14px', md: '16px' }, fontWeight: 500, fontFamily: 'Urbanist' }}>
                    Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} md={4}>
                <Box className='experty-box' sx={{ border: 2, color: '#262626', borderRadius: '10px', alignItems: 'center', placeContent: { xs: 'start', md: 'center' }, display: 'grid', p: { xs: '20px', sm: '30px', md: '40px' } }}>
                  <Typography sx={{ color: 'white', fontSize: { xs: '20px', md: '24px' }, fontWeight: 500, fontFamily: 'Urbanist' }}>
                    Industry Recognition
                  </Typography>
                  <Typography sx={{ color: '#999', fontSize: { xs: '14px', md: '16px' }, fontWeight: 500, fontFamily: 'Urbanist' }}>
                    We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{ width: '90%', mt: 10, bgcolor: '#141414', display: 'grid', gap: 2 }}>
          <Box sx={{ width: '90%' }}>
            <img src={icons.Stars} alt="stars" />
            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', fontStyle: 'normal', fontWeight: '600', fontSize: { xs: "20px", md: '30px' }, alignSelf: 'stretch' }}>
              Navigating the Estatein Experience
            </Typography>
            <Typography sx={{ mt: '3', mr: 1, color: '#999', fontFamily: 'Urbanist', fontStyle: 'normal', fontSize: { xs: "14px", sm: '16px' }, fontWeight: '500', alignSelf: 'stretch' }}>
              At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={2} rowGap={2}>
              <Grid xs={12} md={4} sx={{ height: '100%' }}>
                <Typography className='step-no' sx={{ pl: 1, color: 'white', fontSize: '16px', fontFamily: 'Urbanist', fontWeight: 500 }}>
                  Step 01
                </Typography>
                <Box className='step-box' sx={{ p: 3, display: 'grid', gap: 2 }}>
                  <Typography sx={{ color: 'white', fontSize: '20px', fontFamily: 'Urbanist', fontWeight: '600' }}>
                    Discover a World of Possibilities
                  </Typography>
                  <Typography sx={{ color: '#999', fontSize: '16px', fontFamily: 'Urbanist', fontWeight: '500' }}>
                    Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} md={4} sx={{ height: '100%' }}>
                <Typography className='step-no' sx={{ pl: 1, color: 'white', fontSize: '16px', fontFamily: 'Urbanist', fontWeight: 500 }}>
                  Step 02
                </Typography>
                <Box className='step-box' sx={{ p: 3, display: 'grid', gap: 2 }}>
                  <Typography sx={{ color: 'white', fontSize: '20px', fontFamily: 'Urbanist', fontWeight: '600' }}>
                    Narrowing Down Your Choices
                  </Typography>
                  <Typography sx={{ color: '#999', fontSize: '16px', fontFamily: 'Urbanist', fontWeight: '500' }}>
                    Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} md={4} sx={{ height: '100%' }}>
                <Typography className='step-no' sx={{ pl: 1, color: 'white', fontSize: '16px', fontFamily: 'Urbanist', fontWeight: 500 }}>
                  Step 03
                </Typography>
                <Box className='step-box' sx={{ p: 3, display: 'grid', gap: 2 }}>
                  <Typography sx={{ color: 'white', fontSize: '20px', fontFamily: 'Urbanist', fontWeight: '600' }}>
                    Personalized Guidance
                  </Typography>
                  <Typography sx={{ color: '#999', fontSize: '16px', fontFamily: 'Urbanist', fontWeight: '500' }}>
                    Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} md={4}>
                <Typography className='step-no' sx={{ pl: 1, color: 'white', fontSize: '16px', fontFamily: 'Urbanist', fontWeight: 500 }}>
                  Step 04
                </Typography>
                <Box className='step-box' sx={{ p: 3, display: 'grid', gap: 2 }}>
                  <Typography sx={{ color: 'white', fontSize: '20px', fontFamily: 'Urbanist', fontWeight: '600' }}>
                    See It for Yourself
                  </Typography>
                  <Typography sx={{ color: '#999', fontSize: '16px', fontFamily: 'Urbanist', fontWeight: '500' }}>
                    Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} md={4}>
                <Typography className='step-no' sx={{ pl: 1, color: 'white', fontSize: '16px', fontFamily: 'Urbanist', fontWeight: 500 }}>
                  Step 05
                </Typography>
                <Box className='step-box' sx={{ p: 3, display: 'grid', gap: 2 }}>
                  <Typography sx={{ color: 'white', fontSize: '20px', fontFamily: 'Urbanist', fontWeight: '600' }}>
                    Making Informed Decisions
                  </Typography>
                  <Typography sx={{ color: '#999', fontSize: '16px', fontFamily: 'Urbanist', fontWeight: '500' }}>
                    Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} md={4}>
                <Typography className='step-no' sx={{ pl: 1, color: 'white', fontSize: '16px', fontFamily: 'Urbanist', fontWeight: 500 }}>
                  Step 06
                </Typography>
                <Box className='step-box' sx={{ p: 3, display: 'grid', gap: 2 }}>
                  <Typography sx={{ color: 'white', fontSize: '20px', fontFamily: 'Urbanist', fontWeight: '600' }}>
                    Getting the Best Deal
                  </Typography>
                  <Typography sx={{ color: '#999', fontSize: '16px', fontFamily: 'Urbanist', fontWeight: '500' }}>
                    We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{ width: '90%', mt: 10, bgcolor: '#141414', display: 'grid', gap: 2 }}>
          <Box sx={{ width: '90%' }}>
            <img src={icons.Stars} alt="stars" />
            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', fontStyle: 'normal', fontWeight: '600', fontSize: { xs: "20px", md: '30px' }, alignSelf: 'stretch' }}>
              Meet the Estatein Team
            </Typography>
            <Typography sx={{ mt: '3', mr: 1, color: '#999', fontFamily: 'Urbanist', fontStyle: 'normal', fontSize: { xs: "14px", sm: '16px' }, fontWeight: '500', alignSelf: 'stretch' }}>
              At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.
            </Typography>
          </Box>
          <Box sx={{ width: '90%' }}>
            <Grid container gap={2} sx={{ flexWrap: 'initial' }}>
              <Grid xs={12} sm={6} md={3}>
                <Card sx={{ border: 1, color: 'gray', bgcolor: '#1A1A1A', borderRadius: '10px', }}>
                  <CardActionArea sx={{ p: 1 }}>
                    <CardMedia sx={{ display: 'grid', '& .image': { justifySelf: 'center', mt: '-20px' } }}>
                      <img src={images.T1} alt="Member1" />
                      <img className='image' src={icons.TwiterLogo} alt="Twiter" />
                    </CardMedia>
                    <CardContent>
                      <Box sx={{ display: 'grid' }}>
                        <Typography sx={{ textAlign: 'center', fontsize: '20px', color: 'white', fontFamily: 'Urbanist', fontWeight: 600 }}>
                          Max Mitchell
                        </Typography>
                        <Typography sx={{ textAlign: 'center', fontsize: '16px', color: '#999', fontFamily: 'Urbanist', fontWeight: 500 }}>
                          Founder
                        </Typography>
                        <Box sx={{ display: 'flex', placeContent: 'center', alignItems: 'center', gap: 2, border: 1, color: '#999', borderRadius: '100px' }}>
                          <Typography>
                            Say Hello 👋
                          </Typography>
                          <IconButton>
                            <img src={icons.Send} alt="send" />
                          </IconButton>
                        </Box>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

            </Grid>
          </Box>
        </Box>
        <Box sx={{ width: '90%', mt: 10, bgcolor: '#141414', display: 'grid', gap: 2 }}>
          <Box sx={{ width: '90%' }}>
            <img src={icons.Stars} alt="stars" />
            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', fontStyle: 'normal', fontWeight: '600', fontSize: { xs: "20px", md: '30px' }, alignSelf: 'stretch' }}>
              Our Valued Clients
            </Typography>
            <Typography sx={{ mt: '3', mr: 1, color: '#999', fontFamily: 'Urbanist', fontStyle: 'normal', fontSize: { xs: "14px", sm: '16px' }, fontWeight: '500', alignSelf: 'stretch' }}>
              At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving
            </Typography>
          </Box>
          <Box sx={{display:{xs:'grid',md:'flex'},gap:4,width:'100%'}}>
            <Box className='value-box' sx={{ width: { xs: '90%', md: '45%' }, p: '40px', display: 'grid', gap: 2 }}>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: 3 / 4 }}>
                  <Typography sx={{ color: '#999', fontsize: '16px', fontWeight: 500, fontFamily: 'Urbanist' }}>
                    Since 2019
                  </Typography>
                  <Typography sx={{ color: 'white', fontsize: '24px', fontWeight: 600, fontFamily: 'Urbanist' }}>
                    ABC Corporation
                  </Typography>
                </Box>
                <Button className='btn-visit' variant='contained' sx={{ bgcolor: '#1A1A1A', borderRadius: '10px', justifySelf: 'right' }}>Visit Website</Button>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '50%', display: 'grid', gap: 1 }}>
                  <Box sx={{ color: '#999', fontsize: '18px', fontWeight: 500, fontFamily: 'Urbanist', display: 'flex', gap: '6px' }}>
                    <GridViewIcon />
                    <Typography>
                      Domain
                    </Typography>
                  </Box>
                  <Typography sx={{ color: 'white', fontsize: '20px', fontWeight: 500, fontFamily: 'Urbanist' }}>
                    Commercial Real Estate
                  </Typography>
                </Box>
                <Box sx={{ width: '50%', display: 'grid', gap: 1 }}>
                  <Box sx={{ color: '#999', fontsize: '18px', fontWeight: 500, fontFamily: 'Urbanist', display: 'flex', gap: '6px' }}>
                    <img src={icons.CatagoryIcon} alt="" />
                    <Typography>
                      Category
                    </Typography>
                  </Box>
                  <Typography sx={{ color: 'white', fontsize: '20px', fontWeight: 500, fontFamily: 'Urbanist' }}>
                    Luxury Home Development
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ border: 1, borderRadius: '12px', color: '#999', p: '30px', display: 'grid', gap: 2 }}>
                <Typography sx={{ fontsize: '18px', fontFamily: 'Urbanist', fontWeight: 500, color: '#999' }}>
                  What They Said 🤗
                </Typography>
                <Typography sx={{ fontsize: '18px', fontFamily: 'Urbanist', fontWeight: 500, color: 'white' }}>
                  Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.
                </Typography>
              </Box>
            </Box>
            <Box className='value-box' sx={{ width: { xs: '90%', md: '45%' }, p: '40px', display: 'grid', gap: 2 }}>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: 3 / 4 }}>
                  <Typography sx={{ color: '#999', fontsize: '16px', fontWeight: 500, fontFamily: 'Urbanist' }}>
                    Since 2019
                  </Typography>
                  <Typography sx={{ color: 'white', fontsize: '24px', fontWeight: 600, fontFamily: 'Urbanist' }}>
                    ABC Corporation
                  </Typography>
                </Box>
                <Button className='btn-visit' variant='contained' sx={{ bgcolor: '#1A1A1A', borderRadius: '10px', justifySelf: 'right' }}>Visit Website</Button>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '50%', display: 'grid', gap: 1 }}>
                  <Box sx={{ color: '#999', fontsize: '18px', fontWeight: 500, fontFamily: 'Urbanist', display: 'flex', gap: '6px' }}>
                    <GridViewIcon />
                    <Typography>
                      Domain
                    </Typography>
                  </Box>
                  <Typography sx={{ color: 'white', fontsize: '20px', fontWeight: 500, fontFamily: 'Urbanist' }}>
                    Commercial Real Estate
                  </Typography>
                </Box>
                <Box sx={{ width: '50%', display: 'grid', gap: 1 }}>
                  <Box sx={{ color: '#999', fontsize: '18px', fontWeight: 500, fontFamily: 'Urbanist', display: 'flex', gap: '6px' }}>
                    <img src={icons.CatagoryIcon} alt="" />
                    <Typography>
                      Category
                    </Typography>
                  </Box>
                  <Typography sx={{ color: 'white', fontsize: '20px', fontWeight: 500, fontFamily: 'Urbanist' }}>
                    Luxury Home Development
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ border: 1, borderRadius: '12px', color: '#999', p: '30px', display: 'grid', gap: 2 }}>
                <Typography sx={{ fontsize: '18px', fontFamily: 'Urbanist', fontWeight: 500, color: '#999' }}>
                  What They Said 🤗
                </Typography>
                <Typography sx={{ fontsize: '18px', fontFamily: 'Urbanist', fontWeight: 500, color: 'white' }}>
                  Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box >
    </>
  )
}

export default AboutUs