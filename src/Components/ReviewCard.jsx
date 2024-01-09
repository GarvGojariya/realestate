import { Avatar, Box, Rating, Typography, } from '@mui/material'
import React from 'react'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const ReviewCard = ({ data }) => {
    return (
        <>
            <Box maxWidth={'100%'} sx={{ height: '100%', placeContent: 'center', display: 'grid', border: 1, borderColor: '#262626', borderRadius: '10px' }}>
                <Box maxWidth={'100%'} sx={{ width: '95%', display: 'grid', gap: '30px', margin: { xs: '30px', md: '40px' } }}>
                    <Rating
                        defaultValue={data.rating}
                        precision={0.5}
                        sx={{ gap: 1 }}
                        icon={<StarRoundedIcon fontSize="inherit" sx={{ border: 1, borderColor: '#262626', borderRadius: '100px', padding: '3px' }} />}
                        readOnly
                        emptyIcon={<StarBorderOutlinedIcon fontSize="inherit" sx={{ border: 1, borderColor: '#262626', borderRadius: '100px', padding: '3px' }} />}
                    />
                    <Box sx={{ width: '90%', display: 'grid' }}>
                        <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '18px', sm: '20px' }, color: 'white', fontWeight: 500 }}>
                            {data.review}
                        </Typography>
                        <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '14px', sm: '16px' }, color: 'white', fontWeight: 500 }}>
                            {data.reviewdescription}
                        </Typography>
                    </Box>
                    <Box sx={{ width: '90%', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Avatar alt='avtar' src={data.profileimage} />
                        <Box sx={{ width: '100%', display: 'grid' }}>
                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '18px', sm: '20px' }, color: 'white', fontWeight: 500 }}>
                                {data.name}
                            </Typography>
                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '14px', sm: '16px' }, color: '#666', fontWeight: 500 }}>
                                {data.location}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ReviewCard