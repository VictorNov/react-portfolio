import React, { useState, useEffect } from 'react';
import { Rings } from 'react-loader-spinner';

import { PortfolioItem } from '../components';
import './Portfolio.scss';
import { client } from '../../client';
import { ITag, IProject } from '../../types';

export const Portfolio: React.FC = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ allTags, setAllTags ] = useState([]);
    const [ portfolioItems, setPortfolioItems ] = useState([]);
    const [ filter, setFilter ] = useState('');

    useEffect(() => {
        const tagsQuery = '*[_type == "tag"]';
        const portfolioQuery = '*[_type == "projects"] | order(_createdAt desc)';

        client.fetch(tagsQuery)
            .then(data => {
                setAllTags(data);
            });

        client.fetch(portfolioQuery)
            .then(data => {
                setPortfolioItems(data);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        let query;

        setIsLoading(true);

        if ( filter ) {
            query = `*[_type == "tag" && name == "${filter}"]{
                _id, name,
                "projects": *[_type == "projects" && references(^._id)]
            } | order(_createdAt desc)`;
            client.fetch(query)
                .then(data => {
                    setPortfolioItems(data[0].projects);
                    setIsLoading(false);
                });
        } else {
            query = '*[_type == "projects"] | order(_createdAt desc)';
            client.fetch(query)
                .then(data => {
                    setPortfolioItems(data);
                    setIsLoading(false);
                });
        }
    }, [ filter ]);

    const filterHandler = (filter: string) => {
        setFilter(filter);
    };

    return (
        <main className="portfolio">
            <h2 className="section-header">Portfolio</h2>
            <div className="portfolio__tags">
                {allTags?.map((tag: ITag) => (
                    <button
                        className={`portfolio__tag ${filter === tag.name ? 'portfolio__tag--active' : ''}`}
                        key={`all-tags-${tag?.name}`}
                        onClick={() => {
                            filterHandler(tag?.name);
                        }}
                    >
                        <i className="ri-price-tag-3-line"/> {tag?.name}
                    </button>
                ))}
                <button
                    className={`portfolio__tag ${filter === null ? 'portfolio__tag--active' : ''}`}
                    onClick={() => filterHandler('')}
                >
                    <i className="ri-price-tag-3-line"/> Show all
                </button>
            </div>
            {isLoading ? (
                <div className="portfolio__loader">
                    <Rings color="#F17A3B"/>
                    <p>
                        Wait a second,<br/>
                        I'm loading the portfolio...
                    </p>
                </div>
            ) : (
                <>
                    <div className="portfolio__items">
                        {portfolioItems?.map((item: IProject) => (
                            <PortfolioItem
                                key={item.name}
                                item={item}
                                allTags={allTags}
                                filterHandler={filterHandler}
                            />
                        ))}
                    </div>
                </>
            )}
        </main>
    );
};