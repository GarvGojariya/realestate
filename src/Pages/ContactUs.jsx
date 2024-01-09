import { Box, Button, Chip, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import React from 'react'
import '../Styles/Index.css'
import { icons } from '../Assets/Icons/Index'
import ConnectPage from '../Components/ConnectPage';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { images } from '../Assets/Images/Index';

const ContactUs = () => {
  return (
    <>
      <Box maxWidth='100%' sx={{ placeContent: 'center', placeItems: 'center', display: 'grid', rowGap: 10, bgcolor: '#141414' }}>
        <Box maxWidth={'100%'} sx={{ placeItems: 'center', alignItems: 'center', display: 'grid' }} >
          <Box sx={{ display: 'grid', rowGap: 2, width: '80%', pt: { xs: '60px', md: '100px' } }}>
            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: '38px', fontWeight: '600' }}>
              Get in Touch with Estatein
            </Typography>
            <Typography sx={{ color: '#666', fontFamily: 'Urbanist', fontSize: '16px', fontWeight: '500' }}>
              Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.
            </Typography>
          </Box>
        </Box>
        <Box className="discover-box" maxWidth={'100%'} sx={{ py: 2, border: 2, color: '#262626', height: '100%', width: { xs: '90%', md: '100%' }, borderRadius: { xs: '10px', md: '0px' }, alignContent: 'center', display: 'flex', placeContent: 'center' }}>
          <Box sx={{ width: { xs: '90%', md: '98%' } }}>
            <Grid container sx={{ rowGap: 4 }}>
              <Grid xs={6} md={3}>
                <Box className='home-box-2' sx={{ fontSize: { xs: '14px', md: '16px' }, fontFamily: 'Urbanist', fontWeight: '600', px: { xs: '14px', md: '18px' }, pb: '20px', width: '80%', height: '100%', placeItems: 'center', display: 'grid', gap: 0.5 }}>
                  <NorthEastIcon sx={{ placeSelf: 'self-end', color: '#4D4D4D' }} />
                  <img src={icons.MailIcon} alt="Home icon" />
                  <Typography sx={{ color: 'white', textAlign: 'center' }}>
                    info@estatein.com
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={6} md={3}>
                <Box className='home-box-2' sx={{ fontSize: { xs: '14px', md: '16px' }, fontFamily: 'Urbanist', fontWeight: '600', px: { xs: '14px', md: '18px' }, pb: '20px', width: '80%', height: '100%', placeItems: 'center', display: 'grid', gap: 0.5 }}>
                  <NorthEastIcon sx={{ placeSelf: 'self-end', color: '#4D4D4D' }} />
                  <img src={icons.CallIcon} alt="Value icon" />
                  <Typography sx={{ color: 'white', textAlign: 'center' }}>
                    +1 (123) 456-7890
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={6} md={3}>
                <Box className='home-box-2' sx={{ fontSize: { xs: '14px', md: '16px' }, fontFamily: 'Urbanist', fontWeight: '600', px: { xs: '14px', md: '18px' }, pb: '20px', width: '80%', height: '100%', placeItems: 'center', display: 'grid', gap: 0.5 }}>
                  <NorthEastIcon sx={{ placeSelf: 'self-end', color: '#4D4D4D' }} />
                  <img src={icons.LocationIcon} alt="Management icon" />
                  <Typography sx={{ color: 'white', textAlign: 'center' }}>
                    Main Headquarters
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={6} md={3}>
                <Box className='home-box-2' sx={{ fontSize: { xs: '14px', md: '16px' }, fontFamily: 'Urbanist', fontWeight: '600', px: { xs: '14px', md: '18px' }, pb: '20px', width: '80%', height: '100%', placeItems: 'center', display: 'grid', gap: 0.5 }}>
                  <NorthEastIcon sx={{ placeSelf: 'self-end', color: '#4D4D4D' }} />
                  <img src={icons.SocialIcon} alt="Decision icon" />
                  <Typography sx={{ color: 'white', textAlign: 'center', display: 'flex' }}>
                    Instagram
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box maxWidth='100%' sx={{ display: 'grid', rowGap: 2, placeContent: 'center', placeItems: 'center' }}>
          <Box sx={{ width: '90%' }}>
            <img src={icons.Stars} alt="stars" />
            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', fontStyle: 'normal', fontWeight: '600', fontSize: { xs: "20px", md: '30px' }, alignSelf: 'stretch' }}>
              Let's Connect
            </Typography>
            <Typography sx={{ mt: '3', mr: 1, color: '#999', fontFamily: 'Urbanist', fontStyle: 'normal', fontSize: { xs: "14px", sm: '16px' }, fontWeight: '500', alignSelf: 'stretch', width: { xs: '90%', md: '80%' } }}>
              We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.
            </Typography>
          </Box>
          <ConnectPage />
        </Box>
        <Box maxWidth='90%' sx={{ display: 'grid', rowGap: 2, placeContent: 'center', placeItems: 'center' }}>
          <Box sx={{ width: '90%' }}>
            <img src={icons.Stars} alt="stars" />
            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', fontStyle: 'normal', fontWeight: '600', fontSize: { xs: "20px", md: '30px' }, alignSelf: 'stretch' }}>
              Discover Our Office Locations
            </Typography>
            <Typography sx={{ mt: '3', mr: 1, color: '#999', fontFamily: 'Urbanist', fontStyle: 'normal', fontSize: { xs: "14px", sm: '16px' }, fontWeight: '500', alignSelf: 'stretch', width: { xs: '90%', md: '80%' } }}>
              Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you.
            </Typography>
          </Box>
          <Box sx={{ maxWidth: '90%' }}>
            <Grid container gap={1}>
              <Grid xs={12} md={5.5}>
                <Box sx={{ display: 'grid', rowGap: 2,height:'100%' }} className='office-box'>
                  <Box sx={{ width: '100%', height: '100%' }}>
                    <Typography sx={{ fontFamily: 'Urbanist', fontSize: '14px', fontWeight: 500, color: 'white' }}>
                      Main Headquarters
                    </Typography>
                    <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '20px', md: '24px' }, fontWeight: 500, color: 'white' }}>
                      123 Estatein Plaza, City Center, Metropolis
                    </Typography>
                    <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '14px', md: '16px' }, fontWeight: 500, color: '#999' }}>
                      Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.
                    </Typography>
                  </Box>
                  <Box sx={{ placeItems: 'center', color: 'white', "& .icons": { color: 'white' }, display: 'flex', gap: 2 }} >
                    <Chip sx={{ color: 'white', width: '100%', borderColor: '#262626', bgcolor: '#1A1A1A' }} icon={<MailIcon color='white' />} variant="outlined" label='info@estatein.com' />
                    <Chip sx={{ color: 'white', width: '100%', borderColor: '#262626', bgcolor: '#1A1A1A' }} icon={<CallIcon color='white' />} variant="outlined" label='+1(123)456-7890' />
                    <Chip sx={{ color: 'white', width: '100%', borderColor: '#262626', bgcolor: '#1A1A1A' }} icon={<LocationOnIcon color='white' />} variant="outlined" label='Metropolis' />
                  </Box>
                  <Button sx={{ color: 'white', bgcolor: '#703BF7' }}>Get Direction</Button>
                </Box>
              </Grid>
              <Grid xs={12} md={5.5}>
                <Box sx={{ display: 'grid' ,rowGap:2,height:'100%'}} className='office-box'>
                  <Box>
                    <Typography sx={{ fontFamily: 'Urbanist', fontSize: '14px', fontWeight: 500, color: 'white' }}>
                      Regional Offices
                    </Typography>
                    <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '20px', md: '24px' }, fontWeight: 500, color: 'white' }}>
                      456 Urban Avenue, Downtown District, Metropolis
                    </Typography>
                    <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '14px', md: '16px' }, fontWeight: 500, color: '#999' }}>
                      Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.
                    </Typography>
                  </Box>
                  <Box sx={{ placeItems: 'center', color: 'white', "& .icons": { color: 'white' }, display: 'flex', gap: 2, }} >
                    <Chip sx={{ color: 'white', width: '100%', borderColor: '#262626', bgcolor: '#1A1A1A' }} icon={<MailIcon color='white' />} variant="outlined" label='info@estatein.com' />
                    <Chip sx={{ color: 'white', width: '100%', borderColor: '#262626', bgcolor: '#1A1A1A' }} icon={<CallIcon color='white' />} variant="outlined" label='+1(123)456-7890' />
                    <Chip sx={{ color: 'white', width: '100%', borderColor: '#262626', bgcolor: '#1A1A1A' }} icon={<LocationOnIcon color='white' />} variant="outlined" label='Metropolis' />
                  </Box>
                  <Button maxWidth="100%" sx={{ width:{xs:'90%',md:'80%'},color: 'white', bgcolor: '#703BF7' }}>Get Direction</Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box maxWidth={'90%'} sx={{ placeItems: 'center', display: 'grid' }}>
          <Box maxWidth={'80%'} sx={{ width: '90%', bgcolor: '#262626', p: { xs: 1, sm: 2, md: 5 }, borderRadius: '18px' }}>
            <Grid container spacing={2}>
              <Grid xs={6} sx={{ '& img': { width: '100%' }, placeItems: 'center', display: 'grid' }}>
                <img src={images.Explore1} alt="office" />
              </Grid>
              <Grid xs={6} sx={{ '& img': { width: '100%' }, placeItems: 'center', display: 'grid' }}>
                <img src={images.Explore2} alt="office" />
              </Grid>
              <Grid xs={6} sx={{ '& img': { width: '100%' }, placeItems: 'center', display: 'grid' }}>
                <img src={images.Explore3} alt="office" />
              </Grid>
              <Grid xs={3} sx={{ '& img': { width: '100%' }, placeItems: 'center', display: 'grid' }}>
                <img src={images.Explore4} alt="office" />
              </Grid>
              <Grid xs={3} sx={{ '& img': { width: '100%' }, placeItems: 'center', display: 'grid' }}>
                <img src={images.Explore5} alt="office" />
              </Grid>
              <Grid xs={12} md={6}>
                <Box sx={{ width: '90%' }}>
                  <img src={icons.Starsg} alt="stars" />
                  <Typography sx={{ color: 'white', fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', fontStyle: 'normal', fontWeight: '600', fontSize: { xs: "20px", md: '30px' }, alignSelf: 'stretch' }}>
                    Explore Estatein's World
                  </Typography>
                  <Typography sx={{ mt: '3', mr: 1, color: '#999', fontFamily: 'Urbanist', fontStyle: 'normal', fontSize: { xs: "14px", sm: '16px' }, fontWeight: '500', alignSelf: 'stretch', width: { xs: '90%', md: '80%' } }}>
                    Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} md={6} sx={{ '& img': { width: '100%' }, placeItems: 'center', display: 'grid' }}>
                <img src={images.Explore6} alt="office" />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ContactUs