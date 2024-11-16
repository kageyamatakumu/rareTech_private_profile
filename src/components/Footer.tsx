import React from 'react'
import { TextDataType } from '../types/TextDataType'

import '../styles/footer.css'

/** プロパティの型定義 */
type FooterProps = {
  copyright: TextDataType['footer']['copyright']
}

export const Footer: React.FC<FooterProps> = ({copyright}) => {
  return(
    <footer className="footer">
      <p dangerouslySetInnerHTML={{ __html: copyright }}></p>
    </footer>
  )
}