import React from 'react'
import { ToplineHeader } from './ToplineHeader'
import Search from './Search'
import { Searchline } from './searchline'
import { AllRoutes } from '../routers/AllRoutes'
import { Navblinks } from './navbar/Navblinks'
import { FooterMain } from '../footer/FooterMain'


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