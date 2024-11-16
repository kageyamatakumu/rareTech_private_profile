import React from 'react'
import { Header } from './components/Header'
import { MainVisual } from './components/MainVisual'
import { ProfileSection } from './components/ProfileSection'
import { ArticlesSection } from './components/ArticlesSection'
import { Footer } from './components/Footer'

import { headerMenu } from './data/header/headerMenu'
import { headerLogo } from './data/header/headerLogo'
import { mainImage } from './data/mainImage/mainImage'
import { profile } from './data/profile'
import { textData } from './data/textData'
import { articles } from './data/articles'

import '../src/styles/app.css'

export const App: React.FC = () => {
  return (
    <div className='pageWrapper'>
      <Header menu={headerMenu} logo={headerLogo}/>
      <main className='mainContent'>
        <MainVisual mainImage={mainImage}/>
        <ProfileSection title={textData.sections.profile.title} profile={profile}/>
        <ArticlesSection title={textData.sections.article.title} articles={articles} />
        <Footer copyright={textData.footer.copyright} />
      </main>
    </div>
  )
}