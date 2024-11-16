import React from 'react'
import { HeaderMenu } from '../types/header/headerMenu'


import '../styles/header.css'
import { HeaderLogo } from '../types/header/headerLogo';


/** プロパティの型定義 */
type HeaderProps = {
  menu: HeaderMenu[];
  logo: HeaderLogo;
}

export const Header: React.FC<HeaderProps> = ({menu, logo}) => {
  return (
    <header className='header'>
      <img src={`/assets/${logo.name}`} alt={logo.alt} className='headerLogo'/>
      <nav>
        <ul className='headerUl'>
          {menu.map((item) => (
            <li key={item.id}><a href={`#${item.id}`}>{item.name}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
