import { Autocomplete, Box, Input, InputLabel, TextField, Checkbox, Button } from '@mui/material'
import React from 'react'
import '../Styles/Index.css'
import Grid from '@mui/material/Unstable_Grid2/Grid2'


const ConnectPage = () => {

    const InquiryType = ['Property Consultancy', 'Legal Consultancy', 'Want to join Us']
    const Reffers = ['Social media', 'Family members', 'Friends']

    return (
        <>
            <Box maxWidth={'100%'} className='contact-form' sx={{ ml: 10, width: '80%', placeItems: 'center', display: 'grid', placeContent: 'center', bgcolor: '#141414' }}>
                <Grid container spacing={3} sx={{ placeItems: 'center',placeSelf:'center' }}>
                    <Grid xs={12} sm={6} md={4} >
                        <Box sx={{ display: 'grid', rowGap: 1 }}>
                            <InputLabel sx={{ color: 'white' }}>First Name</InputLabel>
                            <Input className='input-field' placeholder='Enter First Name' sx={{ color: 'white' }}></Input>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={6} md={4} >
                        <Box sx={{ display: 'grid', rowGap: 1 }}>
                            <InputLabel sx={{ color: 'white' }}>Last Name</InputLabel>
                            <Input className='input-field' placeholder='Enter Last Name' sx={{ color: 'white' }}></Input>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={6} md={4} >
                        <Box sx={{ display: 'grid', rowGap: 1 }}>
                            <InputLabel sx={{ color: 'white' }}>Email</InputLabel>
                            <Input className='input-field' placeholder='Enter Your Email' sx={{ color: 'white' }}></Input>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={6} md={4} >
                        <Box sx={{ display: 'grid', rowGap: 1 }}>
                            <InputLabel sx={{ color: 'white' }}>Phone Number</InputLabel>
                            <Input className='input-field' placeholder='Enter Phone Number' sx={{ color: 'white' }}></Input>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={6} md={4} >
                        <Box sx={{ display: 'grid', rowGap: 1, color: 'white' }}>
                            <InputLabel sx={{ color: 'white' }}>Phone Number</InputLabel>
                            <Autocomplete className='select-inquiry' options={InquiryType} sx={{ color: 'white', "& .MuiSvgIcon-root": { fill: 'white' } }} renderInput={(params) => <TextField {...params} InputLabelProps={{
                                style: { color: '#999' }
                            }} label='Select Inquiry Type' />} />
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={6} md={4} >
                        <Box sx={{ display: 'grid', rowGap: 1, color: 'white' }}>
                            <InputLabel sx={{ color: 'white' }}>How did you hear about us </InputLabel>
                            <Autocomplete className='select-inquiry' options={Reffers} sx={{ color: 'white', "& .MuiSvgIcon-root": { fill: 'white' } }} renderInput={(params) => <TextField {...params} InputLabelProps={{
                                style: { color: '#999' }
                            }} label='Select' />} />
                        </Box>
                    </Grid>
                    <Grid xs={12}>
                        <Box sx={{ display: 'grid', rowGap: 1, color: 'white' }}>
                            <InputLabel sx={{ color: 'white' }}>Message </InputLabel>
                            <TextField className='textfield' InputProps={{ style: { color: 'white' } }} sx={{ "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: 'transparent' } }} placeholder='Enter your Message here..' />
                        </Box>
                    </Grid>
                    <Grid xs={12} sx={{display:{xs:'grid',md:'flex',placeContent:'space-between'}}}>
                        <Box sx={{ display: 'flex', placeItems: 'center' }}>
                            <Checkbox className='check-box' sx={{ color: '#999', "&.Mui-checked": { color: '#999' } }} />
                            <InputLabel sx={{ color: '#999' }}>I agree with Terms of Use and Privacy Policy</InputLabel>
                        </Box>
                        <Button className='button' sx={{p:1.5,bgcolor:'#703BF7',color:'white',fontFamily:'Urbanist',fontSize:'12px',fontWeight:500}}>Send Your Message</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ConnectPage