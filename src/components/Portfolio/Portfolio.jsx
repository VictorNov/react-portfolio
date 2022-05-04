import React, {useState, useEffect} from 'react'
import { Rings } from 'react-loader-spinner'

import { PortfolioItem } from '../components'
import './Portfolio.scss'
import { client } from '../../client'

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [allTags, setAllTags] = useState([])
  const [portfolioItems, setPortfolioItems] = useState([])
  const [filter, setFilter] = useState(null)

  useEffect(() => {
    const tagsQuery = '*[_type == "tag"]'
    const portfolioQuery = '*[_type == "projects"] | order(_createdAt desc)'

    client.fetch(tagsQuery)
      .then(data => {
        setAllTags(data)
      })

    client.fetch(portfolioQuery)
      .then(data => {
        setPortfolioItems(data)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    let query

    setIsLoading(true)

    if (filter) {
      query = `*[_type == "tag" && name == "${filter}"]{
  _id, name,
  "projects": *[_type == "projects" && references(^._id)]
} | order(_createdAt desc)`
      client.fetch(query)
        .then(data => {
          setPortfolioItems(data[0].projects)
          setIsLoading(false)
        })
    } else {
      query = '*[_type == "projects"] | order(_createdAt desc)'
      client.fetch(query)
        .then(data => {
          setPortfolioItems(data)
          setIsLoading(false)
        })
    }
  }, [filter])

  const filterHandler = (filter) => {
    setFilter(filter)
  }

  return (
    <main className="app__portfolio">
      <h2 className="section-header">Портфолио</h2>
      <div className="app__portfolio-tags">
        {allTags?.map(tag => (
          <button
            className={tag?.name === filter ? "app__portfolio-tag active" : "app__portfolio-tag" }
            key={tag?.name}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              filterHandler(tag?.name)
            }}
          >
            <i className="ri-price-tag-3-line" /> {tag?.name}
          </button>
        ))}
        <button
          className={null === filter ? "app__portfolio-tag active" : "app__portfolio-tag" }
          onClick={() => filterHandler(null)}
        >
          <i className="ri-price-tag-3-line" /> Все
        </button>
      </div>
      {isLoading ? (
        <div className="app__portfolio-isLoading">
          <Rings color='#F17A3B' />
          <p>
            Подождите<br />
            Портфолио загружается...
          </p>
        </div>
      ) : (
        <>
          <div className="app__portfolio-items">
            {portfolioItems?.map((item) => (
              <PortfolioItem key={item.name} item={item} allTags={allTags} filterHandler={filterHandler} />
            ))}
          </div>
        </>
      )}
    </main>
  )
}

export default Portfolio