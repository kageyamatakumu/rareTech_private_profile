import React from "react"
import { Article } from "./Article"

import { ArticleType } from "../../types/article/ArticleType"
import { TextDataType } from "../../types/TextDataType"

import '../../styles/section.css'
import '../../styles/articlesSection.css'

/** プロパティの型定義 */
type ArticlesProps = {
  title: TextDataType['sections']['article']['title'];
  articles: ArticleType[];
}

export const ArticlesSection: React.FC<ArticlesProps> = ({title, articles}) => {
  return (
    <section id="articles" className="section">
      <h2 className="sectionTitle">{title}</h2>
      <div className="articles">
        {articles.map((item) => (
          <Article article={item} />
        ))}
      </div>
    </section>
  )
}