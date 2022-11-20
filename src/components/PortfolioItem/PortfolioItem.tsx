import React from 'react';
import { PortableText } from '@portabletext/react';

import './PortfolioItem.scss';
import { urlFor } from '../../client';
import { IProject, ITag } from '../../types';

interface PortfolioItemProps {
    item: IProject;
    allTags: ITag[];
    filterHandler: (tag: string) => void;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
                           item: {
                               name,
                               description,
                               link,
                               gitHub,
                               image,
                               tags,
                           },
                           allTags,
                           filterHandler
                       }) => {
    function findTag(ref: string): ITag | undefined {
        return allTags.find(item => item._id === ref);
    }

    return (
        <div className="portfolio-item">
            <div className="portfolio-item__img">
                <img
                    src={urlFor(image)
                        .width(450)
                        .url()} alt={name}
                    aria-label={name}
                />
            </div>
            <div className="portfolio-item__info">
                <h3 className="portfolio-item__title">{name}</h3>
                <div className="portfolio-item__description">
                    <PortableText
                        value={description}
                    />
                </div>
                <div className="portfolio-item__tags">
                    {tags?.map((tag, i) => (
                        <button
                            className="portfolio-item__tag"
                            key={`project-tag-${i}`}
                            onClick={() => filterHandler(findTag(tag._ref)?.name || '')}
                            aria-label={`Filter by ${findTag(tag._ref)?.name}`}
                        >
                            <i className="ri-price-tag-3-line"/> {findTag(tag._ref)?.name}
                        </button>
                    ))}
                </div>
                <ul className="portfolio-item__links">
                    <li>
                        <a
                            href={gitHub}
                            target="_blank"
                            rel="noreferrer"
                            title="GitHUB repository"
                            className="portfolio-item__link"
                            aria-label="GitHUB repository"
                        >
                            <i className="ri-github-fill"/>
                        </a>
                    </li>
                    <li>
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            title="Open project in new tab"
                            className="portfolio-item__link"
                            aria-label="Open project in new tab"
                        >
                            Open project <i className="ri-external-link-line"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};