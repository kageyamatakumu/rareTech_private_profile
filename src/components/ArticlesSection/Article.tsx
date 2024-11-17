import React from "react"
import { ArticleType } from "../../types/article/ArticleType"

import '../../styles/articlesSection.css'

/** プロパティの型定義 */
type ArticleProps = {
  article: ArticleType
}

export const Article: React.FC<ArticleProps> = ({article}) => {
  return (
    <div key={article.id} className="article">
      <img src={`assets/${article.image}`} className="articleImage"/>
      <h3>{article.title}</h3>
      <p>{article.content}</p>
    </div>
  )
}