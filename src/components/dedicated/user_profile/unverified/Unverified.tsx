import React from 'react';
import PrimaryInput from '../../../inputs/primary/PrimaryInput';
import * as Constants from '../../../../constants';

const Unverified: React.FC = () => {
    return (
        <div className="my-5 d-flex align-items-center flex-column">
            <hr className="d-block d-lg-none" style={{ background: 'white', width: '100%' }} />
            <div className="font-weight-bold text-center my-4">
                <div>Zweryfikuj swoje konto, aby Twój profil stał się dostępny.</div>
                <div>Napisz do nas na nasz <a href={Constants.INSTAGRAM}>profil instagramowy</a>, wysyłając poniższy link do Twojego profilu.</div>
                <PrimaryInput value={window.location.href} clickToCopy={true} style={{ cursor: 'pointer' }} />
            </div>
        </div>
    );
}
export default Unverified;