import { Autocomplete, Box, Button, Checkbox, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import CallIcon from '@mui/icons-material/Call';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import EmailIcon from '@mui/icons-material/Email';


const MessageForm = () => {

    const preferredLocations = [
        'New York City, USA',
        'London, UK',
        'Tokyo, Japan',
        'Dubai, UAE',
        'Singapore',
        'Sydney, Australia',
        'Hong Kong',
        'Mumbai, India',
        'Berlin, Germany',
        'Cape Town, South Africa',
        'Vancouver, Canada',
        'Barcelona, Spain',
        'Shanghai, China',
        'São Paulo, Brazil',
        'Stockholm, Sweden',
    ];
    const propertyTypes = [
        'Single-Family Home',
        'Multi-Family Home',
        'Condominium (Condo)',
        'Townhouse',
        'Commercial Property',
        'Vacant Land',
        'Industrial Property',
        'Mixed-Use Property',
        'Retail Property',
        'Luxury Property',
    ];
    const noOfBathrooms = [1, 2, 3, 4, 5, 6, 7, 8];
    const noOfBedrooms = [1, 2, 3, 4, 5, 6, 7, 8];
    const budgetRanges = [
        '$100,000 - $250,000',
        '$250,000 - $500,000',
        '$500,000 - $750,000',
        '$750,000 - $1,000,000',
        '$1,000,000 - $1,500,000',
        '$1,500,000 - $2,000,000',
        '$2,000,000 - $3,000,000',
        '$3,000,000 - $5,000,000',
        '$5,000,000 - $10,000,000',
        '$10,000,000+',
    ];

    return (
        <>
            <Box maxWidth={'100%'} sx={{ width: '100%', display: 'grid', placeItems: 'center', bgcolor: '#141414' }}>
                <Box maxWidth={'80%'} sx={{ width: '80%', border: 1, borderRadius: '12px', borderColor: '#262626', padding: { xs: '20px', sm: '30px', md: '50px' } }}>
                    <Grid container spacing={2} rowGap={{ xs: '20px', md: '30px' }}>
                        <Grid maxWidth={'100%'} xs={12} sm={6} md={4} lg={3}>
                            <Box sx={{ display: 'grid', rowGap: 2 }}>
                                <InputLabel sx={{ color: 'white' }}>First Name</InputLabel>
                                <Input className='input-field' placeholder='Enter First Name' sx={{ color: 'white' }}></Input>
                            </Box>
                        </Grid>
                        <Grid maxWidth={'100%'} xs={12} sm={6} md={4} lg={3}>
                            <Box sx={{ display: 'grid', rowGap: 2 }}>
                                <InputLabel sx={{ color: 'white' }}>Last Name</InputLabel>
                                <Input className='input-field' placeholder='Enter Last Name' sx={{ color: 'white' }}></Input>
                            </Box>
                        </Grid>
                        <Grid maxWidth={'100%'} xs={12} sm={6} md={4} lg={3}>
                            <Box sx={{ display: 'grid', rowGap: 2 }}>
                                <InputLabel sx={{ color: 'white' }}>Email</InputLabel>
                                <Input className='input-field' placeholder='Enter Email' sx={{ color: 'white' }}></Input>
                            </Box>
                        </Grid>
                        <Grid maxWidth={'100%'} xs={12} sm={6} md={4} lg={3}>
                            <Box sx={{ display: 'grid', rowGap: 2 }}>
                                <InputLabel sx={{ color: 'white' }}>Phone</InputLabel>
                                <Input className='input-field' placeholder='Enter Phone Nubmer' sx={{ color: 'white' }}></Input>
                            </Box>
                        </Grid>
                        <Grid maxWidth={'100%'} xs={12} sm={6} md={4} lg={3}>
                            <Box sx={{ display: 'grid', rowGap: 1, color: 'white', rowGap: 2 }}>
                                <InputLabel sx={{ color: 'white' }}>Preferred Location</InputLabel>
                                <Autocomplete className='select-inquiry' options={preferredLocations} sx={{ color: 'white', "& .MuiSvgIcon-root": { fill: 'white' } }}
                                    popupIcon={<KeyboardArrowDownIcon sx={{ fill: 'white', bgcolor: '#1A1A1A', borderRadius: '100px', height: '25px', width: '25px', '& .MuiButtonBase-root': { color: '#999999' } }} />}
                                    renderInput={(params) => <TextField {...params} InputLabelProps={{
                                        style: { color: '#999' }
                                    }} label='Select Location' />} />
                            </Box>
                        </Grid>
                        <Grid maxWidth={'100%'} xs={12} sm={6} md={4} lg={3}>
                            <Box sx={{ display: 'grid', rowGap: 1, color: 'white', rowGap: 2 }}>
                                <InputLabel sx={{ color: 'white' }}>Property Type</InputLabel>
                                <Autocomplete className='select-inquiry' options={propertyTypes} sx={{ color: 'white', "& .MuiSvgIcon-root": { fill: 'white' } }}
                                    popupIcon={<KeyboardArrowDownIcon sx={{ fill: 'white', bgcolor: '#1A1A1A', borderRadius: '100px', height: '25px', width: '25px', '& .MuiButtonBase-root': { color: '#999999' } }} />}
                                    renderInput={(params) => <TextField {...params} InputLabelProps={{
                                        style: { color: '#999' }
                                    }} label='Select Property Type' />} />
                            </Box>
                        </Grid>
                        <Grid maxWidth={'100%'} xs={12} sm={6} md={4} lg={3}>
                            <Box sx={{ display: 'grid', rowGap: 1, color: 'white', rowGap: 2 }}>
                                <InputLabel sx={{ color: 'white' }}>No. of Bathrooms</InputLabel>
                                <Autocomplete className='select-inquiry' options={noOfBathrooms} sx={{ color: 'white', "& .MuiSvgIcon-root": { fill: 'white' } }}
                                    popupIcon={<KeyboardArrowDownIcon sx={{ fill: 'white', bgcolor: '#1A1A1A', borderRadius: '100px', height: '25px', width: '25px', '& .MuiButtonBase-root': { color: '#999999' } }} />}
                                    renderInput={(params) => <TextField {...params} InputLabelProps={{
                                        style: { color: '#999' }
                                    }} label='Select no. of Bathrooms' />} />
                            </Box>
                        </Grid>
                        <Grid maxWidth={'100%'} xs={12} md={4} lg={3}>
                            <Box sx={{ display: 'grid', rowGap: 1, color: 'white', rowGap: 2 }}>
                                <InputLabel sx={{ color: 'white' }}>No. of Bedrooms</InputLabel>
                                <Autocomplete className='select-inquiry' options={noOfBedrooms} sx={{ color: 'white', "& .MuiSvgIcon-root": { fill: 'white' } }}
                                    popupIcon={<KeyboardArrowDownIcon sx={{ fill: 'white', bgcolor: '#1A1A1A', borderRadius: '100px', height: '25px', width: '25px', '& .MuiButtonBase-root': { color: '#999999' } }} />}
                                    renderInput={(params) => <TextField {...params} InputLabelProps={{
                                        style: { color: '#999' }
                                    }} label='Select no. of Bedrooms' />} />
                            </Box>
                        </Grid>
                        <Grid maxWidth={'100%'} xs={12} md={6}>
                            <Box sx={{ display: 'grid', rowGap: 1, color: 'white', rowGap: 2 }}>
                                <InputLabel sx={{ color: 'white' }}>Budget</InputLabel>
                                <Autocomplete className='select-inquiry' options={budgetRanges} sx={{ color: 'white', "& .MuiSvgIcon-root": { fill: 'white' } }}
                                    popupIcon={<KeyboardArrowDownIcon sx={{ fill: 'white', bgcolor: '#1A1A1A', borderRadius: '100px', height: '25px', width: '25px', '& .MuiButtonBase-root': { color: '#999999' } }} />}
                                    renderInput={(params) => <TextField {...params} InputLabelProps={{
                                        style: { color: '#999' }
                                    }} label='Select Budget' />} />
                            </Box>
                        </Grid>
                        <Grid maxWidth={'100%'} xs={12} md={6}>
                            <Box sx={{ display: 'grid', rowGap: 2 }}>
                                <InputLabel sx={{ color: 'white' }}>Preferred Contact Method</InputLabel>
                                <Grid container spacing={2}>
                                    <Grid xs={12} sm={6} >
                                        <Input className='input-field' placeholder='Enter Your Number'
                                            startAdornment={<InputAdornment><CallIcon sx={{ fill: 'white', mr: '6px' }} /></InputAdornment>}
                                            sx={{ color: 'white' }}
                                            endAdornment={<InputAdornment><Checkbox icon={<CircleOutlinedIcon sx={{ fill: '#703BF7', height: '15px', width: '15px' }} />} checkedIcon={<CircleIcon sx={{ fill: '#703BF7', height: '15px', width: '15px' }} />} /></InputAdornment>} />
                                    </Grid>
                                    <Grid xs={12} sm={6}>
                                        <Input className='input-field' placeholder='Enter Your Email'
                                            startAdornment={<InputAdornment><EmailIcon sx={{ fill: 'white', mr: '6px' }} /></InputAdornment>}
                                            sx={{ color: 'white' }}
                                            endAdornment={<InputAdornment><Checkbox icon={<CircleOutlinedIcon sx={{ fill: '#703BF7', height: '15px', width: '15px' }} />} checkedIcon={<CircleIcon sx={{ fill: '#703BF7', height: '15px', width: '15px' }} />} /></InputAdornment>} />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid maxWidth={'100%'} xs={12} >
                            <Box sx={{ display: 'grid', rowGap: 1, color: 'white' }}>
                                <InputLabel sx={{ color: 'white' }}>Message </InputLabel>
                                <TextField className='textfield' rows={3} multiline InputProps={{ style: { color: 'white' } }} sx={{ "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: 'transparent' } }} placeholder='Enter your Message here..' />
                            </Box>
                        </Grid>
                        <Grid maxWidth={'100%'} xs={12} >
                            <Box sx={{ display: { xs: 'grid', md: 'flex' },  color: 'white' ,placeItems:'center',rowGap:2,placeContent:{xs:'center',md:'space-between'}}}>
                                <Box sx={{display:'flex', spacing:2,placeItems:'center'}}>
                                    <Checkbox sx={{color:'#999'}} />
                                    <Typography sx={{fontFamily:'Urbanist',fontWeight:500,fontSize:'16px',color:'#999'}}>
                                        I agree with Terms of Use and Privacy Policy
                                    </Typography>
                                </Box>
                                <Button sx={{fontFamily:'Urbanist',fontWeight:500,fontSize:'14px',color:'white',bgcolor:'#703BF7',padding:'14px 34px'}}>Send Your Message</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default MessageForm