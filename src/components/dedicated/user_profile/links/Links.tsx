import React from 'react';
import { SocialMediaLinks } from '../../../../redux/reducers/user/Profile';
import styles from './Links.module.css';

type Icon = 'instagram' | 'tiktok' | 'youtube';

interface ItemProps {
    icon: Icon;
    link: string;
    name: string;
}

const Item: React.FC<ItemProps> = ({ icon, link, name }) => (
    <a href={link} className="mr-3" target="_blank" rel="noopener noreferrer">
        <div className={styles.item}>
            <img src={"/icons/"+icon+".png"} alt="icon" className={styles.icon} />
            <span className={styles.name}>{name}</span>
        </div>
    </a>
);

interface Props {
    links: SocialMediaLinks
}

const Links: React.FC<Props> = ({ links }) => {
    const { instagram, tiktok, youtube } = links;

    if((instagram && instagram.link) || (tiktok && tiktok.link) || (youtube && youtube.link)) {
        return (
            <div className={styles.container}>
                {instagram && instagram.link && <Item icon="instagram" link={instagram.link} name={instagram.name} />}
                {tiktok && tiktok.link && <Item icon="tiktok" link={tiktok.link} name={tiktok.name} />}
                {youtube && youtube.link && <Item icon="youtube" link={youtube.link} name={youtube.name} />}
            </div>
        );
    }

    return null;
}
export default Links;