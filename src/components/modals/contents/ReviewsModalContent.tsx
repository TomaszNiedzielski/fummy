import React from 'react';
import { Review } from '../../dedicated/user_profile/reviews/Reviews';

interface Props {
    reviews: Review[];
    isMobile: boolean;
}

const ReviewsModalContent: React.FC<Props> = ({ reviews, isMobile }) => {
    return (
        <div className="mx-2 mx-md-4">
            {reviews?.map((props, i) => (
                <Review key={i} {...props} isMobile={isMobile} />
            ))}
        </div>
    );
}
export default ReviewsModalContent;