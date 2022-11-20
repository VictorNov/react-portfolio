import React, { useState, useEffect } from 'react';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '../../client';

import aboutPhoto from '../../assets/img/about-photo.png';
import './About.scss';

import { ISkill } from '../../types';

export const About: React.FC = () => {
    const [ textBlocks, setTextBlocks ] = useState([]);
    const [ skills, setSkills ] = useState([]);

    useEffect(() => {
        let query = '*[_type == "about"][0]';

        client.fetch(query)
            .then(data => {
                setTextBlocks(data.text);
            })
            .catch(e => {
                console.error(e);
            });
    }, []);

    useEffect(() => {
        let query = '*[_type == "skills"]';

        client.fetch(query)
            .then((data) => {
                setSkills(data);
            });
    }, []);

    return (
        <section className="about">
            <h2 className="section-header">About Me</h2>
            <div className="about__wrapper">
                <div className="about__img-wrapper">
                    <img
                        src={aboutPhoto}
                        alt="Victor Novokshenov"
                        className="about__img"
                    />
                </div>
                <div className="about__text">
                    <PortableText value={textBlocks}/>
                </div>
            </div>
            <h3 className="about__title">
                I have experience with the following technologies:
            </h3>
            <ul className="about__skills">
                {skills.map((skill: ISkill, i) => (
                    <li
                        className="about__skill"
                        key={`skill-${i}`}
                    >
                        <div className="about__skill-img"
                             style={{ backgroundColor: skill.bgColor }}>
                            <img src={urlFor(skill.image)
                                .width(150)
                                .url()} alt={skill.name}/>
                        </div>
                        <span className="about__skill-title">{skill.name}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};