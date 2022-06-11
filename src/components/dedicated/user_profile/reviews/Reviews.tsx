import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import 'moment/locale/pl';
import StarRating from '../../star_rating/StarRating';
import styles from './Reviews.module.css';
import ReviewsModalContent from '../../../modals/contents/ReviewsModalContent';
import PrimaryModal from '../../../modals/PrimaryModal';
import { get, Response } from '../../../../helpers/ApiRequest';
import router from 'next/router';

export interface Review {
    name: string;
    rate: number;
    text: string;
    createdAt: string;
    isMobile?: boolean;
}

export const Review: React.FC<Review> = ({ name, createdAt, rate, text, isMobile }) => (
    <div className={styles.container + ' ' + (isMobile ? styles.mobile : '')}>
        <div className={styles.avatar}>{name[0]}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.date}>
            <Moment fromNow>{createdAt}</Moment>
        </div>
        <div className={styles.rate}>
            <StarRating rate={rate} />
        </div>
        <div className={styles.text}>{text}</div>
    </div>
);

const Reviews: React.FC<{ isDashboard: boolean }> = ({ isDashboard }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        get('reviews?user_nick=' + router.query.nick)
        .then((response: Response) => {
            if (response.code === 200) {
                setReviews(response.data);
            }
        });
    }, []);

    return (
        <section>
            <div className="d-flex justify-content-between">
                <h5>Recenzje</h5>
                {reviews.length > 5 ?
                    <div className={styles.all} data-toggle="modal" data-target="#reviewsModal">Zobacz wszystkie ({reviews.length})</div>
                : null}
            </div>
            {reviews.length > 0 ? reviews.slice(0, 3).map((props, i) => (
                <Review key={i} {...props} />
            )) : 
            <div className={styles.empty}>
                <h6 className="m-0">
                    {isDashboard
                        ? 'Nie masz jeszcze żadnej recenzji.'
                        : 'Ten użytkownik nie ma jeszcze żadnej recenzji.'}
                </h6>
            </div>}
            <PrimaryModal
                id="reviewsModal"
                title="Recenzje"
                Content={ReviewsModalContent}
                contentProps={{ reviews, isMobile: true }}
            />
        </section>
    );
}
export default Reviews;