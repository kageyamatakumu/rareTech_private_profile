import React from 'react'
import { MainImage } from '../types/mainImage/mainImage'

import '../styles/mainVisual.css'

/** プロパティの型定義 */
type MainImageProps = {
  mainImage: MainImage
}

export const MainVisual: React.FC<MainImageProps> = ({mainImage}) => {
  return (
    <img src={`/assets/${mainImage.name}`} alt={mainImage.alt} className="mainVisual" />
  )
}