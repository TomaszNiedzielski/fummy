import React from 'react';

const FAQPage = () => {
    return (
        <div className="container text-white p-3 pt-lg-5">
            <h3>Najczęściej zadawane pytania</h3>
            <hr style={{ borderColor: 'white' }} />
            <h4>1. Do czego służy Fummy?</h4>
            <p>Fummy to serwis służący do zamawiania i sprzedaży video pomiędzy gwiazdami i ich fanami.</p>
            <h4>2. Jak długo trwa zamówienie?</h4>
            <p>Od chwili zamówienia video gwiazda ma 7 dni na nagranie video. Jeżeli video nie zostanie dostarczone zamawiający otrzyma zwrot pieniędzy.</p>
            <h4>3. Jakie video można zamówić?</h4>
            <p>Takie jakie w swojej ofercie ma gwiazda.</p>
        </div>
    );
}
export default FAQPage;