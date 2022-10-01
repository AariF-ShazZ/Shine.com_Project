import { Box, Image, Badge, Heading } from '@chakra-ui/react';
import React from 'react'
import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

const getData = (url) => {
    return fetch(url).then((res) => res.json());
};

export default function JobLeftComponents() {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }

    const [data, setData] = useState([]);
    // const [page, setPage] = useState(1);

    useEffect(() => {
        // http://localhost:8080/jobdata?page=${page}
        getData(`http://localhost:8080/jobdata`).then((res) => {
            setData(res);
            // console.log(res)
        });
    }, []);
    // data.map((item) => 
    // console.log(item)
    // )

    return (
        <div>
           {
            data.map((item) =>  <Box key={item.id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            {/* <Image src={property.imageUrl} alt={property.imageAlt} /> */}
            <Heading>{item.title}</Heading>
            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        New
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {property.beds} beds &bull; {property.baths} baths
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {property.title}
                </Box>

                <Box>
                    {property.formattedPrice}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / wk
                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                   Nothing
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {property.reviewCount} reviews
                    </Box>
                </Box>
            </Box>
        </Box>)
           }
        </div>
    )
}



