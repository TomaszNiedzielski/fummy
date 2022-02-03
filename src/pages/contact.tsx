import React from 'react';
import * as Constants from '../constants';

const ContactPage = () => {
    return (
        <div className="container text-white pt-3 pt-lg-5">
            <h2>Kontakt</h2>
            <hr style={{ borderColor: 'white' }} />
            <section>
                <h4>E-mail</h4>
                <p>{Constants.EMAIL}</p>
            </section>
            <section>
                <h4>Instagram</h4>
                <p>
                    <a href={Constants.INSTAGRAM} target="_blank" rel="noopener noreferrer">{Constants.INSTAGRAM}</a>
                </p>
            </section>
        </div>
    );
}
export default ContactPage;