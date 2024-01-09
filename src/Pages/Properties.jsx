import { Autocomplete, Box, Button, Divider, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropertyIcon from '../Assets/Icons/PropertyIcon';
import PaymentsIcon from '@mui/icons-material/Payments';
import SizeIcon from '../Assets/Icons/SizeIcon';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import Stars from '../Assets/Icons/Stars';
import { images } from '../Assets/Images/Index';
import MessageForm from '../Components/MessageForm';
import PropCard from '../Components/PropCard';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';


const Properties = () => {

  const LocationList = ['Mumbai East', 'Mumbai West', 'Andheri East(Mumbai)', 'Andheri West(Mumbai)', 'Surat', 'Vadodra', 'Ahmdabad', 'Gandhinagar']
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
  const propertyPriceRanges = [
    '$100,000 - $5,000,000',
    '$200,000 - $10,000,000',
    '$50,000 - $2,000,000',
    '$150,000 - $3,000,000',
    '$100,000 - $50,000,000+',
    '$5,000 - $5,000,000+',
    '$200,000 - $20,000,000+',
    '$150,000 - $10,000,000+',
    '$100,000 - $50,000,000+',
    '$1,000,000 - $100,000,000+',
  ];

  const propertySizeRanges = [
    '100 - 200 sq.ft.',
    '200 - 300 sq.ft.',
    '300 - 400 sq.ft.',
    '400 - 500 sq.ft.',
    '500 - 600 sq.ft.',
    '600 - 700 sq.ft.',
    '1000 sq.ft.',
    '2000 sq.ft.',
    '2000+ sq.ft.',


  ]
  const propertyBuildYearRanges = [
    '1960 - 1970',
    '1970 - 1980',
    '1980 - 1990',
    '1990 - 2000',
    '1900 - 1910',
    'Varies',
    '1950 - 1960',
    '2000 - 2010',
    '1960 - 1970',
    'Varies',
  ];
  const propertyDetails = [
    {
      id: 1,
      imageSrc: images.Prop1,
      header: 'Coastal Escapes',
      name: 'Seaside Serenity Villa',
      detail: 'Wake up to the soothing melody of waves. This beachfront villa offers... Read More',
      price: '$1,250,000'
    },
    {
      id: 2,
      imageSrc: images.Prop2,
      header: 'Mountain Retreat',
      name: 'Alpine Chalet',
      detail: 'Escape to the mountains in this cozy chalet surrounded by nature and tranquility.',
      price: '$500,000',
    },
    {
      id: 3,
      imageSrc: images.Prop3,
      header: 'Rustic Countryside Charm',
      name: 'Meadowside Cottage',
      detail: 'Charming cottage with a sprawling meadow view, perfect for peaceful country living.',
      price: '$350,000',
    },
    {
      id: 4,
      imageSrc: images.Prop2,
      header: 'Mountain Retreat',
      name: 'Alpine Chalet',
      detail: 'Escape to the mountains in this cozy chalet surrounded by nature and tranquility.',
      price: '$500,000',
    },
    {
      id: 5,
      imageSrc: images.Prop2,
      header: 'Mountain Retreat',
      name: 'Alpine Chalet',
      detail: 'Escape to the mountains in this cozy chalet surrounded by nature and tranquility.',
      price: '$500,000',
    },
  ]

  const [currentPropertyPage , setCurrentPropertyPage ] = useState(1)
  const [propertyPerPage, setPropertyPerPage] = useState(3)
  const lastPropertyIndex = currentPropertyPage * propertyPerPage;
  const firstPropertyIndex = lastPropertyIndex - propertyPerPage;
  const currentProperty = propertyDetails.slice(firstPropertyIndex, lastPropertyIndex);

  const displayNextProperty = () => {
    if (currentPropertyPage === (Math.ceil(propertyDetails.length / propertyPerPage))) {
      setCurrentPropertyPage (currentPropertyPage )
    }
    else {
      setCurrentPropertyPage (currentPropertyPage  + 1)
    }
  }
  const displayPreviousProperty = () => {
    if (currentPropertyPage === 1) {
      setCurrentPropertyPage (currentPropertyPage )
    }
    else {
      setCurrentPropertyPage (currentPropertyPage  - 1)
    }
  }

  return (
    <>
      <Box maxWidth={'100%'} sx={{ height: '100%', bgcolor: '#141414', placeItems: 'center', display: 'grid', rowGap: 5 }}>
        <Box maxWidth={'100%'} className="heading-box" sx={{ position: 'relative', padding: { md: ' 100px 200px 0px 80px', sm: ' 50px 80px 65px 40px', xs: ' 30px 40px 30px 20px' }, placeContent: 'center', placeItems: 'center', alignItems: 'center', display: 'grid' }}>
          <Typography sx={{ width: '90%', fontFamily: 'Urbanist', fontSize: { xs: '28px', sm: '32px', md: '38px' }, fontWeight: '600', color: 'white' }}>
            Find Your Dream Property
          </Typography>
          <Typography sx={{ width: '90%', fontFamily: 'Urbanist', fontSize: { xs: '14px', sm: '15px', md: '16px' }, fontWeight: '500', color: '#999' }}>
            Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey
          </Typography>
          <Box maxWidth={'100%'} sx={{ width: '90%', placeItems: 'center', margin: '30px 0px -105px', display: { xs: 'none', md: 'grid' }, gap: { xs: 3, sm: 0 } }}>
            <Box maxWidth={'90%'} className='property-searchbox' sx={{ width: '80%', placeItems: 'end', display: 'flex', padding: '16px 16px 16px 20px', columnGap: 1 }}>
              <TextField variant='standard' sx={{ width: 3 / 4, height: '100%', color: '#666' }} placeholder='Search For A Property' />
              <Button startIcon={<SearchIcon />} sx={{ width: 1 / 4, color: 'white', bgcolor: '#703BF7', padding: '14px 20px', display: { xs: 'none', md: 'flex' }, fontSize: { md: '10px', lg: '12px' } }}>Find Property</Button>
              <Button sx={{ width: 1 / 5, color: 'white', bgcolor: '#703BF7', padding: '14px 20px', display: { xs: 'flex', md: 'none' }, fontSize: { md: '10px', lg: '12px' } }}><SearchIcon /></Button>
            </Box>
            <Box maxWidth={'100%'} sx={{ width: '95%', padding: '10px', bgcolor: '#1A1A1A', borderRadius: '12px', display: 'grid' }}>
              <Grid container sx={{ placeContent: 'space-between' }}>
                <Grid xs={12} sm={6} md={4} lg={2.2}>
                  <Autocomplete options={LocationList}
                    sx={{ bgcolor: '#141414', color: '#999999', borderRadius: '8px' }}
                    popupIcon={<KeyboardArrowDownIcon sx={{ fill: 'white', bgcolor: '#1A1A1A', borderRadius: '100px', height: '25px', width: '25px', '& .MuiButtonBase-root': { color: '#999999' } }} />}
                    renderInput={(params) => <TextField {...params} placeholder='Location'
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment>
                            <LocationOnIcon sx={{ fill: '#999999', borderRight: 1, color: '#666666' }} />
                          </InputAdornment>
                        ),
                        style: { color: '#999999' }
                      }}
                    />
                    }
                  />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={2.2}>
                  <Autocomplete options={propertyTypes}
                    sx={{ bgcolor: '#141414', color: '#999999', borderRadius: '8px' }}
                    popupIcon={<KeyboardArrowDownIcon sx={{ fill: 'white', bgcolor: '#1A1A1A', borderRadius: '100px', height: '25px', width: '25px', '& .MuiButtonBase-root': { color: '#999999' } }} />}
                    renderInput={(params) => <TextField {...params} placeholder='Property Type'
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment>
                            <PropertyIcon sx={{ fill: '#999999', borderRight: 1, color: '#666666' }} />
                          </InputAdornment>
                        ),
                        style: { color: '#999999' }
                      }}
                    />
                    }
                  />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={2.2}>
                  <Autocomplete options={propertyPriceRanges}
                    sx={{ bgcolor: '#141414', color: '#999999', borderRadius: '8px' }}
                    popupIcon={<KeyboardArrowDownIcon sx={{ fill: 'white', bgcolor: '#1A1A1A', borderRadius: '100px', height: '25px', width: '25px', '& .MuiButtonBase-root': { color: '#999999' } }} />}
                    renderInput={(params) => <TextField {...params} placeholder='Pricing Range'
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment>
                            <PaymentsIcon sx={{ fill: '#999999', borderRight: 1, color: '#666666' }} />
                          </InputAdornment>
                        ),
                        style: { color: '#999999' }
                      }}
                    />
                    }
                  />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={2.2}>
                  <Autocomplete options={propertySizeRanges}
                    sx={{ bgcolor: '#141414', color: '#999999', borderRadius: '8px' }}
                    popupIcon={<KeyboardArrowDownIcon sx={{ fill: 'white', bgcolor: '#1A1A1A', borderRadius: '100px', height: '25px', width: '25px', '& .MuiButtonBase-root': { color: '#999999' } }} />}
                    renderInput={(params) => <TextField {...params} placeholder='Property Size'
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment>
                            <SizeIcon sx={{ fill: '#999999', borderRight: 1, color: '#666666' }} />
                          </InputAdornment>
                        ),
                        style: { color: '#999999' }
                      }}
                    />
                    }
                  />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={2.2}>
                  <Autocomplete options={propertyBuildYearRanges}
                    sx={{ bgcolor: '#141414', color: '#999999', borderRadius: '8px' }}
                    popupIcon={<KeyboardArrowDownIcon sx={{ fill: 'white', bgcolor: '#1A1A1A', borderRadius: '100px', height: '25px', width: '25px', '& .MuiButtonBase-root': { color: '#999999' } }} />}
                    renderInput={(params) => <TextField {...params} placeholder='Build Year'
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment>
                            <CalendarTodayRoundedIcon sx={{ fill: '#999999', borderRight: 1, color: '#666666' }} />
                          </InputAdornment>
                        ),
                        style: { color: '#999999' }
                      }}
                    />
                    }
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Box maxWidth={'100%'} sx={{ width: '90%', heignt: '100%', placeItems: 'center', display: { xs: 'grid', md: 'none' }, gap: { xs: 3, sm: 0 } }}>
          <Box maxWidth={'90%'} className='property-searchbox-responsive' sx={{ width: '80%', placeItems: 'end', display: 'flex', padding: '16px 16px 16px 20px', columnGap: 1 }}>
            <TextField variant='standard' sx={{ width: 3 / 4, height: '100%', color: '#666' }} placeholder='Search For A Property' />
            <Button startIcon={<SearchIcon />} sx={{ width: 1 / 4, color: 'white', bgcolor: '#703BF7', padding: '14px 20px', display: { xs: 'none', md: 'flex' }, fontSize: { md: '10px', lg: '12px' } }}>Find Property</Button>
            <Button sx={{ width: 1 / 5, color: 'white', bgcolor: '#703BF7', padding: '14px 20px', display: { xs: 'flex', md: 'none' }, fontSize: { md: '10px', lg: '12px' } }}><SearchIcon /></Button>
          </Box>
          <Box maxWidth={'100%'} sx={{ width: '95%', padding: '10px', bgcolor: '#1A1A1A', borderRadius: '12px', display: 'grid' }}>
            <Grid container rowGap={2} sx={{ placeContent: 'space-between' }}>
              <Grid xs={12} sm={6} md={3} lg={2.2}>
                <Autocomplete options={LocationList}
                  sx={{ bgcolor: '#141414', color: '#999999', borderRadius: '8px' }}
                  popupIcon={<KeyboardArrowDownIcon sx={{ fill: 'white', bgcolor: '#1A1A1A', borderRadius: '100px', height: '25px', width: '25px', '& .MuiButtonBase-root': { color: '#999999' } }} />}
                  renderInput={(params) => <TextField {...params} placeholder='Location'
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment>
                          <LocationOnIcon sx={{ fill: '#999999', borderRight: 1, color: '#666666' }} />
                        </InputAdornment>
                      ),
                      style: { color: '#999999' }
                    }}
                  />
                  }
                />
              </Grid>
              <Grid xs={12} sm={6} md={3} lg={2.2}>
                <Autocomplete options={propertyTypes}
                  sx={{ bgcolor: '#141414', color: '#999999', borderRadius: '8px' }}
                  popupIcon={<KeyboardArrowDownIcon sx={{ fill: 'white', bgcolor: '#1A1A1A', borderRadius: '100px', height: '25px', width: '25px', '& .MuiButtonBase-root': { color: '#999999' } }} />}
                  renderInput={(params) => <TextField {...params} placeholder='Property Type'
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment>
                          <PropertyIcon sx={{ fill: '#999999', borderRight: 1, color: '#666666' }} />
                        </InputAdornment>
                      ),
                      style: { color: '#999999' }
                    }}
                  />
                  }
                />
              </Grid>
              <Grid xs={12} sm={6} md={3} lg={2.2}>
                <Autocomplete options={propertyPriceRanges}
                  sx={{ bgcolor: '#141414', color: '#999999', borderRadius: '8px' }}
                  popupIcon={<KeyboardArrowDownIcon sx={{ fill: 'white', bgcolor: '#1A1A1A', borderRadius: '100px', height: '25px', width: '25px', '& .MuiButtonBase-root': { color: '#999999' } }} />}
                  renderInput={(params) => <TextField {...params} placeholder='Pricing Range'
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment>
                          <PaymentsIcon sx={{ fill: '#999999', borderRight: 1, color: '#666666' }} />
                        </InputAdornment>
                      ),
                      style: { color: '#999999' }
                    }}
                  />
                  }
                />
              </Grid>
              <Grid xs={12} sm={6} md={3} lg={2.2}>
                <Autocomplete options={propertySizeRanges}
                  sx={{ bgcolor: '#141414', color: '#999999', borderRadius: '8px' }}
                  popupIcon={<KeyboardArrowDownIcon sx={{ fill: 'white', bgcolor: '#1A1A1A', borderRadius: '100px', height: '25px', width: '25px', '& .MuiButtonBase-root': { color: '#999999' } }} />}
                  renderInput={(params) => <TextField {...params} placeholder='Property Size'
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment>
                          <SizeIcon sx={{ fill: '#999999', borderRight: 1, color: '#666666' }} />
                        </InputAdornment>
                      ),
                      style: { color: '#999999' }
                    }}
                  />
                  }
                />
              </Grid>
              <Grid xs={12} sm={6} md={3} lg={2.2}>
                <Autocomplete options={propertyBuildYearRanges}
                  sx={{ bgcolor: '#141414', color: '#999999', borderRadius: '8px' }}
                  popupIcon={<KeyboardArrowDownIcon sx={{ fill: 'white', bgcolor: '#1A1A1A', borderRadius: '100px', height: '25px', width: '25px', '& .MuiButtonBase-root': { color: '#999999' } }} />}
                  renderInput={(params) => <TextField {...params} placeholder='Build Year'
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment>
                          <CalendarTodayRoundedIcon sx={{ fill: '#999999', borderRight: 1, color: '#666666' }} />
                        </InputAdornment>
                      ),
                      style: { color: '#999999' }
                    }}
                  />
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box maxWidth={'100%'} sx={{ width: '90%', display: 'grid', pt: { md: 20, xs: 5 } }}>
          <Box maxWidth={'100%'} sx={{ width: { xs: '100%', sm: '80%' }, display: 'grid', gap: 1 }}>
            <Stars />
            <Typography sx={{ fontFamily: 'Urbanist', color: 'white', fontSize: { xs: '28px', sm: '32px', md: '36px' }, fontWeight: '600' }}>
              Discover a World of Possibilities
            </Typography>
            <Typography sx={{ fontFamily: 'Urbanist', color: '#999', fontSize: { xs: '14px', md: '16px' }, fontWeight: '500' }}>
              Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home.
            </Typography>
          </Box>
        </Box>
        <Box maxWidth={'100%'} sx={{ width: '90%', display: 'grid' }}>
          <Grid container spacing={'20px'} rowGap={10}>
            {
              currentProperty.map((property, index) =>
                <Grid xs={12} md={6} lg={4} >
                  <PropCard key={index} data={property} />
                </Grid>
              )
            }
          </Grid>
        </Box>
        <Divider variant='middle' orientation='horizontal' sx={{ width:'95%',border: 1, borderColor: '#262626', mt: 1 }} />
        <Box maxWidth={'100%'} sx={{ width: '95%', display: 'flex', placeContent: 'space-between   ', alignItems: 'center' }}>
          <Box maxWidth={'100%'} sx={{ display: 'flex', gap: 1, placeItems: 'center', alignItems: 'center' }}>
            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: '20px', fontWeight: 500 }}>
              {currentPropertyPage }
            </Typography>
            <Typography sx={{ color: '#666', fontFamily: 'Urbanist', fontSize: '20px', fontWeight: 500, wordSpacing: 5 }}>
              of  {(Math.ceil(propertyDetails.length / propertyPerPage))}
            </Typography>
          </Box>
          <Box sx={{ bgcolor: '#141414', display: 'flex', borderRadius: '100px' }}>
            <IconButton sx={{ border: 1, borderColor: '#666', margin: '8px' }} onClick={displayPreviousProperty}><ArrowBackOutlinedIcon sx={{ height: '24px', width: '24px', color: 'white', borderColor: '#666' }} /></IconButton>
            <IconButton sx={{ border: 1, borderColor: '#666', margin: '8px' }} onClick={displayNextProperty}><ArrowForwardOutlinedIcon sx={{ height: '24px', width: '24px', color: 'white', borderColor: '#666' }} /></IconButton>
          </Box>
        </Box>
        <Box maxWidth={'100%'} sx={{ width: '90%', display: 'grid',  }}>
          <Box maxWidth={'100%'} sx={{ width: { xs: '100%', sm: '80%' }, display: 'grid', gap: 1 }}>
            <Stars />
            <Typography sx={{ fontFamily: 'Urbanist', color: 'white', fontSize: { xs: '28px', sm: '32px', md: '36px' }, fontWeight: '600' }}>
              Let's Make it Happen
            </Typography>
            <Typography sx={{ fontFamily: 'Urbanist', color: '#999', fontSize: { xs: '14px', md: '16px' }, fontWeight: '500' }}>
              Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.
            </Typography>
          </Box>
        </Box>
        <Box maxWidth={'100%'} sx={{ width: '90%', display: 'grid', pt: 5, placeContent: 'center' }}>
          <MessageForm />
        </Box>
      </Box>
    </>
  )
}

export default Properties