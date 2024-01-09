import { Box, Grid, Typography, Button, IconButton, InputLabel, Input, TextField, Checkbox, Divider } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useState } from 'react';
import BedIcon from '@mui/icons-material/Bed';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import Stars from '../Assets/Icons/Stars';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import { Navigation, Pagination, Scrollbar, A11y,EffectCube } from 'swiper/modules';
import shadows from '@mui/material/styles/shadows';

const PropertyDetail = () => {




    const propertyDetails = [
        {
            id: '1',
            images: [
                'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
                'https://s3-alpha-sig.figma.com/img/d5eb/949e/c34e6367417f7283a0534730129af9ea?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pJKiILxwhdXP4D3QP8W5BHdNSLuHaUxONPdhQIYLXp8EIBpe3mBcyMSz3tTpcZoi9O3HEM2kRDc3LW5b1MHDywtWy3rdU3jQFX~cXXurDAojZi46py-655GJ6NJ3Zr7qkOBl7NjZwINdZjBmbnFACH7vx6NrWRV2uBodyQO~pcDkKWsOh5lFjsflH8C3lubn0R3gxjJu7t6WthSZk8bL41SC8SQPU9d~EyZ4rcJtQb7~RhjyFbjltIOvmjg-~9yTlSl~988Dv8ZmIdEy9ZdECamwkuqqPyN4HbdecYap~i09igiAdGo~zIXPvDCA-~0VI4KqOjRiz54BxiIi7aVtjQ__',
                'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
                'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
                'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
                'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
                'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
                'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__'
            ]
        },
        {
            id: '2',
            images: [
                'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
                'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
                'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
                'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
                'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
                'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
                'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
                'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__'
            ]
        },
    ]
    const images = [
        'https://s3-alpha-sig.figma.com/img/d5eb/949e/c34e6367417f7283a0534730129af9ea?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pJKiILxwhdXP4D3QP8W5BHdNSLuHaUxONPdhQIYLXp8EIBpe3mBcyMSz3tTpcZoi9O3HEM2kRDc3LW5b1MHDywtWy3rdU3jQFX~cXXurDAojZi46py-655GJ6NJ3Zr7qkOBl7NjZwINdZjBmbnFACH7vx6NrWRV2uBodyQO~pcDkKWsOh5lFjsflH8C3lubn0R3gxjJu7t6WthSZk8bL41SC8SQPU9d~EyZ4rcJtQb7~RhjyFbjltIOvmjg-~9yTlSl~988Dv8ZmIdEy9ZdECamwkuqqPyN4HbdecYap~i09igiAdGo~zIXPvDCA-~0VI4KqOjRiz54BxiIi7aVtjQ__',
        'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
        'https://s3-alpha-sig.figma.com/img/d5eb/949e/c34e6367417f7283a0534730129af9ea?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pJKiILxwhdXP4D3QP8W5BHdNSLuHaUxONPdhQIYLXp8EIBpe3mBcyMSz3tTpcZoi9O3HEM2kRDc3LW5b1MHDywtWy3rdU3jQFX~cXXurDAojZi46py-655GJ6NJ3Zr7qkOBl7NjZwINdZjBmbnFACH7vx6NrWRV2uBodyQO~pcDkKWsOh5lFjsflH8C3lubn0R3gxjJu7t6WthSZk8bL41SC8SQPU9d~EyZ4rcJtQb7~RhjyFbjltIOvmjg-~9yTlSl~988Dv8ZmIdEy9ZdECamwkuqqPyN4HbdecYap~i09igiAdGo~zIXPvDCA-~0VI4KqOjRiz54BxiIi7aVtjQ__',
        'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
        'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
        'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
        'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
        'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__',
        'https://s3-alpha-sig.figma.com/img/87fe/0a7a/eb054fbd88c44bbb3da756276d229ba2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJ39zel4ipEcVXRsM~VnX0G6RUg~znSHg50XVCNiy~axkMq0is0M6W2pKfVqg5oZEHh9ACLvtcwjZfR4a3m9N5~CeUu~oWlI2pdPjkKcrzIRDVLXF3e9eGpRUrT~aWePIanit-UsIzzuLcZ9F8JiukskvLvIg7JdmLm4saKXsfm4oJG1a91zA~B41NY9~bv2V3TtOZvNIpWARj~bLRhD9WQg1p7Gjr1vlBSmVwXfaCnkpwunliY~0Lh6TS2btUmUJIOBstSE-nX~tuqqZwUqUbnPBcGqpzoh5l5-nrFigUSgUPNW61YXnhc3AT7-URbsR321dg~zR8AIQkL3~fuFUw__'
    ]
    const features = ['Expansive oceanfront terrace for outdoor entertaining',
        'Gourmet kitchen with top-of-the-line appliances',
        'Private beach access for morning strolls and sunset views',
        'Master suite with a spa-inspired bathroom and ocean-facing balcony',
        'Private garage and ample storage space'
    ]
    const [currentPage, setCurrentPage] = useState(1)
    const [imagePerPage, setImagePerPage] = useState(2)
    const lastImageIndex = currentPage * imagePerPage;
    const firstImageIndex = lastImageIndex - imagePerPage;
    const currentImages = images.slice(firstImageIndex, lastImageIndex);

    const displayNextImages = () => {
        if (currentPage === (Math.ceil(images.length / imagePerPage))) {
            setCurrentPage(currentPage)
        }
        else {
            setCurrentPage(currentPage + 1)
        }
    }
    const displayPreviousImages = () => {
        if (currentPage === 1) {
            setCurrentPage(currentPage)
        }
        else {
            setCurrentPage(currentPage - 1)
        }
    }

    return (


        <>
            <Box maxWidth={'100%'} sx={{ width: '100%', display: 'grid', placeItems: 'center', bgcolor: '#141414', gap: 10 }}>
                <Box maxWidth={'100%'} sx={{ width: '90%', display: 'grid' }}>
                    <Box maxWidth={'100%'} sx={{ width: '100%', display: 'flex', placeItems: 'self-start', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: { xs: '20px', sm: '22px', md: '24px' }, fontWeight: 600 }}>
                                Seaside Serenity Villa
                            </Typography>
                            <Button startIcon={<FmdGoodIcon sx={{ fill: 'white', height: '20px', width: '20px' }} />} variant='outlined' sx={{ color: 'white', borderColor: '#262626', fontFamily: 'Urbanist', fontSize: '14px', fontWeight: 500, padding: '8px' }}>
                                Malibu, California
                            </Button>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', sm: 'grid' } }}>
                            <Typography sx={{ color: '#666', fontFamily: 'Urbanist', fontSize: '18px', fontWeight: 600 }}>
                                Price
                            </Typography>
                            <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: '20px', fontWeight: 600 }}>
                                $1,250,000
                            </Typography>
                        </Box>
                    </Box>
                    <Box maxWidth={'100%'} sx={{ display: 'grid', width: '100%', bgcolor: '#1A1A1A', borderRadius: '12px', border: 1, borderColor: '#262626', }}>
                        <Box maxWidth={'100%'} sx={{ margin: { xs: '20px', sm: '30px', md: '40px' }, display: 'grid', rowGap: 5, placeContent: 'center' }}>
                            <Box maxWidth={'100%'} sx={{ padding: '10px', width: '100%', bgcolor: '#141414', border: 1, borderRadius: '12px', borderColor: '#666', overflow: 'hidden' }}>
                                <Box maxWidth={'100%'} sx={{ width: '100%', display: 'flex', gap: '10px', '& img': { height: '100px', borderRadius: '10px', width: '100%' }, '& .Swiper': { width: '95%', padding: 3 } }}>
                                    <Swiper
                                        className='Swiper'
                                        breakpoints={{
                                            0: {
                                                slidesPerView: 4
                                            },
                                            640: {
                                                slidesPerView: 5
                                            },
                                            900: {
                                                slidesPerView: 6
                                            },
                                            1200: {
                                                slidesPerView: 7
                                            }
                                        }}
                                        spaceBetween={10}
                                        modules={[Navigation, Pagination, Scrollbar, A11y]}

                                        pagination={{ clickable: true }}
                                        scrollbar={{ hide: true }}
                                    >
                                        {
                                            images.map((image) =>
                                                <SwiperSlide>
                                                    <img src={image} alt="" />
                                                </SwiperSlide>
                                            )
                                        }
                                    </Swiper>
                                </Box>
                            </Box>
                            <Box maxWidth={'100%'} sx={{ width: '100%', display: 'grid' }}>
                                <Grid container sx={{ placeContent: 'space-between' }} >
                                    {
                                        currentImages.map((currentImage) =>
                                            <Grid xs={6} >
                                                <Box className='trans' maxWidth={'100%'} sx={{ widht: '100%', '& img': { width: '98%', borderRadius: '12px', }, placeContent: 'center', display: 'flex',}}>
                                                    <img src={currentImage} maxWidth={'100%'} alt="" />
                                                </Box>
                                            </Grid>
                                        )
                                    }
                                </Grid>
                            </Box>
                            <Box maxWidth={'100%'} sx={{ width: '100%', display: 'flex', placeContent: 'center' }}>
                                <Box sx={{ bgcolor: '#141414', gap: 5, display: 'flex', borderRadius: '100px' }}>
                                    <IconButton sx={{ border: 1, borderColor: '#666', margin: '8px' }} onClick={displayPreviousImages}><ArrowBackOutlinedIcon sx={{ height: '24px', width: '24px', color: 'white', borderColor: '#666' }} /></IconButton>
                                    <IconButton sx={{ border: 1, borderColor: '#666', margin: '8px' }} onClick={displayNextImages}><ArrowForwardOutlinedIcon sx={{ height: '24px', width: '24px', color: 'white', borderColor: '#666' }} /></IconButton>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box maxWidth={'100%'} sx={{ width: '90%', display: { xs: 'grid', md: 'flex' }, gap: '20px' }}>
                    <Box maxWidth={'100%'} sx={{ height: '100%', width: { xs: '100%', md: 1 / 2 }, border: 1, borderRadius: '10px', borderColor: '#262626', display: 'grid' }}>
                        <Box maxWidth={'100%'} sx={{ display: 'grid', margin: { xs: '20px', sm: '30px', md: '40px' }, gap: { xs: '20px', sm: '30px', md: '40px' }, }}>
                            <Box sx={{ display: 'grid' }}>
                                <Typography sx={{ color: 'white', fontFamily: 'Urbanist', fontSize: { xs: '18px', sm: '20px' }, fontWeight: 600 }}>
                                    Description
                                </Typography>
                                <Typography maxWidth={"100%"} sx={{ color: '#666', fontFamily: 'Urbanist', fontSize: { xs: '14px', sm: '16px' }, fontWeight: 500 }}>
                                    Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', borderTop: 1, borderColor: '#262626', placeContent: 'space-evenly', gap: 5 }}>
                                <Box sx={{ mt: '16px', display: 'grid' }}>
                                    <Typography sx={{ color: '#666', placeItems: 'center', display: 'flex', fontFamily: 'Urbanist', fontSize: '14px' }} >
                                        <BedIcon />
                                        Bedrooms
                                    </Typography>
                                    <Typography sx={{ color: 'white', placeItems: 'center', display: 'flex', fontFamily: 'Urbanist', fontSize: '20px' }}>
                                        04
                                    </Typography>
                                </Box>
                                <Box sx={{ mt: '16px', borderLeft: 1, borderColor: '#666', display: 'grid' }}>
                                    <Typography sx={{ ml: 2, color: '#666', placeItems: 'center', display: 'flex', fontFamily: 'Urbanist', fontSize: '14px' }} >
                                        <BathtubIcon />
                                        Bathrooms
                                    </Typography>
                                    <Typography sx={{ ml: 2, color: 'white', placeItems: 'center', display: 'flex', fontFamily: 'Urbanist', fontSize: '20px' }}>
                                        03
                                    </Typography>
                                </Box>
                                <Box sx={{ mt: '16px', borderLeft: 1, borderColor: '#666', display: { xs: 'none', sm: 'grid' } }}>
                                    <Typography sx={{ ml: 2, color: '#666', placeItems: 'center', display: 'flex', fontFamily: 'Urbanist', fontSize: '14px' }} >
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_166_843)">
                                                <path d="M0.837286 3.76614C0.612648 4.0303 0.387352 4.29381 0.167984 4.55138C-0.262846 4.1166 -0.63834 3.73847 -1 3.37418C-0.083004 2.45586 0.852437 1.51976 1.77602 0.59552C2.70026 1.52174 3.63505 2.45784 4.55072 3.37549C4.19302 3.7332 3.81489 4.11067 3.40382 4.52174C3.16601 4.25626 2.91041 3.97101 2.59025 3.61462V7.40448C4.31555 5.67655 6.08234 3.90843 7.8386 2.14954C7.37549 2.14954 6.85112 2.11726 6.33333 2.15942C5.88472 2.19565 5.57115 2.04809 5.27866 1.71739C4.92358 1.3162 4.51976 0.957839 4.08235 0.527667C4.24769 0.515151 4.33794 0.502634 4.42885 0.502634C8.82148 0.501976 13.2141 0.499999 17.6067 0.502634C19.0086 0.503293 20.0079 1.48024 20.0099 2.87352C20.0171 7.2892 20.0125 11.7042 20.0125 16.1199C20.0125 16.1812 20.0059 16.2431 19.9209 16.363C19.5231 15.9466 19.143 15.5112 18.72 15.1219C18.4453 14.8689 18.3347 14.6054 18.357 14.2339C18.3887 13.7141 18.365 13.191 18.365 12.6746C16.6008 14.4407 14.8544 16.1884 13.112 17.9328H16.9091C16.554 17.643 16.2615 17.4045 15.9743 17.17C16.4453 16.7167 16.8287 16.3478 17.2016 15.9881C18.0837 16.8801 19.0152 17.8215 19.9401 18.7563C19.0441 19.6456 18.1047 20.5784 17.1752 21.5007C16.8261 21.1449 16.4545 20.7668 16.0586 20.3636C16.2813 20.1673 16.5349 19.9433 16.7885 19.7194C16.7727 19.6805 16.7569 19.6416 16.7404 19.6034H16.3775C12.0507 19.6034 7.72398 19.6047 3.39723 19.6028C2.21278 19.6028 1.35903 19.0283 1.03294 17.9835C0.943346 17.6963 0.917655 17.3801 0.916996 17.0764C0.90975 12.7708 0.912385 8.46509 0.912385 4.15942C0.912385 4.04348 0.912385 3.92688 0.912385 3.81094C0.886693 3.79578 0.861001 3.78129 0.83531 3.76614H0.837286ZM2.56258 16.6831C7.40975 11.8353 12.249 6.99473 17.0935 2.14954C16.4032 2.14954 15.6937 2.14361 14.9842 2.15678C14.8933 2.15876 14.7879 2.24177 14.7154 2.31423C10.7167 6.30896 6.72003 10.3063 2.72596 14.3063C2.65415 14.3788 2.57115 14.4842 2.56917 14.5751C2.55599 15.2839 2.56192 15.9928 2.56192 16.6825L2.56258 16.6831ZM18.365 3.45784C13.5296 8.29183 8.69499 13.1258 3.86693 17.9526C4.52569 17.9526 5.22464 17.9585 5.92358 17.9453C6.01449 17.9433 6.11858 17.857 6.19104 17.7839C10.1963 13.7826 14.1996 9.77866 18.1996 5.77273C18.2721 5.70026 18.3557 5.59486 18.357 5.50395C18.3702 4.80567 18.3643 4.10672 18.3643 3.45784H18.365ZM18.365 8.08762C15.0758 11.3742 11.7833 14.664 8.49144 17.9526C9.15876 17.9526 9.85705 17.9585 10.556 17.9453C10.6462 17.9433 10.749 17.8531 10.8221 17.78C13.2846 15.3221 15.7444 12.8617 18.2016 10.3986C18.2734 10.3261 18.3557 10.22 18.3577 10.1285C18.3709 9.42951 18.365 8.73057 18.365 8.08696V8.08762ZM2.56258 12.0231C5.861 8.72595 9.14624 5.44137 12.4387 2.14954C11.7793 2.14954 11.1028 2.14361 10.4262 2.15613C10.334 2.1581 10.2266 2.23518 10.1548 2.30632C7.67589 4.77997 5.20026 7.25626 2.72727 9.73518C2.65547 9.80764 2.5718 9.91238 2.56983 10.004C2.55665 10.6818 2.56258 11.3597 2.56258 12.0231Z" fill="#999999" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_166_843">
                                                    <rect width="21.0145" height="21" fill="white" transform="translate(-1 0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Area
                                    </Typography>
                                    <Typography sx={{ ml: 2, color: 'white', placeItems: 'center', display: 'flex', fontFamily: 'Urbanist', fontSize: '20px' }}>
                                        2,500 Square Feet
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', placeItems: 'start', mt: '16px', borderTop: 1, borderColor: '#262626', display: { xs: 'grid', sm: 'none' } }}>
                                <Typography sx={{ mt: 2, color: '#666', placeItems: 'center', display: 'flex', fontFamily: 'Urbanist', fontSize: '14px', placeItems: 'flex-start' }} >
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_166_843)">
                                            <path d="M0.837286 3.76614C0.612648 4.0303 0.387352 4.29381 0.167984 4.55138C-0.262846 4.1166 -0.63834 3.73847 -1 3.37418C-0.083004 2.45586 0.852437 1.51976 1.77602 0.59552C2.70026 1.52174 3.63505 2.45784 4.55072 3.37549C4.19302 3.7332 3.81489 4.11067 3.40382 4.52174C3.16601 4.25626 2.91041 3.97101 2.59025 3.61462V7.40448C4.31555 5.67655 6.08234 3.90843 7.8386 2.14954C7.37549 2.14954 6.85112 2.11726 6.33333 2.15942C5.88472 2.19565 5.57115 2.04809 5.27866 1.71739C4.92358 1.3162 4.51976 0.957839 4.08235 0.527667C4.24769 0.515151 4.33794 0.502634 4.42885 0.502634C8.82148 0.501976 13.2141 0.499999 17.6067 0.502634C19.0086 0.503293 20.0079 1.48024 20.0099 2.87352C20.0171 7.2892 20.0125 11.7042 20.0125 16.1199C20.0125 16.1812 20.0059 16.2431 19.9209 16.363C19.5231 15.9466 19.143 15.5112 18.72 15.1219C18.4453 14.8689 18.3347 14.6054 18.357 14.2339C18.3887 13.7141 18.365 13.191 18.365 12.6746C16.6008 14.4407 14.8544 16.1884 13.112 17.9328H16.9091C16.554 17.643 16.2615 17.4045 15.9743 17.17C16.4453 16.7167 16.8287 16.3478 17.2016 15.9881C18.0837 16.8801 19.0152 17.8215 19.9401 18.7563C19.0441 19.6456 18.1047 20.5784 17.1752 21.5007C16.8261 21.1449 16.4545 20.7668 16.0586 20.3636C16.2813 20.1673 16.5349 19.9433 16.7885 19.7194C16.7727 19.6805 16.7569 19.6416 16.7404 19.6034H16.3775C12.0507 19.6034 7.72398 19.6047 3.39723 19.6028C2.21278 19.6028 1.35903 19.0283 1.03294 17.9835C0.943346 17.6963 0.917655 17.3801 0.916996 17.0764C0.90975 12.7708 0.912385 8.46509 0.912385 4.15942C0.912385 4.04348 0.912385 3.92688 0.912385 3.81094C0.886693 3.79578 0.861001 3.78129 0.83531 3.76614H0.837286ZM2.56258 16.6831C7.40975 11.8353 12.249 6.99473 17.0935 2.14954C16.4032 2.14954 15.6937 2.14361 14.9842 2.15678C14.8933 2.15876 14.7879 2.24177 14.7154 2.31423C10.7167 6.30896 6.72003 10.3063 2.72596 14.3063C2.65415 14.3788 2.57115 14.4842 2.56917 14.5751C2.55599 15.2839 2.56192 15.9928 2.56192 16.6825L2.56258 16.6831ZM18.365 3.45784C13.5296 8.29183 8.69499 13.1258 3.86693 17.9526C4.52569 17.9526 5.22464 17.9585 5.92358 17.9453C6.01449 17.9433 6.11858 17.857 6.19104 17.7839C10.1963 13.7826 14.1996 9.77866 18.1996 5.77273C18.2721 5.70026 18.3557 5.59486 18.357 5.50395C18.3702 4.80567 18.3643 4.10672 18.3643 3.45784H18.365ZM18.365 8.08762C15.0758 11.3742 11.7833 14.664 8.49144 17.9526C9.15876 17.9526 9.85705 17.9585 10.556 17.9453C10.6462 17.9433 10.749 17.8531 10.8221 17.78C13.2846 15.3221 15.7444 12.8617 18.2016 10.3986C18.2734 10.3261 18.3557 10.22 18.3577 10.1285C18.3709 9.42951 18.365 8.73057 18.365 8.08696V8.08762ZM2.56258 12.0231C5.861 8.72595 9.14624 5.44137 12.4387 2.14954C11.7793 2.14954 11.1028 2.14361 10.4262 2.15613C10.334 2.1581 10.2266 2.23518 10.1548 2.30632C7.67589 4.77997 5.20026 7.25626 2.72727 9.73518C2.65547 9.80764 2.5718 9.91238 2.56983 10.004C2.55665 10.6818 2.56258 11.3597 2.56258 12.0231Z" fill="#999999" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_166_843">
                                                <rect width="21.0145" height="21" fill="white" transform="translate(-1 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Area
                                </Typography>
                                <Typography sx={{ color: 'white', placeItems: 'center', display: 'flex', fontFamily: 'Urbanist', fontSize: '20px' }}>
                                    2,500 Square Feet
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box maxWidth={'100%'} sx={{ width: { xs: '100%', md: 1 / 2 }, border: 1, borderRadius: '10px', borderColor: '#262626', display: 'grid' }}>
                        <Box maxWidth={'100%'} sx={{ display: 'grid', margin: { xs: '20px', sm: '30px', md: '40px' }, gap: { xs: '20px', sm: '30px', md: '40px' }, }}>
                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: '20px', fontWeight: 600, color: 'white' }}>
                                Key Features and Amenities
                            </Typography>
                            <Box maxWidth={'100%'} sx={{ display: 'grid', gap: 2 }}>
                                {
                                    features.map((feature) =>
                                        <Box sx={{ borderLeft: 1, borderColor: '#703BF7', display: 'flex', placeItems: 'center', background: 'linear-gradient(90deg, #1A1A1A 0%, rgba(26, 26, 26, 0.00) 100%)' }}>
                                            <ElectricBoltIcon sx={{ ml: 1, fill: 'white' }} />
                                            <Typography sx={{ margin: '16px', display: 'flex', color: 'white' }}>
                                                {feature}
                                            </Typography>
                                        </Box>
                                    )
                                }

                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box maxWidth={'100%'} sx={{ width: '90%', display: { xs: 'grid', md: 'flex' }, gap: '40px' }}>
                    <Box maxWidth={'100%'} sx={{ height: '100%', width: { xs: '100%', md: 1 / 3 }, gap: 2, display: 'grid' }}>
                        <Stars />
                        <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '28px', sm: '32px', md: '38px' }, fontWeight: 500, color: 'white' }}>
                            Inquire About Seaside Serenity Villa
                        </Typography>
                        <Typography sx={{ fontFamily: 'Urbanist', fontsize: { xs: '14px', sm: '16px' }, fontWeight: 500, color: '#666' }}>
                            Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.
                        </Typography>
                    </Box>
                    <Box maxWidth={'100%'} sx={{ width: { xs: '100%', md: 2 / 3 }, gap: 2, display: 'grid', border: 1, borderColor: '#262626', borderRadius: '10px' }}>
                        <Box maxWidth={'100%'} sx={{ width: '90%', margin: { xs: '20px', sm: '30px', md: '40px' }, display: 'flex' }}>
                            <Grid container columnGap={10} rowGap={3}  >
                                <Grid xs={12} sm={5}>
                                    <Box maxWidth={'100%'} sx={{ width: '100%', display: 'grid', rowGap: 2 }}>
                                        <InputLabel sx={{ color: 'white' }}>First Name</InputLabel>
                                        <Input className='input-field' placeholder='Enter First Name' sx={{ color: 'white' }}></Input>
                                    </Box>
                                </Grid>
                                <Grid xs={12} sm={5}>
                                    <Box maxWidth={'100%'} sx={{ width: '100%', display: 'grid', rowGap: 2 }}>
                                        <InputLabel sx={{ color: 'white' }}>Last Name</InputLabel>
                                        <Input className='input-field' placeholder='Enter Last Name' sx={{ color: 'white' }}></Input>
                                    </Box>
                                </Grid>
                                <Grid xs={12} sm={5}>
                                    <Box maxWidth={'100%'} sx={{ width: '100%', display: 'grid', rowGap: 2 }}>
                                        <InputLabel sx={{ color: 'white' }}>Email</InputLabel>
                                        <Input className='input-field' placeholder='Enter Email' sx={{ color: 'white' }}></Input>
                                    </Box>
                                </Grid>
                                <Grid xs={12} sm={5}>
                                    <Box maxWidth={'100%'} sx={{ width: '100%', display: 'grid', rowGap: 2 }}>
                                        <InputLabel sx={{ color: 'white' }}>Phone Number</InputLabel>
                                        <Input className='input-field' placeholder='Enter Phone No' sx={{ color: 'white' }}></Input>
                                    </Box>
                                </Grid>
                                <Grid xs={12}>
                                    <Box maxWidth={'100%'} sx={{ width: '100%', display: 'grid', rowGap: 2 }}>
                                        <InputLabel sx={{ color: 'white' }}>Selected Property</InputLabel>
                                        <Input className='input-field' placeholder='Seaside Serenity Villa, Malibu, California' sx={{ color: 'white' }}></Input>
                                    </Box>
                                </Grid>
                                <Grid xs={12}>
                                    <Box sx={{ display: 'grid', rowGap: 1, color: 'white' }}>
                                        <InputLabel sx={{ color: 'white' }}>Message </InputLabel>
                                        <TextField className='textfield' rows={3} multiline InputProps={{ style: { color: 'white' } }} sx={{ "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: 'transparent' } }} placeholder='Enter your Message here..' />
                                    </Box>
                                </Grid>
                                <Grid xs={12}>
                                    <Box sx={{ display: { xs: 'grid', md: 'flex' }, color: 'white', placeItems: 'center', rowGap: 2, placeContent: { xs: 'center', md: 'space-between' } }}>
                                        <Box sx={{ display: 'flex', spacing: 2, placeItems: 'center' }}>
                                            <Checkbox sx={{ color: '#999' }} />
                                            <Typography sx={{ fontFamily: 'Urbanist', fontWeight: 500, fontSize: '16px', color: '#999' }}>
                                                I agree with Terms of Use and Privacy Policy
                                            </Typography>
                                        </Box>
                                        <Button sx={{ fontFamily: 'Urbanist', fontWeight: 500, fontSize: '14px', color: 'white', bgcolor: '#703BF7', padding: '14px 34px' }}>Send Your Message</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
                <Box maxWidth={'100%'} sx={{ width: '90%', display: 'grid', gap: '40px' }}>
                    <Box maxWidth={'100%'} sx={{ width: '100%', gap: 2, display: 'grid' }}>
                        <Stars />
                        <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '28px', sm: '32px', md: '38px' }, fontWeight: 500, color: 'white' }}>
                            Comprehensive Pricing Details
                        </Typography>
                        <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '14px', sm: '16px' }, fontWeight: 500, color: '#666' }}>
                            At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision
                        </Typography>
                    </Box>
                    <Box maxWidth={'100%'} sx={{ width: '100%', bgcolor: '#1A1A1A', border: 1, borderColor: '#262626', borderRadius: '10px' }}>
                        <Box maxWidth={'100%'} sx={{ margin: '20px 40px', width: '100%', gap: 2, display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '18px', sm: '20px' }, fontWeight: 500, color: 'white', }}>
                                Note
                            </Typography>
                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '14px', sm: '16px' }, fontWeight: 500, color: '#666' }}>
                                The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.
                            </Typography>
                        </Box>
                    </Box>
                    <Box maxWidth={'100%'} sx={{ width: '100%', display: { xs: 'grid', sm: 'flex' }, gap: '40px' }}>
                        <Box maxWidth={'100%'} sx={{ display: 'grid' }}>
                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '14px', sm: '16px' }, fontWeight: 500, color: '#666', }}>
                                Listing Price
                            </Typography>
                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '24px', sm: '30px' }, fontWeight: 500, color: 'white', }}>
                                $1,250,000
                            </Typography>
                        </Box>
                        <Box maxWidth={'100%'} sx={{ width: '100%', display: 'grid', gap: 5 }}>
                            <Box maxWidth={'100%'} sx={{ width: '100%', border: 1, borderColor: '#262626', borderRadius: '10px' }}>
                                <Box maxWidth={'100%'} sx={{ width: '100%', margin: { xs: '20px', sm: '30px', md: '40px' } }}>
                                    <Box sx={{ width: '90%', display: 'flex', placeContent: 'space-between', placeItems: 'center' }}>
                                        <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '18px', sm: '20px' }, fontWeight: 600, color: 'white', }}>
                                            Additional Fees
                                        </Typography>
                                        <Button sx={{ border: 1, borderColor: '#262626', bgcolor: '#1A1A1A', color: 'white', borderRadius: '8px', fontFamily: 'Urbanist', fontSize: '14px', padding: '14px 20px' }}>
                                            Learn More
                                        </Button>
                                    </Box>
                                    <Divider border={1} sx={{ borderColor: '#262626', my: '20px', width: '90%' }} variant='middle' />
                                    <Box sx={{ width: '90%', display: { xs: 'grid', md: 'flex' }, placeItems: 'center', placeContent: 'center' }}>
                                        <Box maxWidth={'100%'} sx={{ width: '100%', display: 'grid', gap: 2 }}>
                                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: '14px', fontWeight: 500, color: '#666', }}>
                                                Property Transfer Tax
                                            </Typography>
                                            <Box sx={{ display: 'flex', placeItems: 'center', gap: 2 }}>
                                                <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '18px', sm: '20px' }, fontWeight: 500, color: 'white', }}>
                                                    $25,000
                                                </Typography>
                                                <Box sx={{ bgcolor: '#1A1A1A', fontFamily: 'Urbanist', border: 1, borderColor: '#262626', borderRadius: { xs: '8px', sm: '14px', md: '100px' } }}>
                                                    <Typography sx={{ margin: '6px 12px', fontFamily: 'Urbanist', fontSize: '14px', fontWeight: 500, color: '#666', }}>
                                                        Based on the sale price and local regulations
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Divider border={1} sx={{ borderColor: '#262626', my: '20px', width: '90%', display: { xs: 'grid', md: 'none' } }} variant='middle' />
                                        <Divider sx={{ border: 1, borderColor: '#262626', marginX: '20px', display: { xs: 'none', md: 'grid' } }} orientation='veticle' flexItem />
                                        <Box maxWidth={'100%'} sx={{ width: '100%', display: 'grid', gap: 2 }}>
                                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: '14px', fontWeight: 500, color: '#666', }}>
                                                Property Transfer Tax
                                            </Typography>
                                            <Box sx={{ display: 'flex', placeItems: 'center', gap: 2 }}>
                                                <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '18px', sm: '20px' }, fontWeight: 500, color: 'white', }}>
                                                    $25,000
                                                </Typography>
                                                <Box sx={{ bgcolor: '#1A1A1A', fontFamily: 'Urbanist', border: 1, borderColor: '#262626', borderRadius: { xs: '8px', sm: '14px', md: '100px' } }}>
                                                    <Typography sx={{ margin: '6px 12px', fontFamily: 'Urbanist', fontSize: '14px', fontWeight: 500, color: '#666', }}>
                                                        Based on the sale price and local regulations
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Divider border={1} sx={{ borderColor: '#262626', my: '20px', width: '90%' }} variant='middle' />
                                    <Box sx={{ width: '90%', display: { xs: 'grid', md: 'flex' }, placeItems: 'center', placeContent: 'center' }}>
                                        <Box maxWidth={'100%'} sx={{ width: '100%', display: 'grid', gap: 2 }}>
                                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: '14px', fontWeight: 500, color: '#666', }}>
                                                Property Transfer Tax
                                            </Typography>
                                            <Box sx={{ display: 'flex', placeItems: 'center', gap: 2 }}>
                                                <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '18px', sm: '20px' }, fontWeight: 500, color: 'white', }}>
                                                    $25,000
                                                </Typography>
                                                <Box sx={{ bgcolor: '#1A1A1A', fontFamily: 'Urbanist', border: 1, borderColor: '#262626', borderRadius: { xs: '8px', sm: '14px', md: '100px' } }}>
                                                    <Typography sx={{ margin: '6px 12px', fontFamily: 'Urbanist', fontSize: '14px', fontWeight: 500, color: '#666', }}>
                                                        Based on the sale price and local regulations
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Divider border={1} sx={{ borderColor: '#262626', my: '20px', width: '90%', display: { xs: 'grid', md: 'none' } }} variant='middle' />
                                        <Divider sx={{ border: 1, borderColor: '#262626', marginX: '20px', display: { xs: 'none', md: 'grid' } }} orientation='veticle' flexItem />
                                        <Box maxWidth={'100%'} sx={{ width: '100%', display: 'grid', gap: 2 }}>
                                            <Typography sx={{ fontFamily: 'Urbanist', fontSize: '14px', fontWeight: 500, color: '#666', }}>
                                                Property Transfer Tax
                                            </Typography>
                                            <Box sx={{ display: 'flex', placeItems: 'center', gap: 2 }}>
                                                <Typography sx={{ fontFamily: 'Urbanist', fontSize: { xs: '18px', sm: '20px' }, fontWeight: 500, color: 'white', }}>
                                                    $25,000
                                                </Typography>
                                                <Box sx={{ bgcolor: '#1A1A1A', fontFamily: 'Urbanist', border: 1, borderColor: '#262626', borderRadius: { xs: '8px', sm: '14px', md: '100px' } }}>
                                                    <Typography sx={{ margin: '6px 12px', fontFamily: 'Urbanist', fontSize: '14px', fontWeight: 500, color: '#666', }}>
                                                        Based on the sale price and local regulations
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default PropertyDetail;

