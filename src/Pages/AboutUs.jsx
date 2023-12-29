import styled from '@mui/system/styled';
import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import Layout from '../Layout/Layout';

const AboutUs = () => {
  const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
  }));
  return (
    <>
     
    </>
  )
}

export default AboutUs