import styles from './StarRating.module.css';
import { v4 as uuidv4 } from 'uuid';

interface StarProps {
    i: number;
    isChecked: boolean;
    onChange: Props['onChange'];
    size: Props['size'];
}

const Star: React.FC<StarProps> = ({ i, isChecked, onChange, size }) => {
    const id = uuidv4();

    return (
        <>
            <label aria-label={i + " star"} className={styles.label + ' ' + (onChange ? styles.changeable : '')} htmlFor={id + i} style={{ fontSize: size }}>
                <i className={styles.icon + " " + styles.iconStar + " fa fa-star"}></i>
            </label>
            <input checked={isChecked} className={styles.input} id={id + i} value={i} type="radio" onChange={() => onChange && onChange(i)} />
        </>
    );
}

interface Props {
    rate: number;
    onChange?: (i: number) => void;
    size?: number;
}

const StarRating: React.FC<Props> = ({ rate, onChange, size }) => {
    
    return (
        <div>
            <div className={styles.group}>
                <input checked={rate === 0} disabled className={styles.input + " " + styles.inputNone} value="0" type="radio" />
                {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                        key={i}
                        i={i}
                        isChecked={i === rate}
                        onChange={onChange}
                        size={size}
                    />
                ))}
                <div className="ml-2">{rate}.0</div>
            </div>
        </div>
    );
}
export default StarRating;