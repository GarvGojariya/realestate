import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { images } from '../Assets/Images/Index'

const Home = () => {
    return (
        <>
            <Box maxWidth='100%' sx={{ bgcolor: '#141414', placeContent: 'center', placeItems: 'center', justifyContent: 'center', display: 'grid' }}>
                <Box maxWidth='95%' sx={{ display: 'flex' }}>
                    <Box sx={{ width: '50%', alignSelf: 'center', display: 'grid', gap: 3 }}>
                        <Box sx={{ display: 'grid', gap: 2 }}>
                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: '40px', fontWeight: '600', color: 'white' }}>
                                Discover Your Dream Property with Estatein
                            </Typography>
                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: '18px', fontWeight: '500', color: '#666' }}>
                                Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 5 }}>
                            <Button variant='contained' sx={{ borderRadius: '8px', color: 'white', bgcolor: "#141414", border: 0.5, borderColor: 'gray' }}>Learn more</Button>
                            <Button variant='contained' sx={{ borderRadius: '8px', color: 'white', bgcolor: "#703BF7" }}>Browse Properties</Button>
                        </Box>
                        <Box sx={{display:'flex'}}>
                            <Box sx={{ width: 1 / 3, display: 'grid', border: 2, borderRadius: '10px', color: '#262626', px: '20px', py: '14px', placeContent: 'center' }}>
                                <Typography sx={{ fontSize: '30px', fontFamily: 'Urbanist', fontWeight: 700, color: 'white' }}>200+</Typography>
                                <Typography sx={{ fontSize: '16px', fontFamily: 'Urbanist', fontWeight: 500, color: '#999' }}>Happy Customers</Typography>
                            </Box>
                            <Box sx={{ width: 1 / 3, display: 'grid', border: 2, borderRadius: '10px', color: '#262626', px: '20px', py: '14px', placeContent: 'center' }}>
                                <Typography sx={{ fontSize: '30px', fontFamily: 'Urbanist', fontWeight: 700, color: 'white' }}>10k+</Typography>
                                <Typography sx={{ fontSize: '16px', fontFamily: 'Urbanist', fontWeight: 500, color: '#999' }}>Properties For Clients</Typography>
                            </Box>
                            <Box sx={{ width: 1 / 3, display: 'grid', border: 2, borderRadius: '10px', color: '#262626', px: '20px', py: '14px', placeContent: 'center' }}>
                                <Typography sx={{ fontSize: '30px', fontFamily: 'Urbanist', fontWeight: 700, color: 'white' }}>16+</Typography>
                                <Typography sx={{ fontSize: '16px', fontFamily: 'Urbanist', fontWeight: 500, color: '#999' }}>Years of Experience</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        "& img": {

                        }
                    }}><img src={images.HomeImage} alt="Home" /></Box>
                </Box>
            </Box>
        </>
    )
}

export default Home