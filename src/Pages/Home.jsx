import { Box, Button, Divider, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { images } from '../Assets/Images/Index'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { icons } from '../Assets/Icons/Index';
import PropertyCard from '../Components/PropertyCard';
import { useNavigate } from 'react-router-dom';
import data from '../Data/PropertyDetail.json'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ReviewCard from '../Components/ReviewCard';
import reviews from '../Data/ClientReviews.json'
import Faqs from '../Components/Faqs';

const Home = () => {
    const navigate = useNavigate()



    const [currentPage, setCurrentPage] = useState(1)
    const [propertyPerPage, setPropertyPerPage] = useState(3)
    const lastPropertyIndex = currentPage * propertyPerPage;
    const firstPropertyIndex = lastPropertyIndex - propertyPerPage;
    const currentProperty = data.slice(firstPropertyIndex, lastPropertyIndex);

    const displayNextProperty = () => {
        if (currentPage === (Math.ceil(data.length / propertyPerPage))) {
            setCurrentPage(currentPage)
        }
        else {
            setCurrentPage(currentPage + 1)
        }
    }
    const displayPreviousProperty = () => {
        if (currentPage === 1) {
            setCurrentPage(currentPage)
        }
        else {
            setCurrentPage(currentPage - 1)
        }
    }

    const [currentReviewPage, setCurrentReviewPage] = useState(1)
    const [reviewPerPage, setReviewPerPage] = useState(3)
    const lastReviewIndex = currentReviewPage * reviewPerPage;
    const firstReviewIndex = lastReviewIndex - reviewPerPage;
    const currentReview = reviews.slice(firstReviewIndex, lastReviewIndex);

    const displayNextReview = () => {
        if (currentReviewPage === (Math.ceil(data.length / propertyPerPage))) {
            setCurrentReviewPage(currentReviewPage)
        }
        else {
            setCurrentReviewPage(currentReviewPage + 1)
        }
    }
    const displayPreviousReview = () => {
        if (currentReviewPage === 1) {
            setCurrentReviewPage(currentReviewPage)
        }
        else {
            setCurrentReviewPage(currentReviewPage - 1)
        }
    }

    return (
        <>
            <Box maxWidth='100%' sx={{ bgcolor: '#141414', placeContent: 'center', placeItems: 'center', justifyContent: 'center', display: 'grid', gap: 7 }}>
                <Box maxWidth='95%' sx={{ display: { xs: 'grid', lg: 'flex' }, gap: 5, placeItems: 'center' }}>
                    <Box sx={{ width: { xs: '90%', lg: '50%' }, alignSelf: 'center', placeItems: 'center', display: 'grid', gap: 3 }}>
                        <Box sx={{ display: 'grid', gap: 2, width: '100%' }}>
                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '28px', sm: '32px', md: '40px' }, fontWeight: '600', color: 'white' }}>
                                Discover Your Dream Property with Estatein
                            </Typography>
                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: { md: '18px', xs: '14px', sm: '16px' }, fontWeight: '500', color: '#666' }}>
                                Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                            </Typography>
                        </Box>
                        <Box sx={{ display: { xs: 'grid', md: 'flex' }, gap: { xs: 2, md: 5 } }}>
                            <Button variant='contained' sx={{ borderRadius: '8px', color: 'white', bgcolor: "#141414", border: 0.5, borderColor: 'gray' }}>Learn more</Button>
                            <Button variant='contained' sx={{ borderRadius: '8px', color: 'white', bgcolor: "#703BF7", }}>Browse Properties</Button>
                        </Box>
                        <Box maxWidth={'100%'} sx={{ width: '100%' }}>
                            <Grid container spacing={0.5} sx={{ placeSelf: 'normal', height: '100%', width: '100%' }}>
                                <Grid xs={6} md={4} >
                                    <Box sx={{ height: { md: '100%' }, display: 'grid', border: 2, borderRadius: '10px', color: '#262626', py: '12px', placeContent: 'center' }}>
                                        <Typography sx={{ fontSize: { xs: '24px', md: '30px' }, fontFamily: 'Urbanist', fontWeight: 700, color: 'white' }}>200+</Typography>
                                        <Typography sx={{ fontSize: { xs: '14px', md: '16px' }, fontFamily: 'Urbanist', fontWeight: 500, color: '#999' }}>Happy Customers</Typography>
                                    </Box>
                                </Grid>
                                <Grid xs={6} md={4}>
                                    <Box sx={{ height: { md: '100%' }, display: 'grid', border: 2, borderRadius: '10px', color: '#262626', py: '12px', placeContent: 'center' }}>
                                        <Typography sx={{ fontSize: { xs: '24px', md: '30px' }, fontFamily: 'Urbanist', fontWeight: 700, color: 'white' }}>10k+</Typography>
                                        <Typography sx={{ fontSize: { xs: '14px', md: '16px' }, fontFamily: 'Urbanist', fontWeight: 500, color: '#999' }}>Properties For Clients</Typography>
                                    </Box>
                                </Grid>
                                <Grid xs={12} md={4}>
                                    <Box sx={{ height: { md: '100%' }, display: 'grid', border: 2, borderRadius: '10px', color: '#262626', py: '12px', placeContent: 'center' }}>
                                        <Typography sx={{ fontSize: { xs: '24px', md: '30px' }, fontFamily: 'Urbanist', fontWeight: 700, color: 'white' }}>16+</Typography>
                                        <Typography sx={{ fontSize: { xs: '14px', md: '16px' }, fontFamily: 'Urbanist', fontWeight: 500, color: '#999' }}>Years of Experience</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box maxWidth={"90%"} sx={{
                        "& img": {
                            height: '100%',
                            width: '100%'
                        }
                    }}>
                        <img src={images.HomeImage} alt="Home" />
                    </Box>
                </Box>
                <Box className="discover-box" maxWidth={'100%'} sx={{ py: 2, border: 2, color: '#262626', height: '100%', width: { xs: '90%', md: '100%' }, borderRadius: { xs: '10px', md: '0px' }, alignContent: 'center', display: 'flex', placeContent: 'center' }}>
                    <Box sx={{ width: { xs: '90%', md: '98%' } }}>
                        <Grid container sx={{ rowGap: 4 }}>
                            <Grid xs={6} md={3}>
                                <Box className='home-box-2' sx={{ fontSize: { xs: '14px', md: '16px' }, fontFamily: 'Urbanist', fontWeight: '600', px: { xs: '14px', md: '18px' }, pb: '20px', width: '80%', height: '100%', placeItems: 'center', display: 'grid', gap: 0.5 }}>
                                    <NorthEastIcon sx={{ placeSelf: 'self-end', color: '#4D4D4D' }} />
                                    <img src={icons.HomeIcon} alt="Home icon" />
                                    <Typography sx={{ color: 'white', textAlign: 'center' }}>
                                        Find Your Dream Home
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={6} md={3}>
                                <Box className='home-box-2' sx={{ fontSize: { xs: '14px', md: '16px' }, fontFamily: 'Urbanist', fontWeight: '600', px: { xs: '14px', md: '18px' }, pb: '20px', width: '80%', height: '100%', placeItems: 'center', display: 'grid', gap: 0.5 }}>
                                    <NorthEastIcon sx={{ placeSelf: 'self-end', color: '#4D4D4D' }} />
                                    <img src={icons.ValueIcon} alt="Value icon" />
                                    <Typography sx={{ color: 'white', textAlign: 'center' }}>
                                        Unlock Property Value
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={6} md={3}>
                                <Box className='home-box-2' sx={{ fontSize: { xs: '14px', md: '16px' }, fontFamily: 'Urbanist', fontWeight: '600', px: { xs: '14px', md: '18px' }, pb: '20px', width: '80%', height: '100%', placeItems: 'center', display: 'grid', gap: 0.5 }}>
                                    <NorthEastIcon sx={{ placeSelf: 'self-end', color: '#4D4D4D' }} />
                                    <img src={icons.ManagementIcon} alt="Management icon" />
                                    <Typography sx={{ color: 'white', textAlign: 'center' }}>
                                        Effortless Property Management
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={6} md={3}>
                                <Box className='home-box-2' sx={{ fontSize: { xs: '14px', md: '16px' }, fontFamily: 'Urbanist', fontWeight: '600', px: { xs: '14px', md: '18px' }, pb: '20px', width: '80%', height: '100%', placeItems: 'center', display: 'grid', gap: 0.5 }}>
                                    <NorthEastIcon sx={{ placeSelf: 'self-end', color: '#4D4D4D' }} />
                                    <img src={icons.DecisionIcon} alt="Decision icon" />
                                    <Typography sx={{ color: 'white', textAlign: 'center', display: 'flex' }}>
                                        Smart Investments, Informed Decisions
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box maxWidth='95%' sx={{ display: 'grid', rowGap: 2 }}>
                    <Box sx={{ display: { xs: 'grid', md: 'flex' }, rowGap: 2, placeContent: 'center', placeItems: 'center ' }}>
                        <Box sx={{ width: '87%' }}>
                            <img src={icons.Stars} alt="stars" />
                            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', fontStyle: 'normal', fontWeight: '600', fontSize: { xs: "20px", md: '30px' }, alignSelf: 'stretch' }}>
                                Featured Properties
                            </Typography>
                            <Typography sx={{ mt: '3', mr: 1, color: '#999', fontFamily: 'Urbanist', fontStyle: 'normal', fontSize: { xs: "14px", sm: '16px' }, fontWeight: '500', alignSelf: 'stretch' }}>
                                Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.
                            </Typography>
                        </Box>
                        <Button className='btn-visit' variant='contained' sx={{ fontSize: '14px', fontFamily: 'Urbanist', borderRadius: '8px', alignSelf: 'end', color: 'white', bgcolor: "#141414", border: 0.5, borderColor: 'gray' }} onClick={() => { navigate('/properties') }}>View All Properties</Button>
                    </Box>
                    <Box>
                        <Grid container columnSpacing={1.5} sx={{ rowGap: 2 }}>
                            {
                                currentProperty.map((data, index) =>
                                    <Grid xs={12} sm={6} md={4}>
                                        <PropertyCard key={index} data={data} />
                                    </Grid>
                                )
                            }
                        </Grid>
                    </Box>
                    <Divider sx={{ border: 1, borderColor: '#262626', mt: 1 }} />
                    <Box maxWidth={'100%'} sx={{ width: '100%', display: 'flex', placeContent: 'space-between   ', alignItems: 'center' }}>
                        <Box maxWidth={'100%'} sx={{ display: 'flex', gap: 1, placeItems: 'center', alignItems: 'center' }}>
                            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: '20px', fontWeight: 500 }}>
                                {currentPage}
                            </Typography>
                            <Typography sx={{ color: '#666', fontFamily: 'Urbanist', fontSize: '20px', fontWeight: 500, wordSpacing: 5 }}>
                                of  {(Math.ceil(data.length / propertyPerPage))}
                            </Typography>
                        </Box>
                        <Box sx={{ bgcolor: '#141414', display: 'flex', borderRadius: '100px' }}>
                            <IconButton sx={{ border: 1, borderColor: '#666', margin: '8px' }} onClick={displayPreviousProperty}><ArrowBackOutlinedIcon sx={{ height: '24px', width: '24px', color: 'white', borderColor: '#666' }} /></IconButton>
                            <IconButton sx={{ border: 1, borderColor: '#666', margin: '8px' }} onClick={displayNextProperty}><ArrowForwardOutlinedIcon sx={{ height: '24px', width: '24px', color: 'white', borderColor: '#666' }} /></IconButton>
                        </Box>
                    </Box>
                </Box>
                <Box maxWidth='95%' sx={{ display: 'grid', rowGap: 2 }}>
                    <Box sx={{ display: { xs: 'grid', md: 'flex' }, rowGap: 2, placeContent: 'center', placeItems: 'center ' }}>
                        <Box sx={{ width: '87%' }}>
                            <img src={icons.Stars} alt="stars" />
                            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', fontStyle: 'normal', fontWeight: '600', fontSize: { xs: "20px", md: '30px' }, alignSelf: 'stretch' }}>
                                What Our Clients Say
                            </Typography>
                            <Typography sx={{ mt: '3', mr: 1, color: '#999', fontFamily: 'Urbanist', fontStyle: 'normal', fontSize: { xs: "14px", sm: '16px' }, fontWeight: '500', alignSelf: 'stretch' }}>
                                Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
                            </Typography>
                        </Box>
                        <Button className='btn-visit' variant='contained' sx={{ fontSize: '14px', fontFamily: 'Urbanist', borderRadius: '8px', alignSelf: 'end', color: 'white', bgcolor: "#141414", border: 0.5, borderColor: 'gray' }} onClick={() => { navigate('/review-page') }}>View All Reviews</Button>
                    </Box>
                    <Box>
                        <Grid container columnSpacing={1.5} sx={{ rowGap: 2 }}>
                            {console.log(currentReview)}
                            {
                                currentReview.map((props, index) =>
                                    <Grid xs={12} sm={6} md={4}>
                                        <ReviewCard key={index} data={props} />
                                    </Grid>
                                )
                            }
                        </Grid>
                    </Box>
                    <Divider sx={{ border: 1, borderColor: '#262626', mt: 1 }} />
                    <Box maxWidth={'100%'} sx={{ width: '100%', display: 'flex', placeContent: 'space-between   ', alignItems: 'center' }}>
                        <Box maxWidth={'100%'} sx={{ display: 'flex', gap: 1, placeItems: 'center', alignItems: 'center' }}>
                            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: '20px', fontWeight: 500 }}>
                                {currentReviewPage}
                            </Typography>
                            <Typography sx={{ color: '#666', fontFamily: 'Urbanist', fontSize: '20px', fontWeight: 500, wordSpacing: 5 }}>
                                of  {(Math.ceil(reviews.length / reviewPerPage))}
                            </Typography>
                        </Box>
                        <Box sx={{ bgcolor: '#141414', display: 'flex', borderRadius: '100px' }}>
                            <IconButton sx={{ border: 1, borderColor: '#666', margin: '8px' }} onClick={displayPreviousReview}><ArrowBackOutlinedIcon sx={{ height: '24px', width: '24px', color: 'white', borderColor: '#666' }} /></IconButton>
                            <IconButton sx={{ border: 1, borderColor: '#666', margin: '8px' }} onClick={displayNextReview}><ArrowForwardOutlinedIcon sx={{ height: '24px', width: '24px', color: 'white', borderColor: '#666' }} /></IconButton>
                        </Box>
                    </Box>
                </Box>
                <Faqs/>
            </Box>
        </>
    )
}

export default Home