import React from "react"
import { Profile } from "../types/Profile"
import { TextData } from "../types/TextData"

import '../styles/section.css'
import '../styles/profileSection.css'

/** プロパティの型定義 */
type ProfileProps = {
  title: TextData['sections']['profile']['title'],
  profile: Profile,
}

export const ProfileSection: React.FC<ProfileProps> = ({title, profile}) => {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="profile">
        <img src={`/assets/${profile.image}`} alt={profile.alt} className="profileImage"/>
        <div className="profileInfo">
          <h3>{profile.name}</h3>
          <p>
            {profile.birthPlace}<br />
            {profile.hobby}<br />
            {profile.skills.join(', ')}
          </p>
        </div>
      </div>
    </section>
  )
}