import React from 'react'
import { MainImageType } from '../types/mainImage/MainImageType'

import '../styles/mainVisual.css'

/** プロパティの型定義 */
type MainImageProps = {
  mainImage: MainImageType
}

export const MainVisual: React.FC<MainImageProps> = ({mainImage}) => {
  return (
    <img src={`/assets/${mainImage.image}`} alt={mainImage.alt} className="mainVisual" />
  )
}