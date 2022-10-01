import React from 'react'
import { Image, Box, Stack, Input,Button } from '@chakra-ui/react'
import { IoIosSearch } from "react-icons/io";
import { BsBell,BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
// const TrendingNavbarData =[
//     {
//         id:1,
//         name:"React JS"
//     },
//     {
//         id:2,
//         name:"Full-Stack Developer "
//     },
//     {
//         id:3,
//         name:"Accountant"
//     },
//     {
//         id:4,
//         name:"Operations"
//     },
//     {
//         id:5,
//         name:"Engineering"
//     }
//   ]

export default function MiddleNavbar() {
    return (
        <div>
            <Box mw="1320px" bg="#ffffff" h="50px" p="10px 0px">
                <Box className='middleNavbar-container' w="1270px" m="auto" bg="white" display="flex" justifyContent="space-between">
                    <Box className="left-Navbar" w="550px" display="flex" alignItems="center" >
                        <Stack
                            w="74px"
                            h="49px" >
                            <Image

                                boxSize='100px'
                                objectFit='cover'
                                src='https://www.shine.com/next/static/images/shine-logo.png'
                                alt='Shine.com_logo'
                            />
                        </Stack>
                        <Box className='searchContainer' ml="15px" w="85%" display="flex" alignItems="center" justifyContent="space-between">
                            <Box className='inputBox'>
                                <Input placeholder='Job title,skills'
                                    border="none"
                                    padding="1.3rem"
                                    fontSize="1rem"
                                    color="#6d7883"
                                    bg="#ffffff"
                                    fontFamily="inherit"
                                    height="40px"
                                    w="422px"
                                    flex-grow="1"
                                    // boxShadow='xs'
                                    boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                                    mr="-2px"
                                />
                            </Box>
                            <Box className='searchIcon' width="40px"
                                height="40px" display="flex"
                                bg="#8652ff"
                                border-top-left-radius="0"
                                border-bottom-left-radius="0"
                                alignItems="center" justifyContent="center"
                                ml="-10px"
                                >
                                <IoIosSearch color='#ffffff' fontSize="25px"/>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="right-Navbar" w="300px" display="flex" alignItems="center" justifyContent="space-around" pr="25px">
                        <Box>
                            <Button p="2px 20px" fontSize="14px" backgroundColor="transparent" border="1px solid #8652ff"  color="#8652ff">Login</Button>
                        </Box>
                        <Box>
                        <Button p="0px 25px" fontSize="14px"  bg="#8652ff" color="#ffffff">Register</Button>
                        </Box>
                        <Box>
                            <BsBell/>
                        </Box>
                        <Box>
                            <BsCart3/>
                        </Box>
                    </Box>
                </Box>
                {/* <Box>
                    <Box>
                        {
            
                            TrendingNavbarData.map((item) => <Link key={item.id}>{item.name}</Link>)
                                  
                        }
                    </Box>
                </Box> */}
            </Box>

        </div>
    )
}
