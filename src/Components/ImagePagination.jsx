import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { images } from '../Assets/Images/Index';
import axios from 'axios';

const ImagePagination = () => {
    const [data, setData] = useState([])
    useEffect( () => {
        const responce =  axios.get('https://jsonplaceholder.typicode.com/photos');
        setData(responce.data);
        console.log(data)
    })

    return (
        <>
            <Box maxWidth={'100%'} sx={{ width: '100%', display: 'flex' }}>
                <Box sx={{ width: '50%' }}>
                    <img src={images.Home} alt="" />
                    <Typography>
                        {/* {data.title} */}
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default ImagePagination

//https://jsonplaceholder.typicode.com/photos