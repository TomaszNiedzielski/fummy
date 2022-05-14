import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import styles from './CompletenessSteps.module.css';
import * as Constants from '../../../../constants';
import PrimaryInput from '../../../inputs/primary/PrimaryInput';

const Check: React.FC = () => (
    <img src="/icons/check.png" className={styles.check} />
);

const CompletenessSteps: React.FC<{ isVerified: boolean, isWelcomeVideoCompleted: boolean }> = ({ isVerified, isWelcomeVideoCompleted }) => {
    const [completeness, setCompleteness] = useState(0);

    const { profile: { bio, avatar, socials: { instagram, tiktok, youtube } }, offers } = useSelector((state: RootState) => state);

    useEffect(() => {
        let completeness = 0;
        if(avatar) completeness++;
        if(bio) completeness++;
        if(instagram.link || tiktok.link || youtube.link) completeness++;
        if(offers.data.length > 0) completeness++;
        if(isVerified) completeness++;
        if(isWelcomeVideoCompleted) completeness++;

        setCompleteness(completeness);
    }, [avatar, bio, instagram, tiktok, youtube, offers.data.length, isVerified, isWelcomeVideoCompleted]);


    if(completeness < 6) {
        return (
            <div className={styles.container}>
                <section>
                    <h5>Uzupełnij swój profil ({completeness} / 6)</h5>
                </section>
                <ul className="list-unstyled">
                    <li>
                        <span>1. Dodaj zdjęcie profilowe. {avatar && <Check />}</span>
                    </li>
                    <li>
                        <span>2. Dodaj opis. {bio && <Check />}</span>
                    </li>
                    <li>
                        <span>3. Dodaj linki do swoich mediów społecznościowych. {(instagram.link || tiktok.link || youtube.link) && <Check />}</span>
                    </li>
                    <li>
                        <span>4. Dodaj ofertę filmów, jakie chcesz nagrywać. {offers.data.length > 0 && <Check />}</span>
                    </li>
                    <li>
                        <span>5. Nagraj video na przywitanie i zgarnij 100 złoty! {isWelcomeVideoCompleted && <Check />}</span>
                    </li>
                    <li>
                        <span>
                            6. Zweryfikuj swoje konto, aby Twój profil stał się dostępny. Napisz do nas na nasz <a href={Constants.INSTAGRAM}>profil instagramowy</a>, wysyłając link do Twojego <span className="text-nowrap">profilu. {isVerified ? <Check /> : null}</span>
                            {!isVerified ? <PrimaryInput value={window.location.href} clickToCopy={true} style={{ cursor: 'pointer' }} /> : null}
                        </span>
                    </li>
                </ul>
            </div>
        );
    }

    return null;
}
export default CompletenessSteps;