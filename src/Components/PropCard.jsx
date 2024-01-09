import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { images } from '../Assets/Images/Index'

const PropCard = ({data}) => {
    return (
        <>
            <Box maxWidth={'100%'} sx={{ padding: '30px',bgcolor:'#141414' ,borderRadius: '12px', display: 'grid', border: 1, color: '#999', '& img': { width: '100%' }, rowGap: '20px' }}>
                <img maxWidth={'100%'} src={data.imageSrc} alt="Property" />
                <Box maxWidth={'100%'} sx={{ width: '100%', display: 'grid', gap: '20px' }}>
                    <Typography maxWidth={'100%'} sx={{ color: 'white', width: '80%', border: 1, borderColor: '#999', borderRadius: '28px', bgcolor: '#1A1A1A', display: 'flex', padding: '6px 12px', placeContent: 'center' }}>
                        {data.header}
                    </Typography>
                    <Box maxWidth={'100%'} sx={{ width: '100%', display: 'grid' }}>
                        <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: { xs: '18px', sm: '20px' }, fontWeight: 600 }}>
                            {data.name}
                        </Typography>
                        <Typography sx={{ color: '#999', fontFamily: 'Urbanist', fontSize: { xs: '14px', sm: '16px' }, fontWeight: 500 }}>
                            {data.detail}
                        </Typography>
                    </Box>
                    <Box maxWidth={'100%'} sx={{ width: '100%', display: 'flex' }}>
                        <Box maxWidth={'100%'} sx={{ width: 1 / 3 }}>
                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: '14px', fontWeight: 500, color: '#999' }}>
                                Price
                            </Typography>
                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: '20px', fontWeight: 600, color: 'white' }}>
                                {data.price}
                            </Typography>
                        </Box>
                        <Button sx={{ width: 2 / 3, bgcolor: '#703BF7', color: '#fff', padding: '14px 20px', fontWeight: 500, fontSize: '14px' }}>View Property Details</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default PropCard