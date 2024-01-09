import React, { useState } from 'react'
import faqs from '../Data/Faqs.json'
import { Box, Button, Divider, Grid, IconButton, Typography } from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { icons } from '../Assets/Icons/Index';
const Faqs = () => {

    const [currentFaqPage, setCurrentFaqPage] = useState(1)
    const [faqPerPage, setFaqPerPage] = useState(3)
    const lastFaqIndex = currentFaqPage * faqPerPage;
    const firstFaqIndex = lastFaqIndex - faqPerPage;
    const currentFaq = faqs.slice(firstFaqIndex, lastFaqIndex);

    const displayNextFaq = () => {
        if (currentFaqPage === (Math.ceil(faqs.length / faqPerPage))) {
            setCurrentFaqPage(currentFaqPage)
        }
        else {
            setCurrentFaqPage(currentFaqPage + 1)
        }
    }
    const displayPreviousFaq = () => {
        if (currentFaqPage === 1) {
            setCurrentFaqPage(currentFaqPage)
        }
        else {
            setCurrentFaqPage(currentFaqPage - 1)
        }
    }



    return (
        <>
            <Box maxWidth='100%' sx={{ bgcolor: '#141414', placeContent: 'center', placeItems: 'center', justifyContent: 'center', display: 'grid', gap: 7 }}>
                <Box maxWidth='95%' sx={{ display: 'grid', rowGap: 2 }}>
                    <Box sx={{ display: { xs: 'grid', md: 'flex' }, rowGap: 2, placeContent: 'center',alignItems:'center'    }}>
                        <Box sx={{ width: '87%' }}>
                            <img src={icons.Stars} alt="stars" />
                            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', fontStyle: 'normal', fontWeight: '600', fontSize: { xs: "20px", md: '30px' }, alignSelf: 'stretch' }}>
                                Frequently Asked Questions
                            </Typography>
                            <Typography sx={{ mt: '3', mr: 1, color: '#999', fontFamily: 'Urbanist', fontStyle: 'normal', fontSize: { xs: "14px", sm: '16px' }, fontWeight: '500', alignSelf: 'stretch' }}>
                                Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
                            </Typography>
                        </Box>
                        <Button className='btn-visit' variant='contained' sx={{ fontSize: '14px', fontFamily: 'Urbanist', borderRadius: '8px', alignSelf: 'end', color: 'white', bgcolor: "#141414", border: 0.5, borderColor: 'gray' }} onClick={() => { }}>View All FAQ's</Button>
                    </Box>
                    <Box>
                        <Grid container columnSpacing={1.5} sx={{ rowGap: 2 }}>
                            {
                                currentFaq.map((faq) =>
                                    <Grid xs={12} sm={6} md={4}>
                                        <Box maxWidth={'100%'} sx={{ height: '100%', placeContent: 'center', display: 'grid', border: 1, borderColor: '#262626', borderRadius: '10px' }}>
                                            <Box maxWidth={'100%'} sx={{ width: '80%', display: 'grid', gap: '30px', margin: { xs: '30px', md: '40px' } }}>
                                                <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '18px', sm: '20px' }, color: 'white', fontWeight: 600 }}>
                                                    {faq.question}
                                                </Typography>
                                                <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '14px', sm: '16px' }, color: '#666', fontWeight: 500 }}>
                                                    {faq.answer}
                                                </Typography>
                                            </Box>
                                            </Box>
                                    </Grid>
                                )
                            }
                        </Grid>
                    </Box>
                    <Divider sx={{ border: 1, borderColor: '#262626', mt: 1 }} />
                    <Box maxWidth={'100%'} sx={{ width: '100%', display: 'flex', placeContent: 'space-between   ', alignItems: 'center' }}>
                        <Box maxWidth={'100%'} sx={{ display: 'flex', gap: 1, placeItems: 'center', alignItems: 'center' }}>
                            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: '20px', fontWeight: 500 }}>
                                {currentFaqPage}
                            </Typography>
                            <Typography sx={{ color: '#666', fontFamily: 'Urbanist', fontSize: '20px', fontWeight: 500, wordSpacing: 5 }}>
                                of  {(Math.ceil(faqs.length / faqPerPage))}
                            </Typography>
                        </Box>
                        <Box sx={{ bgcolor: '#141414', display: 'flex', borderRadius: '100px' }}>
                            <IconButton sx={{ border: 1, borderColor: '#666', margin: '8px' }} onClick={displayPreviousFaq}><ArrowBackOutlinedIcon sx={{ height: '24px', width: '24px', color: 'white', borderColor: '#666' }} /></IconButton>
                            <IconButton sx={{ border: 1, borderColor: '#666', margin: '8px' }} onClick={displayNextFaq}><ArrowForwardOutlinedIcon sx={{ height: '24px', width: '24px', color: 'white', borderColor: '#666' }} /></IconButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Faqs