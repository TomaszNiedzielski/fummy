import React from 'react';

const FAQPage = () => {
    return (
        <div className="container text-white p-3 pt-lg-5">
            <section>
                <h3>Najczęściej zadawane pytania</h3>
                <hr style={{ borderColor: 'white' }} />
                <ul>
                    <li>
                        <h6>1. Czym jest Fummy?</h6>
                        <p>Fummy jest internetowym marketplacem, gdzie fani mogą zamówić spersonalizowany film od swojego idola.</p>
                    </li>
                    <li>
                        <h6>2. Jak działa Fummy?</h6>
                        <p>
                            Fummy daje możliwość influencerom tworzenia unikalnych, dodatkowych, płatnych treści w postaci filmów dla swoich widzów.
                            <br />
                            Widzowie natomiast mają możliwość zamówienia wyjątkowego filmu od swojego ulubionego twórcy. 
                        </p>
                    </li>
                </ul>
            </section>
            <section>
                <h4>Przez influencerów.</h4>
                <ul>
                    <li>
                        <h6>3. Czy każdy może zarabiać dzięki Fummy?</h6>
                        <p>
                            TAK. Nie musisz być czołowym infulencerem posiadającym miliony obserwujących na swoich social mediach.
                            Wystarczy, że posiadasz wierną społeczność, która jest zainteresowana kupnem wyjątkowych filmów stworzonych przez Ciebie.
                        </p>
                    </li>
                    <li>
                        <h6>4. Jak zacząć zarabiać na Fummy?</h6>
                        <p>
                            Wystarczy, że założysz konto w serwisie Fummy, potwierdzisz swój adres e-mail, wypełnisz swój profil, dodasz ofertę i udostępnisz
                            link swojej społeczności.
                        </p>
                    </li>
                    <li>
                        <h6>5. Jak zweryfikować profil?</h6>
                        <p>
                            Aby zweryfikować profil należy wysłać link swojego konta Fummy ze swojego oficjalnego konta na
                            Instagramie na konto Fummy: https://www.instagram.com/fummy.co
                        </p>
                    </li>
                    <li>
                        <h6>6. Czy muszę posiadać zweryfikowany profil, aby zarabiać na Fummy?</h6>
                        <p>
                            NIE. Dzięki weryfikacji Twój profil będzie widoczny na głównej stronie Fummy oraz będzie można go wyszukać.
                            Nie uniemożliwia to natomiast zarabiania, wystarczy, że Twój profil udostępnisz swoim obserwującym na jakichkolwiek social mediach.
                        </p>
                    </li>
                </ul>
            </section>
            <section>
                <h4>Przez widzów.</h4>
                <ul>
                    <li>
                        <h6>7. Jak zamówić film?</h6>
                        <p>Wystarczy wejść na profil influencera, u którego chcesz zamówić film, wybrać ofertę, która Cię interesuje, wypełnić formularz i opłacić zamówienie.</p>
                    </li>
                    <li>
                        <h6>8. Jaki jest koszt filmiku?</h6>
                        <p>Fummy nie posiada stałego cennika. Ceny zależą od influencerów i od specyfikacji ofert.</p>
                    </li>
                    <li>
                        <h6>9. Jak długo będę czekać na zamówienie?</h6>
                        <p>Influencer jest zobowiązany do zrealizowania zamówienia do maksymalnie 7 dni (168 godzin) od uiszczenia opłaty przez widza.</p>
                    </li>
                    <li>
                        <h6>10. Co jeżeli nie otrzymam zamówienia po 7 dniach?</h6>
                        <p>
                            Jeżeli influencer nie zrealizuje zamówienia w ciągu 7 dni to dział administracji po przeanalizowaniu powodów zwróci Tobie
                            pieniądze do 14 dni od opłacenia zamówienia. Dodatkowo otrzymasz uzasadnienie dlaczego zamówienie nie zostało zrealizowane. 
                        </p>
                    </li>
                    <li>
                        <h6>11. Czy mój zamówiony filmik musi być publiczny?</h6>
                        <p>
                            Oczywiście, że nie. Jeżeli nie chcesz, aby Twój film się wyświetlał na profilu influelncera wystarczy zaznaczyć opcję:
                            „Nie pokazuj tego video w serwisie” podczas wypełniania formularza zamówienia. 
                        </p>
                    </li>
                </ul>
            </section>
        </div>
    );
}
export default FAQPage;