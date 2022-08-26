import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Food } from './Food'
import { Menus } from './Menus'

export const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Menus/>}></Route>
        <Route path="/:Id" element={<Food/>}></Route>
    </Routes>
    </div>
  )
}
