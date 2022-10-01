import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from '../Pages/HomePage/HomePage'
import CartPage from '../Pages/CartPage/CartPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import JobPage from '../Pages/JobPage/JobPage'
import JobPage from '../Pages/JobPage/JobPage'
import JobPage from '../Pages/JobPage/JobPage'
import JobRightComponents from "../Components/JobComponents/JobRightComponents"
import JobLeftComponents from "../Components/JobComponents/JobLeftComponents"
export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/cart"  element={<CartPage/>}/>
            <Route path="/login"  element={<LoginPage/>}/>
            <Route path="/jobpage" element={<JobPage/>}/>
        </Routes>
    </div>
  )
}
