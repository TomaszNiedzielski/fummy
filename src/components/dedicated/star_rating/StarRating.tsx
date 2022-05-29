import styles from './StarRating.module.css';
import { v4 as uuidv4 } from 'uuid';

const Star: React.FC = () => (
    <i className={styles.icon + " " + styles.iconStar + " fa fa-star"}></i>
);

interface Props {
    rate: number;
    onChange?: (i: number) => void;
    size?: number;
}

const StarRating: React.FC<Props> = ({ rate, onChange, size }) => {
    const id = uuidv4();
    
    return (
        <div>
            <div className={styles.group}>
                <input checked={rate === 0} disabled className={styles.input + " " + styles.inputNone} value="0" type="radio" />
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i}>
                        <label aria-label={i + " star"} className={styles.label + ' ' + (onChange ? styles.changeable : '')} htmlFor={id + i} style={{ fontSize: size }}>
                            <Star />
                        </label>
                        <input checked={i === rate} className={styles.input} id={id + i} value={i} type="radio" onChange={() => onChange && onChange(i)} />
                    </div>
                ))}
                <div className="ml-2">{rate}.0</div>
            </div>
        </div>
    );
}
export default StarRating;