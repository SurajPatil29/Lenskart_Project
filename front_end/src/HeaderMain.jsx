import React from 'react'
import { ToplineHeader } from './headers/ToplineHeader'
import Search from './headers/Search'
import { Searchline } from './headers/searchline'
import { AllRoutes } from './routers/AllRoutes'
import { Navblinks } from './headers/navbar/Navblinks'
import { FooterMain } from './footer/FooterMain'


function HeaderMain() {
  return (
    <>
    <ToplineHeader />
    <Searchline />
    <Navblinks />
    
    </>
  )
}

export {HeaderMain}