import { ImageUrlParams, Block } from "@sanity/types";

export interface ISkill {
    _id: string;
    bgColor: string;
    image: ImageUrlParams;
    name: string;
}

export interface ISocialLink {
    name: string;
    link: string;
    icon: string;
}

export interface IContact {
    title: string;
    link: string;
    icon: string;
}

export interface INavLink {
    to: string;
    label: string;
}

export interface ITag {
    _id: string;
    _ref: string;
    name: string;
}

export interface IProject {
    _id: string;
    name: string;
    description: Block[];
    link: string;
    gitHub: string;
    tags: ITag[];
    image: ImageUrlParams;
}