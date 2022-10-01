import React from 'react'
import Navbar from '../../Components/HomeNavbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Default} from "../../Components/SlidingImage/SlidingImage"
import MainModals from "../../Components/ModalButton/MainModals"
import MainCompaniesHiring from '../../Components/CompaniesHiring/MainCompaniesHiring'
import Footer from '../../Components/Footer/Footer'
import JobPage from '../JobPage/JobPage';
export default function HomePage() {
  return (
    <div>
        {/* <Navbar/>
        <Default/>
        <MainModals/> */}
        <JobPage/>
        {/* <MainCompaniesHiring/>
       <Footer/> */}

    </div>
  )
}
