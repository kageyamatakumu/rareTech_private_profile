import React from 'react'
import { headerMenu } from './data/header/headerMenu'
import { headerLogo } from './data/header/headerLogo'

import { Header } from './components/Header'

import '../src/styles/app.css'
import { MainVisual } from './components/MainVisual'
import { mainImage } from './data/mainImage/mainImage'
import { ProfileSection } from './components/ProfileSection'
import { profile } from './data/profile'
import { textData } from './data/textData'

export const App: React.FC = () => {
  return (
    <div className='pageWrapper'>
      <Header menu={headerMenu} logo={headerLogo}/>
      <main className='mainContent'>
        <MainVisual mainImage={mainImage}/>
        <ProfileSection title={textData.sections.profile.title} profile={profile}/>
      </main>
    </div>
  )
}