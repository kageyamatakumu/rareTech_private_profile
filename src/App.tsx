import React from 'react'
import { headerMenu } from './data/header/headerMenu'
import { headerLogo } from './data/header/headerLogo'

import { Header } from './components/Header'

import '../src/styles/app.css'

export const App: React.FC = () => {
  return (
    <div className='page-wrapper'>
      <Header menu={headerMenu} logo={headerLogo}/>
    </div>
  )
}