import styles from './RadioButton.module.css';

interface Props {
    text: string;
    onSelect: () => void;
    isSelected: boolean;
    rounded?: boolean;
}

const RadioButton: React.FC<Props> = ({ text, onSelect, isSelected, rounded }) => {
    return (
        <div
            className={styles.container + ' ' + (rounded && styles.rounded)}
            onClick={onSelect}
        >
            <div className={styles.content + ' ' + (rounded && styles.rounded)}
                style={isSelected ? {
                    boxShadow: '0 0 2px 3px var(--global-primary-color)',
                    backgroundColor: 'rgba(var(--global-primary-color-rgb), .3)',
                    color: 'var(--global-primary-color)',
                } : {}}
            >
                <span>{text}</span>
                {isSelected
                    ? <img src="/icons/check.png" alt="check" className={styles.check} />
                    : <div className={styles.circle}></div>
                }
            </div>
        </div>
    );
}
export default RadioButton;