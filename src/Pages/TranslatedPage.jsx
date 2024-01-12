import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Grid from "@mui/material/Unstable_Grid2";
import CallMadeIcon from '@mui/icons-material/CallMade';
import { icons } from '../Assets/Icons/Index';
import Stars from '../Assets/Icons/Stars';
import { images } from '../Assets/Images/Index';
import { useTranslation } from "react-i18next";


const TranslatedPage = () => {
    const {t} = useTranslation();
    return (
        <>
            <Box maxWidth={'100%'} sx={{ pb: 5, height: '100%', bgcolor: '#141414', placeItems: 'center', display: 'grid', rowGap: 10 }}>
                <Box maxWidth={'100%'} className="heading-box" sx={{ width: '100%', borderBottom: 0, padding: { md: ' 100px 200px 80px 80px', sm: ' 50px 80px 65px 40px', xs: ' 30px 40px 30px 20px' }, placeContent: 'center', placeItems: 'center', alignItems: 'center', display: 'grid' }}>
                    <Typography sx={{ width: '90%', fontFamily: 'Urbanist', fontSize: { xs: '28px', sm: '32px', md: '38px' }, fontWeight: '600', color: 'white' }}>
                        {t('line16')}
                    </Typography>
                    <Typography sx={{ width: '90%', fontFamily: 'Urbanist', fontSize: { xs: '14px', sm: '15px', md: '16px' }, fontWeight: '500', color: '#999' }}>
                        {t('line19')}
                    </Typography>
                </Box>
                <Box maxWidth={'100%'} className='shadow-box' sx={{ mt: 0, width: '100%', p: '10px', display: 'grid' }}>
                    <Grid container spacing={1} sx={{ width: '100%' }}>
                        <Grid xs={6} md={3}>
                            <Box maxWidth={'100%'} sx={{ '& img': { placeSelf: 'center' }, position: 'relative', width: '100%', bgcolor: '#1A1A1A', pt: '30px', pb: '30px', border: 1, borderColor: '#262626', borderRadius: '10px', justifyContent: 'center', display: 'grid', rowGap: 2 }}>
                                <CallMadeIcon sx={{ position: 'absolute', right: '19px', top: '20px', fill: '#4D4D4D', width: '26px', height: '26px' }} />
                                <img src={icons.HomeIcon} alt="Home icon" />
                                <Typography sx={{ fontFamily: 'Urbanist', fontWeight: 500, fontSize: { xs: '14px', sm: '16px' }, color: 'white' }}>
                                    {t('line29')}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid xs={6} md={3}>
                            <Box maxWidth={'100%'} sx={{ '& img': { placeSelf: 'center' }, position: 'relative', width: '100%', bgcolor: '#1A1A1A', pt: '30px', pb: '30px', border: 1, borderColor: '#262626', borderRadius: '10px', justifyContent: 'center', display: 'grid', rowGap: 2 }}>
                                <CallMadeIcon sx={{ position: 'absolute', right: '19px', top: '20px', fill: '#4D4D4D', width: '26px', height: '26px' }} />
                                <img src={icons.ValueIcon} alt="Home icon" />
                                <Typography sx={{ fontFamily: 'Urbanist', fontWeight: 500, fontSize: { xs: '14px', sm: '16px' }, color: 'white' }}>
                                    {t('line38')}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid xs={6} md={3}>
                            <Box maxWidth={'100%'} sx={{ '& img': { placeSelf: 'center' }, position: 'relative', width: '100%', bgcolor: '#1A1A1A', pt: '30px', pb: '30px', border: 1, borderColor: '#262626', borderRadius: '10px', justifyContent: 'center', display: 'grid', rowGap: 2 }}>
                                <CallMadeIcon sx={{ position: 'absolute', right: '19px', top: '20px', fill: '#4D4D4D', width: '26px', height: '26px' }} />
                                <img src={icons.ManagementIcon} alt="Home icon" />
                                <Typography sx={{ fontFamily: 'Urbanist', fontWeight: 500, fontSize: { xs: '14px', sm: '16px' }, color: 'white' }}>
                                    {t('line47')}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid xs={6} md={3}>
                            <Box maxWidth={'100%'} sx={{ '& img': { placeSelf: 'center' }, justifyItems: 'center', position: 'relative', width: '100%', bgcolor: '#1A1A1A', pt: '30px', pb: '30px', border: 1, borderColor: '#262626', borderRadius: '10px', justifyContent: 'center', display: 'grid', rowGap: 2 }}>
                                <CallMadeIcon sx={{ position: 'absolute', right: '19px', top: '20px', fill: '#4D4D4D', width: '26px', height: '26px' }} />
                                <img src={icons.DecisionIcon} alt="Home icon" />
                                <Typography sx={{ fontFamily: 'Urbanist', fontWeight: 500, fontSize: { xs: '14px', sm: '16px' }, color: 'white' }}>
                                    {t('line56')}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box maxWidth={'100%'} sx={{ width: '90%', display: 'grid', rowGap: 3 }}>
                    <Box maxWidth={'100%'} sx={{ width: { xs: '100%', sm: '80%' }, display: 'grid', gap: 1 }}>
                        <Stars />
                        <Typography sx={{ fontFamily: 'Urbanist', color: 'white', fontSize: { xs: '28px', sm: '32px', md: '36px' }, fontWeight: '600' }}>
                            {t('line66')}
                        </Typography>
                        <Typography sx={{ fontFamily: 'Urbanist', color: '#999', fontSize: { xs: '14px', md: '16px' }, fontWeight: '500' }}>
                            {t('line69')}
                        </Typography>
                    </Box>
                    <Box maxWidth={'100%'} sx={{ width: '100%' }}>
                        <Grid container spacing={2}>
                            <Grid xs={12} sm={6} md={4}>
                                <Box sx={{ border: 1, borderColor: '#262626', height: '100%', borderRadius: '10px', }}>
                                    <Box maxWidth={'100%'} sx={{ width: '75%', m: '40px', display: 'grid', rowGap: 2, placeItems: 'center' }}>
                                        <Box sx={{ width: '100%', display: 'flex', placeItems: 'center', gap: 3 }}>
                                            <img src={icons.GraphIcon} alt="icon" />
                                            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: { xs: '18px', md: '22px' }, fontWeight: 600 }}>
                                                {t('line80')}
                                            </Typography>
                                        </Box>
                                        <Typography sx={{ color: '#999', fontFamily: 'Urbanist', fontSize: { xs: '16px', md: '14px' }, fontWeight: 500 }}>
                                            {t('line84')}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={6} md={4}>
                                <Box sx={{ border: 1, borderColor: '#262626', height: '100%', borderRadius: '10px', }}>
                                    <Box maxWidth={'100%'} sx={{ width: '75%', m: '40px', display: 'grid', rowGap: 2, placeItems: 'center' }}>
                                        <Box sx={{ width: '100%', display: 'flex', placeItems: 'center', gap: 3 }}>
                                            <img src={icons.CutCircleIcon} alt="icon" />
                                            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: { xs: '18px', md: '22px' }, fontWeight: 600 }}>
                                                Strategic Marketing
                                            </Typography>

                                        </Box>
                                        <Typography sx={{ color: '#999', fontFamily: 'Urbanist', fontSize: { xs: '16px', md: '14px' }, fontWeight: 500 }}>
                                            Selling a property requires more than just a listing; it demands a strategic marketing.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={6} md={4}>
                                <Box sx={{ border: 1, borderColor: '#262626', height: '100%', borderRadius: '10px', }}>
                                    <Box maxWidth={'100%'} sx={{ width: '75%', m: '40px', display: 'grid', rowGap: 2, placeItems: 'center' }}>
                                        <Box sx={{ width: '100%', display: 'flex', placeItems: 'center', gap: 3 }}>
                                            <img src={icons.CoinIcon} alt="icon" />
                                            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: { xs: '18px', md: '22px' }, fontWeight: 600 }}>
                                                Negotiation Wizardry
                                            </Typography>
                                        </Box>
                                        <Typography sx={{ color: '#999', fontFamily: 'Urbanist', fontSize: { xs: '16px', md: '14px' }, fontWeight: 500 }}>
                                            Negotiating the best deal is an art, and our negotiation experts are masters of it.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={6} md={4}>
                                <Box sx={{ border: 1, borderColor: '#262626', height: '100%', borderRadius: '10px', }}>
                                    <Box maxWidth={'100%'} sx={{ width: '75%', m: '40px', display: 'grid', rowGap: 2, placeItems: 'center' }}>
                                        <Box sx={{ width: '100%', display: 'flex', placeItems: 'center', gap: 3 }}>
                                            <img src={icons.NotificationIcon} alt="icon" />
                                            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: { xs: '18px', md: '22px' }, fontWeight: 600 }}>
                                                Closing Success
                                            </Typography>
                                        </Box>
                                        <Typography sx={{ color: '#999', fontFamily: 'Urbanist', fontSize: { xs: '16px', md: '14px' }, fontWeight: 500 }}>
                                            A successful sale is not complete until the closing. We guide you through the intricate closing process.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={8}>
                                <Box sx={{ border: 1, borderColor: '#262626', backgroundImage: `url(${images.Vector})`, bgcolor: '#1A1A1A', height: '100%', borderRadius: '10px', display: 'grid' }}>
                                    <Box sx={{ margin: '40px', display: 'grid', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{ display: { xs: 'grid', sm: 'flex' }, rowGap: { xs: 2, sm: 0 }, placeItems: 'center', placeContent: 'space-between' }}>
                                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: '24px', color: 'white', fontWeight: 700 }}>
                                                Unlock the Value of Your Property Today
                                            </Typography>
                                            <Button size='medium' sx={{ bgcolor: '#141414', borderRadius: '8px', color: 'white' }}>Learn More</Button>
                                        </Box>
                                        <Typography sx={{ fontFamily: 'Urbanist', fontSize: '16px', color: '#999', fontWeight: 500 }}>
                                            Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box maxWidth={'100%'} sx={{ width: '90%', display: 'grid', rowGap: 3 }}>
                    <Box maxWidth={'100%'} sx={{ width: { xs: '100%', sm: '80%' }, display: 'grid', gap: 1 }}>
                        <Stars />
                        <Typography sx={{ fontFamily: 'Urbanist', color: 'white', fontSize: { xs: '28px', sm: '32px', md: '36px' }, fontWeight: '600' }}>
                            Unlock Property Value
                        </Typography>
                        <Typography sx={{ fontFamily: 'Urbanist', color: '#999', fontSize: { xs: '14px', md: '16px' }, fontWeight: '500' }}>
                            Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey
                        </Typography>
                    </Box>
                    <Box maxWidth={'100%'} sx={{ width: '100%' }}>
                        <Grid container spacing={2}>
                            <Grid xs={12} sm={6} md={4}>
                                <Box sx={{ border: 1, borderColor: '#262626', height: '100%', borderRadius: '10px', }}>
                                    <Box maxWidth={'100%'} sx={{ width: '75%', m: '40px', display: 'grid', rowGap: 2, placeItems: 'center' }}>
                                        <Box sx={{ width: '100%', display: 'flex', placeItems: 'center', gap: 3 }}>
                                            <img src={icons.MenuIcon} alt="icon" />
                                            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: { xs: '18px', md: '22px' }, fontWeight: 600 }}>
                                                Tenant Harmony
                                            </Typography>
                                        </Box>
                                        <Typography sx={{ color: '#999', fontFamily: 'Urbanist', fontSize: { xs: '16px', md: '14px' }, fontWeight: 500 }}>
                                            Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={6} md={4}>
                                <Box sx={{ border: 1, borderColor: '#262626', height: '100%', borderRadius: '10px', }}>
                                    <Box maxWidth={'100%'} sx={{ width: '75%', m: '40px', display: 'grid', rowGap: 2, placeItems: 'center' }}>
                                        <Box sx={{ width: '100%', display: 'flex', placeItems: 'center', gap: 3 }}>
                                            <img src={icons.CardIcon} alt="icon" />
                                            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: { xs: '18px', md: '22px' }, fontWeight: 600 }}>
                                                Maintenance Ease
                                            </Typography>

                                        </Box>
                                        <Typography sx={{ color: '#999', fontFamily: 'Urbanist', fontSize: { xs: '16px', md: '14px' }, fontWeight: 500 }}>
                                            Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={6} md={4}>
                                <Box sx={{ border: 1, borderColor: '#262626', height: '100%', borderRadius: '10px', }}>
                                    <Box maxWidth={'100%'} sx={{ width: '75%', m: '40px', display: 'grid', rowGap: 2, placeItems: 'center' }}>
                                        <Box sx={{ width: '100%', display: 'flex', placeItems: 'center', gap: 3 }}>
                                            <img src={icons.ShineIcon} alt="icon" />
                                            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: { xs: '18px', md: '22px' }, fontWeight: 600 }}>
                                                Financial Peace of Mind
                                            </Typography>
                                        </Box>
                                        <Typography sx={{ color: '#999', fontFamily: 'Urbanist', fontSize: { xs: '16px', md: '14px' }, fontWeight: 500 }}>
                                            Managing property finances can be complex. Our financial experts take care of rent collection
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={6} md={4}>
                                <Box sx={{ border: 1, borderColor: '#262626', height: '100%', borderRadius: '10px', }}>
                                    <Box maxWidth={'100%'} sx={{ width: '75%', m: '40px', display: 'grid', rowGap: 2, placeItems: 'center' }}>
                                        <Box sx={{ width: '100%', display: 'flex', placeItems: 'center', gap: 3 }}>
                                            <img src={icons.BriteIcon} alt="icon" />
                                            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: { xs: '18px', md: '22px' }, fontWeight: 600 }}>
                                                Legal Guardian
                                            </Typography>
                                        </Box>
                                        <Typography sx={{ color: '#999', fontFamily: 'Urbanist', fontSize: { xs: '16px', md: '14px' }, fontWeight: 500 }}>
                                            Stay compliant with property laws and regulations effortlessly.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={8}>
                                <Box sx={{ border: 1, borderColor: '#262626', backgroundImage: `url(${images.Vector})`, bgcolor: '#1A1A1A', height: '100%', borderRadius: '10px', display: 'grid' }}>
                                    <Box sx={{ margin: '40px', display: 'grid', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{ display: { xs: 'grid', sm: 'flex' }, rowGap: { xs: 2, sm: 0 }, placeItems: 'center', placeContent: 'space-between' }}>
                                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: '24px', color: 'white', fontWeight: 700 }}>
                                                Experience Effortless Property Management
                                            </Typography>
                                            <Button size='medium' sx={{ bgcolor: '#141414', borderRadius: '8px', color: 'white' }}>Learn More</Button>
                                        </Box>
                                        <Typography sx={{ fontFamily: 'Urbanist', fontSize: '16px', color: '#999', fontWeight: 500 }}>
                                            Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box maxWidth={'100%'} sx={{ height: '100%', width: '90%', display: { xs: 'grid', md: 'flex' }, rowGap: 3, columnGap: 3 }}>
                    <Box maxWidth={'100%'} sx={{ height: '100%', width: { xs: '100%', md: 1 / 3 }, display: 'grid', gap: 3 }}>
                        <Box sx={{ display: 'grid' }}>
                            <Stars />
                            <Typography sx={{ fontFamily: 'Urbanist', color: 'white', fontSize: { xs: '28px', sm: '32px', md: '36px' }, fontWeight: '600' }}>
                                Unlock Property Value
                            </Typography>
                            <Typography sx={{ fontFamily: 'Urbanist', color: '#999', fontSize: { xs: '14px', md: '16px' }, fontWeight: '500' }}>
                                Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey
                            </Typography>
                        </Box>
                        <Box sx={{ border: 1, borderColor: '#262626', backgroundImage: `url(${images.Vector})`, bgcolor: '#1A1A1A', height: '100%', borderRadius: '10px', display: 'grid' }}>
                            <Box sx={{ margin: '40px', display: 'grid', alignItems: 'center', gap: 2 }}>
                                <Typography sx={{ fontFamily: 'Urbanist', fontSize: '24px', color: 'white', fontWeight: 700 }}>
                                    Experience Effortless Property Management
                                </Typography>
                                <Typography sx={{ fontFamily: 'Urbanist', fontSize: '16px', color: '#999', fontWeight: 500 }}>
                                    Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
                                </Typography>
                                <Button size='medium' sx={{ bgcolor: '#141414', borderRadius: '8px', color: 'white' }}>Learn More</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box maxWidth={'100%'} sx={{ pb: '10px', height: '100%', bgcolor: '#1A1A1A', borderRadius: '12px', width: { xs: '100%', md: 2 / 3 }, display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', m: '10px' }}>
                            <Grid container spacing={'10px'} sx={{ height: '100%', mb: '10px' }}>
                                <Grid xs={12} sm={6}>
                                    <Box className='card-box' sx={{ height: '100%', display: 'grid', placeContent: 'center' }}>
                                        <Box sx={{ m: { xs: '24px', sm: '30px', md: '40px' } }}>
                                            <Box sx={{ width: '100%', display: 'flex', placeItems: 'center', gap: 3 }}>
                                                <img src={icons.GraphIcon} alt="icon" />
                                                <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: { xs: '18px', md: '22px' }, fontWeight: 600 }}>
                                                    Market Insight
                                                </Typography>
                                            </Box>
                                            <Typography sx={{ color: '#999', fontFamily: 'Urbanist', fontSize: { xs: '16px', md: '14px' }, fontWeight: 500 }}>
                                                Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid xs={12} sm={6}>
                                    <Box className='card-box' sx={{ height: '100%', display: 'grid', placeContent: 'center' }}>
                                        <Box sx={{ m: { xs: '24px', sm: '30px', md: '40px' } }}>
                                            <Box sx={{ width: '100%', display: 'flex', placeItems: 'center', gap: 3 }}>
                                                <img src={icons.FireIcon} alt="icon" />
                                                <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: { xs: '18px', md: '22px' }, fontWeight: 600 }}>
                                                    ROI Assessment
                                                </Typography>
                                            </Box>
                                            <Typography sx={{ color: '#999', fontFamily: 'Urbanist', fontSize: { xs: '16px', md: '14px' }, fontWeight: 500 }}>
                                                Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid xs={12} sm={6}>
                                    <Box className='card-box' sx={{ height: '100%', display: 'grid', placeContent: 'center' }}>
                                        <Box sx={{ m: { xs: '24px', sm: '30px', md: '40px' } }}>
                                            <Box sx={{ width: '100%', display: 'flex', placeItems: 'center', gap: 3 }}>
                                                <img src={icons.BulbIcon} alt="icon" />
                                                <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: { xs: '18px', md: '22px' }, fontWeight: 600 }}>
                                                    Customized Strategies
                                                </Typography>
                                            </Box>
                                            <Typography sx={{ color: '#999', fontFamily: 'Urbanist', fontSize: { xs: '16px', md: '14px' }, fontWeight: 500 }}>
                                                Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid xs={12} sm={6}>
                                    <Box className='card-box' sx={{ height: '100%', display: 'grid', placeContent: 'center' }}>
                                        <Box sx={{ m: { xs: '24px', sm: '30px', md: '40px' } }}>
                                            <Box sx={{ width: '100%', display: 'flex', placeItems: 'center', gap: 3 }}>
                                                <img src={icons.BriteIcon} alt="icon" />
                                                <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: { xs: '18px', md: '22px' }, fontWeight: 600 }}>
                                                    Diversification Mastery
                                                </Typography>
                                            </Box>
                                            <Typography sx={{ color: '#999', fontFamily: 'Urbanist', fontSize: { xs: '16px', md: '14px' }, fontWeight: 500 }}>
                                                Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default TranslatedPage