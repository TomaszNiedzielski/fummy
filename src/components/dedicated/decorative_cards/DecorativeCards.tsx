import styles from './DecorativeCards.module.css';

interface Props {
    img: string;
    title: string;
    text: string;
    style?: object;
}

const Item: React.FC<Props> = ({ img, title, text, style }) => {
    return (
        <div className={styles.item} style={style}>
            <img src={img} alt="obraz" className={styles.img} />
            <div className={styles.title}>{title}</div>
            <div className={styles.text}>{text}</div>
        </div>
    );
}

const DecorativeCards: React.FC = () => {
    return (
        <section className={styles.container}>
            <Item
                img="/icons/gift.jpg"
                title="Idealne na prezent."
                text="Twój bliski ma urodziny i nie wiesz jaki dać mu prezent? Zamów dedykowane video od jego idola."
                style={{ background: 'rgba(0, 0, 0, .2)' }}
            />
            <Item
                img="/icons/positive_vibes.jpg"
                title="Słowa wsparcia od idola."
                text="Znasz kogoś kto jest teraz w ciężkiej sytuacji i potrzebuje kilku słów otuchy? Spraw mu wspaniały prezent."
            />
            <Item
                img="/icons/special.jpg"
                title="Coś specjalnego."
                text="Masz jakiś własny zwariowany pomysł na video? Sprawdź co oferują twoje ulubione gwiazdy."
                style={{ background: 'rgba(0, 0, 0, .2)' }}
            />
        </section>
    );
}
export default DecorativeCards;