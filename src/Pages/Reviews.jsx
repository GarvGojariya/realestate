import { Box, Grid } from '@mui/material'
import React from 'react'
import ReviewCard from '../Components/ReviewCard'
import reviews from '../Data/ClientReviews.json'

const Reviews = () => {
    return (
        <>
            <Box maxWidth='100%' sx={{ bgcolor: '#141414', placeContent: 'center', placeItems: 'center', justifyContent: 'center', display: 'grid', gap: 7 }}>
                <Box maxWidth='95%' sx={{ mt: 5, display: { xs: 'grid', lg: 'flex' }, gap: 5, placeItems: 'center' }}>
                    <Grid container spacing={2} sx={{ rowGap: 2 }}>
                        {
                            reviews.map((review, index) =>
                                <Grid xs={12} sm={6} md={4}>
                                    <Box maxWidth={'100%'} sx={{width:'100%',height:'100%'}}>
                                        <ReviewCard sx={{ width: '100%',height:'100%' }} key={index} data={review} />
                                    </Box>
                                </Grid>
                            )
                        }
                        {console.log(reviews.length)}
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Reviews