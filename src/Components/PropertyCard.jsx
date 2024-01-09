import { Box, Button, Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ApartmentIcon from '@mui/icons-material/Apartment';

const PropertyCard = ({data}) => {
    return (
        <>
            <Box sx={{ bgcolor: '#141414' }}>
                <Box className='property-card' sx={{
                    
                    "& img": {
                        width: '100%'
                    }
                }}>
                    <img src={data.propimageurl} alt="Property" />
                    <Box sx={{ display: 'grid' }}>
                        <Typography sx={{ color: 'white' }}>
                            {data.propname}
                        </Typography>
                        <Typography sx={{ color: '#999' }}>
                            {data.propdescription}
                        </Typography>
                    </Box>
                    <Box sx={{width:'95%',placeItems:'center', placeSelf:'center',color: 'white', "& .icons": { color: 'white' }, display: 'flex', gap: 2, placeItems: 'center', placeSelf: 'center' }} >
                        <Chip sx={{ color: 'white', width: '100%', borderColor: '#262626',  bgcolor: '#1A1A1A' }} icon={<BedIcon color='white' />} variant="outlined" label='4-Bedroom' />
                        <Chip sx={{ color: 'white', width: '100%', borderColor: '#262626', bgcolor: '#1A1A1A' }} icon={<BathtubIcon color='white' />} variant="outlined" label='3-Bathroom' />
                        <Chip sx={{ color: 'white', width: '100%', borderColor: '#262626', bgcolor: '#1A1A1A' }} icon={<ApartmentIcon color='white' />} variant="outlined" label='Villa' />
                    </Box>
                    <Box sx={{display:'flex',placeContent:'space-between',width:'100%'}}>
                        <Box sx={{display:'grid',width:1/3}}>
                            <Typography sx={{fontFamily:'Urbanist',color:'#999',fontSize:'14px'}}>
                                Price
                            </Typography>
                            <Typography sx={{fontFamily:'Urbanist',color:'white',fontSize:'20px'}}>
                                {data.price}
                            </Typography>
                        </Box>
                        <Button sx={{bgcolor:'#703BF7',color:'white',width:2/3}} >View Property Details</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default PropertyCard