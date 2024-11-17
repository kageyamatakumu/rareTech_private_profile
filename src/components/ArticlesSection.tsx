import React from "react"
import { ArticlesType } from "../types/articles/ArticlesType"
import { TextDataType } from "../types/TextDataType"

import '../styles/section.css'
import '../styles/articlesSection.css'

/** プロパティの型定義 */
type ArticlesProps = {
  title: TextDataType['sections']['article']['title'];
  articles: ArticlesType[];
}

export const ArticlesSection: React.FC<ArticlesProps> = ({title, articles}) => {
  return (
    <section id="articles" className="section">
      <h2 className="sectionTitle">{title}</h2>
      <div className="articles">
        {articles.map((item) => (
          <div key={item.id} className="article">
            <img src={`assets/${item.image}`} className="articleImage"/>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}