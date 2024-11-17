import React from "react"
import { ProfileType } from "../../types/Profile/ProfileType"
import { TextDataType } from "../../types/TextDataType"

import '../../styles/section.css'
import '../../styles/profileSection.css'

/** プロパティの型定義 */
type ProfileProps = {
  title: TextDataType['sections']['profile']['title'],
  profile: ProfileType,
}

export const ProfileSection: React.FC<ProfileProps> = ({title, profile}) => {
  return (
    <section id="profile" className="section">
      <h2 className="sectionTitle">{title}</h2>
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