import { Box, Image, Badge, Heading } from '@chakra-ui/react';
import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
    const [data, setData] = useState([])


    const getData = (q) => {
      axios.get(`http://localhost:8080/jobdata`)
      .then((e) => setData(e.data))
      .catch((err)=> console.log(err))
    }


    return (
        <div>

            <AuthContext.Provider value={{ data, getData }}>
                {children}
            </AuthContext.Provider>

        </div>

    )
}
