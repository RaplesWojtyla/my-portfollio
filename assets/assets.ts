import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './wojtyla-photo.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import android_studio from './android-studio-icon.png';
import mysql from './mysql-icon.png'
import neondb from './neondb.png'
import { StaticImageData } from 'next/image';

type Assets = {
    code_icon: StaticImageData;
    code_icon_dark: StaticImageData;
    edu_icon: StaticImageData;
    edu_icon_dark: StaticImageData;
    project_icon: StaticImageData;
    project_icon_dark: StaticImageData;
    vscode: StaticImageData;
    firebase: StaticImageData;
    figma: StaticImageData;
    git: StaticImageData;
    mongodb: StaticImageData;
    right_arrow_white: StaticImageData;
    mail_icon: StaticImageData;
    mail_icon_dark: StaticImageData;
    profile_img: StaticImageData;
    download_icon: StaticImageData;
    hand_icon: StaticImageData;
    header_bg_color: StaticImageData;
    moon_icon: StaticImageData;
    sun_icon: StaticImageData;
    arrow_icon: StaticImageData;
    arrow_icon_dark: StaticImageData;
    menu_black: StaticImageData;
    menu_white: StaticImageData;
    close_black: StaticImageData;
    close_white: StaticImageData;
    web_icon: StaticImageData;
    mobile_icon: StaticImageData;
    ui_icon: StaticImageData;
    graphics_icon: StaticImageData;
    right_arrow: StaticImageData;
    send_icon: StaticImageData;
    right_arrow_bold: StaticImageData;
    right_arrow_bold_dark: StaticImageData;
    android_studio: StaticImageData;
    mysql: StaticImageData;
    neondb: StaticImageData;
}

type ProjectData = {
    title: string
    description: string
    bgImage: string
    url: string
}

type ServiceData = {
    icon: StaticImageData
    title: string
    description: string
    link: string
}

type InfoList = {
    icon: StaticImageData
    iconDark: StaticImageData
    title: string
    description: string
}

export const assets: Assets = {
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    android_studio,
    mysql,
    neondb
};

export const projectData: Array<ProjectData> = [
    {
        title: 'Apotek Pelangi',
        description: 'Online Pharmacy Platform',
        bgImage: '/apotek-pelangi.png',
        url: 'https://apotek-pelangi.vercel.app'
    },
    {
        title: 'Assembly: Endgame',
        description: 'Web App',
        bgImage: '/assembly-endgame.png',
        url: 'https://github.com/RaplesWojtyla/Assembly-Endgame'
    },
    {
        title: 'Recipe Generator',
        description: 'Web App with Integrated AI',
        bgImage: '/recipe-gene.png',
        url: 'https://github.com/RaplesWojtyla/RecipeGenerator'
    },
    {
        title: 'Poskesdes Laubaleng',
        description: 'E-Commerce Web App',
        bgImage: '/poskesdes.png',
        url: 'https://github.com/RaplesWojtyla/poskesdes-laubaleng'
    },
    {
        title: 'E-Cycle',
        description: 'Mobile App',
        bgImage: '/work-1.png',
        url: 'https://github.com/RaplesWojtyla/E-Cycle-App'
    },
    {
        title: 'Sparks',
        description: 'Social Media Web App',
        bgImage: '/sparks.png',
        url: 'https://github.com/RaplesWojtyla/Sparks'
    },
    {
        title: 'Skill Vortex',
        description: 'Education Web App',
        bgImage: '/skill-vortex.png',
        url: 'https://github.com/RaplesWojtyla/SkillVortex'
    },
]

export const serviceData: Array<ServiceData> = [
    { icon: assets.web_icon, title: 'Web App', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile App', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
]

export const infoList: Array<InfoList> = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'JavaScript, TypeScript, React.Js, Next.Js, Express.Js, PHP, Laravel' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Undergraduate student at Universitas Sumatera Utara.' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData: Array<StaticImageData> = [
    assets.vscode, assets.android_studio, assets.mongodb, assets.mysql, assets.git, assets.neondb
];