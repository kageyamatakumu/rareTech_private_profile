import React from 'react'
import { Header } from './components/Header/Header'
import { MainVisual } from './components/MainVisual/MainVisual'
import { ProfileSection } from './components/ProfileSection/ProfileSection'
import { ArticlesSection } from './components/ArticlesSection/ArticlesSection'
import { Footer } from './components/Footer/Footer'

import { headerMenu } from './data/header/headerMenu'
import { headerLogo } from './data/header/headerLogo'
import { mainImage } from './data/mainImage/mainImage'
import { profile } from './data/profile/profile'
import { textData } from './data/content/textData'
import { articles } from './data/articles/articles'

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