import React from 'react';
import styles from './Videos.module.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import VideoPage from '../../../../pages/u/[nick]/video/[name]';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { API_STORAGE } from '../../../../constants';
import { isLinkExternal } from '../../../../helpers/Link';

interface Props {
    nick: string;
    videos: [{
        name: string;
        thumbnail: string;
    }]
}

const Videos: React.FC<Props> = ({ nick, videos }) => {
    return (
        <div className={styles.container}>
            <Router>
                <Swiper
                    pagination={{ "clickable": true }}
                    freeMode
                    breakpoints={{
                        "@0.00": {
                          "slidesPerView": 1,
                          "spaceBetween": 0,
                          "width": 250
                        },
                        "@0.75": {
                          "slidesPerView": 2,
                          "spaceBetween": 10,
                          "width": 500
                        },
                        "@1.00": {
                          "slidesPerView": 3,
                          "spaceBetween": 10,
                          "width": 750
                        },
                        "@1.50": {
                          "slidesPerView": 4,
                          "spaceBetween": 10,
                          "width": 1200
                        }
                    }}
                >
                    {videos.map(({ name, thumbnail }, i) => (
                        <SwiperSlide key={i}>
                            <div className={styles.card}>
                                <Link to={`${nick}/video/${name}`}>
                                    <img src={isLinkExternal(thumbnail) ? thumbnail : `${API_STORAGE}thumbnails/${thumbnail}`} alt="cover" className={styles.mask} />
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Switch>
                    <Route path="/u/:nick/video/:name">
                        <VideoPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
export default Videos;