import React from 'react'
import { headerMenu } from './data/header/headerMenu'
import { headerLogo } from './data/header/headerLogo'

import { Header } from './components/Header'

import '../src/styles/app.css'
import { MainVisual } from './components/MainVisual'
import { mainImage } from './data/mainImage/mainImage'

export const App: React.FC = () => {
  return (
    <div className='page-wrapper'>
      <Header menu={headerMenu} logo={headerLogo}/>
      <main>
        <MainVisual mainImage={mainImage}/>
      </main>
    </div>
  )
}