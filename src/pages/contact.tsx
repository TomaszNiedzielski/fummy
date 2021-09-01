import React from 'react';
import * as Constants from '../constants';

const ContactPage = () => {
    return (
        <div className="container text-white pt-3 pt-lg-5">
            <h3>Kontakt</h3>
            <hr style={{ borderColor: 'white' }} />
            <h4>E-mail</h4>
            <p>{Constants.EMAIL}</p>

            <h4>Instagram</h4>
            <p>
                <a href={Constants.INSTAGRAM} target="_blank" rel="noopener noreferrer">{Constants.INSTAGRAM}</a>
            </p>
        </div>
    );
}
export default ContactPage;