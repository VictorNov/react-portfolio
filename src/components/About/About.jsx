import React, {useState, useEffect} from 'react'
import {PortableText} from '@portabletext/react'
import { client, urlFor } from '../../client'

import aboutPhoto from '../../assets/img/about-photo.png'
import './About.scss'

const About = () => {
  const [textBlocks, setTextBlocks] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    let query = '*[_type == "about"][0]'

    client.fetch(query)
      .then(data => {
        setTextBlocks(data.text)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  useEffect(() => {
    let query = '*[_type == "skills"]'

    client.fetch(query)
      .then(data => {
        setSkills(data)
      })
  }, [])

  return (
    <section className="app__about">
      <h2 className="section-header">About Me</h2>
      <div className="app__about-wrapper">
        <img src={aboutPhoto} alt="" className="app__about-img"/>
        <div className="app__about-text">
          <PortableText
            value={textBlocks}
          />
        </div>
      </div>
      <h3>
          I have experience with the following technologies:
      </h3>
      <div className="app__about-skills">
        {skills.map((skill, i) => (
          <div className="app__about-skill" key={i}>
            <div className="app__about-skill-img" style={{backgroundColor: skill.bgColor}}>
              <img src={urlFor(skill.image).width(150).url()} alt={skill.name}/>
            </div>
            <span className="app__about-skill-title">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About