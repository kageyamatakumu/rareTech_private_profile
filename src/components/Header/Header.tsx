import React from 'react'
import { HeaderMenuType } from '../../types/header/HeaderMenuType'
import { HeaderLogoType } from '../../types/header/HeaderLogoType';

import '../../styles/header.css'

/** プロパティの型定義 */
type HeaderProps = {
  menu: HeaderMenuType[];
  logo: HeaderLogoType;
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
