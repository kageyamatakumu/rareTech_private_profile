import React from 'react'
import { MainImage } from '../types/mainImage/MainImage'

import '../styles/mainVisual.css'

/** プロパティの型定義 */
type MainImageProps = {
  mainImage: MainImage
}

export const MainVisual: React.FC<MainImageProps> = ({mainImage}) => {
  return (
    <img src={`/assets/${mainImage.image}`} alt={mainImage.alt} className="mainVisual" />
  )
}