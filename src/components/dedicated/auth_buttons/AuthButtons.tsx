import React from 'react';
import PrimaryButton from '../../buttons/primary/PrimaryButton';

const AuthButtons: React.FC = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center mt-5">
        <PrimaryButton title="Dołącz jako influencer" attributes={{ 'data-toggle': 'modal', 'data-target': '#registerModal' }} />
        <div className="mt-4" style={{ fontSize: '13px' }}>Masz już konto?</div>
        <PrimaryButton
            title="Zaloguj się"
            style={styles.loginButton}
            attributes={{ 'data-toggle': 'modal', 'data-target': '#loginModal' }}
        />
        </div>
    );
}
export default AuthButtons;

const styles = {
    loginButton: {
        borderRadius: '5px',
        backgroundColor: 'white',
        color: 'var(--global-primary-color)',
        border: '1px solid var(--global-primary-color)',
        maxWidth: '92px',
        height: '42px',
        padding: '0px',
        marginTop: '8px'
    }
}