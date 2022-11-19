import React from 'react'
import {PortableText} from '@portabletext/react'

import './PortfolioItem.scss'
import { urlFor } from '../../client'

const PortfolioItem = ({item: {name, description, link, gitHub, image, tags}, allTags, filterHandler}) => {
  function findTag(ref) {
    return allTags.find(item => item._id === ref)
  }

  return (
    <div className="app__project-card">
      <div className="app__project-img">
        <img src={urlFor(image).width(450).url()} alt={name}/>
      </div>
      <div className="app__project-info">
        <h3 className="app__project-title">{name}</h3>
        <div className="app__project-description">
          <PortableText
            value={description}
          />
        </div>
        <div className="app__project-tags">
          {}
          {tags?.map((tag, i) => (
            <button
              className="app__project-tag"
              key={i}
              onClick={() => filterHandler(findTag(tag._ref)?.name)}
              aria-label={`Filter by ${findTag(tag._ref)?.name}`}
            >
              <i className="ri-price-tag-3-line" /> {findTag(tag._ref)?.name}
            </button>
          ))}
        </div>
        <div className="app__project-links">
          <a
            href={gitHub}
            target="_blank"
            rel="noreferrer"
            title="GitHUB repository"
            className="app__project-link"
          >
            <i className="ri-github-fill" />
          </a>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            title="Open project in new tab"
            className="app__project-link"
          >
            Open project <i className="ri-external-link-line" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem