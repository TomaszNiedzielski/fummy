import React from 'react';
import { INSTAGRAM, APP_NAME, EMAIL } from '../constants';

const TermsOfUsePage: React.FC = () => {
    return (
        <div className="container text-white py-3 py-lg-5">
            <h2>Regulamin Serwisu Internetowego {APP_NAME}</h2>
            <hr style={{ borderColor: 'white' }} />
            <h4>I. Postanowienia ogólne</h4>
            <h6>1. Niniejszy Regulamin określa ogólne warunki, zasady oraz sposób świadczenia Usług drogą elektroniczną, za pośrednictwem serwisu internetowego {APP_NAME} (zwanego dalej „Serwisem Internetowym” lub „Serwisem”) przez Tomasza Niedzielskiego, zwanego dalej Usługodawcą.</h6>
            <h6>2. Kontakt z Usługodawcą odbywa się za pośrednictwem:</h6>
            <ul>
                <li>wiadomości e-mail na adres: {EMAIL};</li>
                <li>wiadomości za pośrednictwem Serwisu Instagram - <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">{INSTAGRAM}</a></li>
            </ul>
            
            <h6>
                3. Niniejszy Regulamin jest nieprzerwanie i nieodpłatnie udostępniony przez Usługodawcę w witrynie internetowej {APP_NAME},
                w sposób umożliwiający Użytkownikom jego pozyskanie, odtwarzanie i utrwalanie jego treści poprzez wydrukowanie lub zapisanie
                na nośniku w każdej chwili za pomocą systemu informatycznego, którym posługuje się Użytkownik.
            </h6>
            <h6>
                4. Wszelkie prawa do Serwisu Internetowego, w tym majątkowe prawa autorskie, prawa własności intelektualnej do jego nazwy, domeny internetowej,
                strony internetowej Serwisu, a także do formularzy, logotypów należą do Usługodawcy lub podmiotów z nim współpracujących,
                a korzystanie z nich może następować wyłącznie w sposób określony i zgodny z Regulaminem.
            </h6>
            <h6>
                5. Zabronione jest kopiowanie, powielanie, modyfikowanie, zwielokrotnianie czy rozpowszechnianie jakiejkolwiek części Serwisu,
                Usługi lub jej elementów bez uprzedniej pisemnej zgody Usługodawcy, poza przypadkami wyraźnie dozwolonymi przez przepisy obowiązującego prawa i Regulaminu.
                Usługodawca może podjąć kroki, w tym na drodze postępowania sądowego, w celu ochrony interesów swoich i Użytkowników.
            </h6>
            <h6>
                6. Usługodawca zastrzega sobie prawo do zamieszczania na stronie internetowej Serwisu treści reklamowych dotyczących oferowanych usług,
                jak i towarów i usług osób trzecich, w formach stosowanych w sieci Internet. Korzystanie z takich ofert lub usług nie jest elementem Serwisu,
                a ich zasady określają odpowiednie podmioty trzecie.
            </h6>
            <h6>
                7. Adresatem Usług świadczonych poprzez Serwis Internetowy są osoby posiadające pełną zdolność do czynności prawnych.
            </h6>
            <h6>
                8. Niniejszy Regulamin określa w szczególności zasady korzystania z Serwisu Internetowego, rodzaje i zakres Usług, warunki świadczenia Usług, warunki zawierania
                i rozwiązywania umów o świadczenie Usług oraz tryb postępowania reklamacyjnego.
            </h6>
            <h6>
                9. Usługodawca informuje, że korzystanie z usług świadczonych drogą elektroniczną może wiązać się z zagrożeniem po stronie każdego użytkownika sieci Internet,
                polegającym na możliwości wprowadzenia do systemu teleinformatycznego Użytkownika szkodliwego oprogramowania oraz pozyskania i modyfikacji
                jego danych przez osoby nieuprawnione. By uniknąć ryzyka wystąpienia w/w zagrożeń, Użytkownik powinien stosować właściwe środki techniczne,
                które zminimalizują ich wystąpienie, a w szczególności programy antywirusowe i zaporę sieciową typu firewall.
            </h6>
            <h6>
                10. Zasady świadczenia w ramach Serwisu innych Usług, w tym Usług płatnych mogą określać dodatkowe regulaminy.
            </h6>

            <h4>II. Definicje</h4>

            <h6>Pojęcia użyte w niniejszym dokumencie mają następujące znaczenie:</h6>

            <h6>
                <b>Serwis Internetowy / Serwis</b> - serwis internetowy dostępny w domenie {APP_NAME}, którego właścicielem i administratorem jest Usługodawca,
                w ramach którego Widzowie mogą korzystać z Usług oferowanych przez Użytkowników Zarejestrowanych;
            </h6>

            <h6>
                <b>Widz</b> – osoba fizyczna posiadająca pełną zdolność do czynności prawnych, która może uiścić Opłatę na wskazany
                przez Użytkownika Zarejestrowanego cel;
            </h6>

            <h6>
                <b>Użytkownik Zarejestrowany / Zarejestrowany</b> – Użytkownik prowadzący działalność gospodarczą lub prowadzący działalność w ramach
                działalności nieewidencjonowanej, o której mowa w ustawie z dnia 6 marca 2018 Prawo przedsiębiorców i będący przedsiębiorcą w
                rozumieniu art.43[1] Kodeksu cywilnego lub konsument w rozumieniu art. 22[1] Kodeksu cywilnego, który dokonał rejestracji w Serwisie.
                Z rejestracją i założeniem Konta może być związane zwiększenie uprawnień Użytkownika Zarejestrowanego, zgodnie z niniejszym Regulaminem;
            </h6>

            <h6>
                <b>Konto</b> – przydzielona danemu Użytkownikowi Zarejestrowanemu na jego wyłączność część Serwisu, za pomocą której Użytkownik
                Zarejestrowany może dokonywać na rzecz Widzów określonych działań w ramach Serwisu zgodnie z niniejszym Regulaminem;
            </h6>

            <h6>
                <b>Konto Google</b> – Konto Użytkownika Zarejestrowanego w Serwisie Google.com prowadzonym przez Google Ireland Limited,
                spółkę zarejestrowaną i działającą zgodnie z prawem irlandzkim (numer rejestracyjny: 368047), z siedzibą pod adresem
                Gordon House, Barrow Street, Dublin 4, Irlandia;
            </h6>

            <h6>
                <b>Konto Facebook</b> – Konto Użytkownika Zarejestrowanego w Serwisie Facebook.com prowadzonym przez Facebook Ireland Limited,
                spółkę zarejestrowaną i działającą zgodnie z prawem irlandzkim (numer rejestracyjny: 462932), z siedzibą pod adresem
                4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irlandia;
            </h6>

            <h6>
                <b>Usługa wiadomości</b> – oświadczenie woli Widza, zmierzające bezpośrednio do zawarcia umowy o umieszczenie Wiadomości w Czacie
                poprzez przyjęcie oferty Użytkownika Zarejestrowanego zgodnie z art. 66[1] Kodeksu cywilnego.
            </h6>

            <h6>
                <b>Czat / Czat Internetowy</b> - przestrzeń internetowa Użytkownika Zarejestrowanego, w której Widzowie mogą odpłatnie umieszczać
                jednorazowe Wiadomości, udostępniana w sieci Internet na stronach internetowych udostępnianych
                przez Usługodawcę Użytkownikom Zarejestrowanym;
            </h6>

            <h6>
                <b>Wiadomość</b> - treść tekstowa, umieszczana przez Widza, dostępna dla każdego obserwującego Czat;
            </h6>

            <h6>
                <b>Panel Zamówień</b> - to część Konta, przypisana do utworzonego przez Użytkownika Zarejestrowanego Czatu,
                wyodrębniona z funkcjonalności Konta w ten sposób, aby możliwy był do niej dostęp dla Widzów.
                Panel Zamówień umożliwia Widzom na umieszczenie Wiadomości w Czacie, powiązanym z Panelem Zamówień;
            </h6>

            <h6>
                <b>Usługi</b> - usługi świadczone przez Usługodawcę na rzecz Użytkowników Zarejestrowanych drogą elektroniczną
                w rozumieniu przepisów ustawy z dnia 18 lipca 2002 roku o świadczeniu usług drogą elektroniczną (Dz.U. nr 144, poz. 1204 ze zm.);
            </h6>

            <h6>
                <b>Umowa</b> - umowa o świadczenie Usługi, zawarta pomiędzy Usługodawcą a Użytkownikiem Zarejestrowanym;
            </h6>

            <h6>
                <b>Konsument</b> - Użytkownik Zarejestrowany będący konsumentem w rozumieniu art. 22[1] Kodeksu cywilnego;
            </h6>

            <h6>
                <b>Ustawa o prawach konsumenta</b> - ustawa z dnia 30 maja 2014 r. o prawach konsumenta (Dz. U. 2014, Nr 827)
            </h6>

            <h6>
                <b>Ustawa o świadczeniu usług drogą elektroniczną</b> - ustawa z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz. U. Nr 144, poz. 1204 ze zm.);
            </h6>

            <h6>
                <b>Kodeks cywilny</b> - ustawa z dnia 23 kwietnia 1964 r. (Dz. U. Nr 16, poz. 93 ze zm.);
            </h6>

            <h6>
                <b>Ustawa o prawach autorskich</b> - ustawa z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych (Dz. U. 1994 nr 24 poz. 83)
            </h6>

            <h6>
                <b>Pośrednik</b> - podmiot współpracujący z Usługodawcą i świadczący na jego rzecz usługi transakcji płatniczych,
                przekazów i transferów pieniężnych z tytułu wpłat otrzymanych od Widzów na cel określony przez Zarejestrowanych Użytkowników,
                tj. ePłatności SP. Z O.O. SP. K. z siedzibą w Andrychowie (34-120), zarejestrowaną w Rejestrze Przedsiębiorców pod numerem KRS: 000655383, NIP: 5512627897
            </h6>

            <h6>
                <b>Regulamin</b> - niniejszy dokument.
            </h6>

            <h6>
                <b>Urządzenie</b> - sprzęt elektroniczny (komputer, telefon, tablet) wykorzystywany przez Użytkowników Zarejestrowanych
                do prowadzenia Konta w Serwisie lub Widzów.
            </h6>

            <h6>
                <b>Opłata</b> - wpłata dokonana przez Widzów związana z Usługami uregulowanymi w dziale VIII Regulaminu na cel wskazany
                przez Użytkownika Zarejestrowanego.
            </h6>

            <h6>
                <b>Należność</b> - Opłaty uiszczone przez Widzów przekazanych przez Usługodawcę do Użytkownika Zarejestrowanego.
            </h6>

            <h4>III. Zasady korzystania z serwisu</h4>

            <h6>
                1. Usługodawca w ramach Serwisu umożliwia Użytkownikom Zarejestrowanym korzystanie ze świadczonych przez siebie Usług,
                w szczególności z możliwości do założenia Konta, oraz do przeglądania innych treści prezentowanych w Serwisie
                i korzystania z innych Usług dostępnych dla Użytkowników Zarejestrowanych.
            </h6>

            <h6>
                2. W ramach Serwisu Usługodawca udostępnia Użytkownikom Zarejestrowanym za pośrednictwem Serwisu Usługi, o których mowa w dziale V Regulaminu.
            </h6>

            <h6>
                3. Korzystanie z Serwisu może się odbywać wyłącznie na zasadach i w zakresie wskazanym w Regulaminie.
            </h6>

            <h6>
                4. Korzystanie z Serwisu Internetowego jest możliwe pod warunkiem spełnienia przez system z którego korzysta Widz
                oraz Użytkownika Zarejestrowany, następujących minimalnych wymagań technicznych:
                <ul>
                    <li>urządzenie z dostępem do Internetu,</li>
                    <li>dostęp do poczty elektronicznej,</li>
                    <li>
                        przeglądarka internetowa Internet Explorer w wersji 11 lub nowszej, Firefox w wersji 28.0 lub nowszej, Chrome w wersji 32 lub nowszej,
                        Opera w wersji 12.17 lub nowszej, Safari w wersji 1.1. lub nowszej,
                        najnowsza wersja przeglądarki internetowej z włączoną obsługą plików Cookies i Java Script,
                    </li>
                </ul>
            </h6>

            <h6>
                5. Użytkownik Zarejestrowany oraz Widz zobowiązani są do korzystania z Serwisu Internetowego w sposób zgodny z przepisami obowiązującego
                na terytorium Rzeczypospolitej Polskiej prawa, postanowieniami Regulaminu, a także z ogólnymi zasadami korzystania z sieci Internet.
            </h6>

            <h6>
                6. Użytkownik Zarejestrowany ma prawo do korzystania z wszelkich Usług świadczonych przez Usługodawcę oraz treści prezentowanych
                w ramach Serwisu Internetowego jedynie w zakresie własnego użytku osobistego. Usługodawca nie wyraża zgody na używanie zasobów
                i funkcji Serwisu w celu prowadzenia przez Usługobiorcę działalności, która naruszałaby interes Usługodawcy,
                w tym do świadczenia usług marketingowych na rzecz podmiotów konkurencyjnych względem Usługodawcy.
            </h6>

            <h6>
                7. Zabronione jest korzystanie przez Widzów oraz Użytkowników Zarejestrowanych z Serwisu w sposób naruszający przepisy prawa,
                dobre obyczaje, dobra osobiste osób trzecich lub uzasadnione interesy Usługodawcy, a w szczególności zabronione jest:
            </h6>
            <ul>
                <li>
                    dostarczanie i przekazywanie treści zabronionych przez przepisy prawa, np. treści propagujących przemoc, zniesławiających
                    lub naruszających dobra osobiste i inne prawa osób trzecich,
                </li>
                <li>korzystanie z Serwisu Internetowego w sposób zakłócający jego funkcjonowania, w szczególności poprzez użycie określonego oprogramowania lub urządzeń,</li>
                <li>podejmowanie działań takich jak: rozsyłanie lub umieszczanie w ramach Serwisu Internetowego niezamówionej informacji handlowej (spam),</li>
                <li>korzystanie z Serwisu Internetowego w sposób uciążliwy dla innych Widzów, Użytkowników Zarejestrowanych oraz dla Usługodawcy.</li>
            </ul>
            
            <h4>IV. Prawa i obowiązki użytkowników zarejestrowanych</h4>

            <h6>1. Użytkownik Zarejestrowany jest zobowiązany do:</h6>
            <ul>
                <li>
                    korzystania z Serwisu w sposób zgodny z prawem, dobrymi obyczajami, a także postanowieniami Regulaminu,
                    mając na uwadze poszanowanie dóbr osobistych i praw własności intelektualnej osób trzecich,
                </li>
                <li>
                    wprowadzania w Serwisie danych zgodnych ze stanem faktycznym oraz informowania, niezwłocznie o jakichkolwiek
                    zmianach dotyczących przekazanych Usługodawcy danych.
                </li>
                <li>niestosowania urządzeń, oprogramowania oraz metod mogących zakłócić działanie Serwisu,</li>
                <li>
                    nieprzeprowadzania za pomocą Serwisu zbiórek pieniędzy, w postaci darowizn, napiwków lub innych polegających na
                    transferach środków pieniężnych pomiędzy Użytkownikami Zarejestrowanymi, niezgodnych z niniejszym Regulaminem,
                </li>
            </ul>

            <h6>
                2. Użytkownik Zarejestrowany będący Konsumentem ma prawo do odstąpienia od umowy świadczenia Usług zawartej z Usługodawcą
                w terminie 14 dni od dnia zawarcia umowy, bez podawania przyczyny, chyba że przed zawarciem Umowy wyraził zgodę na
                świadczenie Usługi przed upływem terminu do odstąpienia od umowy, co skutkuje utratą tego prawa. Prawo do odstąpienia od
                Umowy przez Konsumenta jest wyłączone w przypadku Umowy o świadczenie usług polegających na dostarczaniu treści cyfrowej,
                które są zapisywane na nośniku materialnym, a spełnianie świadczenia rozpoczęło się za wyraźną zgoda Konsumenta przed
                upływem 14 dniowego terminu na odstąpienie od Umowy. Prawo do odstąpienie od Umowy przez Konsumenta wyłączone jest również
                w momencie pełnego wykonania usługi za wyraźną zgoda Konsumenta, po poinformowaniu o utracie wtedy tegoż prawa.
            </h6>

            <h6>3. Do zachowania ww. terminu wystarczy wysłanie oświadczenia przed jego upływem, jak również usunięcie Konta w Serwisie.</h6>
            
            <h6>4. Termin na odstąpienie od Umowy liczony jest od dnia jej zawarcia.</h6>

            <h6>
                5. Wzór oświadczenia o odstąpieniu od Umowy nie jest ściśle określony.
            </h6>

            <h6>
                6. Usługodawca z chwilą otrzymania oświadczenia o odstąpieniu od Umowy przez Użytkownika Zarejestrowanego prześle
                na adres poczty elektronicznej Użytkownika Zarejestrowanego potwierdzenie otrzymania oświadczenia o odstąpieniu od Umowy.
            </h6>

            <h6>7. W przypadku odstąpienia od Umowy zawartej na odległość, Umowa uważana jest za niezawartą.</h6>

            <h6>
                8. Użytkownik Zarejestrowany nie może posiadać więcej niż jednego Konta przypisanego do jednego adresu poczty elektronicznej.
                Użytkownikowi Zarejestrowanemu nie wolno korzystać z Kont innych Użytkowników Zarejestrowanych oraz udostępniać innym osobom
                możliwość korzystania z Konta, w tym ujawniać hasła dostępu do Konta.
            </h6>

            <h6>
                9. Usługodawca może rozwiązać Umowę z Użytkownikiem Zarejestrowanym, z zachowaniem 14- dniowego okresu wypowiedzenia,
                w szczególności w przypadku nieprzestrzegania przez niego Regulaminu. W tym celu Usługodawca przesyła Użytkownikowi
                Zarejestrowanemu wypowiedzenie na podany przez niego w Koncie adres e-mail.
            </h6>

            <h6>10. Użytkownik Zarejestrowany może korzystać z Usług udostępnionych w ramach Serwisu w okresie wypowiedzenia, o którym mowa w powyżej.</h6>
            
            <h6>
                11. W przypadku naruszenia przez Użytkownika Zarejestrowanego postanowień niniejszego Regulaminu, przepisów prawa lub dobrych obyczajów,
                Usługodawca może rozwiązać umowę w trybie natychmiastowym po uprzednim bezskutecznym wezwaniu Użytkownika Zarejestrowanego do zaprzestania naruszeń.
            </h6>

            <h6>
                12. W stosunku do Użytkowników Zarejestrowanych, Usługodawca ma prawo do zawieszenia świadczenia Usług, jak również rozwiązania
                Umowy oraz zawieszenia Konta ze skutkiem natychmiastowym, w szczególności w przypadku:
            </h6>
            <ul>
                <li>powzięcia wątpliwości co do poprawności czy kompletności podanych przez Użytkownika Zarejestrowanego danych,</li>
                <li>powzięcia przez Usługodawcę podejrzenia, że Użytkownik Zarejestrowany narusza Regulamin bądź obowiązujące przepisy prawa,</li>
                <li>
                    powzięcia przez Usługodawcę podejrzenia co do prawdziwości oświadczeń złożonych przez Użytkownika Zarejestrowanego,
                    a do których złożenia jest on zobowiązany na podstawie postanowień Regulaminu,
                </li>
                <li>gdy działania lub zaniechania Użytkownika Zarejestrowanego wpływają negatywnie na dobre imię Usługodawcy lub w inny sposób szkodzą Usługodawcy lub Serwisowi,</li>
                <li>
                    podejmowania przez Użytkownika Zarejestrowanego działań mających na celu nieuczciwego zwiększenie bilansu Konta,
                    w tym poprzez niezgodne z regulaminem i specyfiką Serwisu wykorzystanie okazjonalnych konkursów i promocji lub
                    innych okoliczności bądź funkcjonalności, a w szczególności polegających na zakładaniu kilku Kont lub wykorzystywaniu
                    Kont innych Użytkowników Zarejestrowanych.
                </li>
            </ul>
            
            <h6>
                Użytkownik Zarejestrowany jest zobowiązany do zabezpieczenia Urządzenia przed niepowołanym dostępem osób trzecich.
                Usługodawca nie ponosi odpowiedzialności za skutki (w tym szkody) wynikłe z wejścia w posiadanie przez osoby
                trzecie Urządzenia Użytkownika Zarejestrowanego.
            </h6>
            
            <h4>V. Usługi</h4>

            <h6>1. Świadczenie Usług odbywa się na zasadach określonych w niniejszym Regulaminie.</h6>
            
            <h6>2. Zakres Usług świadczonych za pośrednictwem Serwisu obejmuje:</h6>
            <ul>
                <li>Nieodpłatne przeglądanie i wyszukiwanie informacji w Serwisie;</li>
                <li>Nieodpłatne założenie i prowadzenie Konta;</li>
                <li>Odpłatną Usługę {APP_NAME}.</li>
            </ul>
            
            <h6>3. Usługa wskazana w ppkt d) powyżej świadczona jest przez Użytkowników Zarejestrowanych na rzecz Widzów za pośrednictwem Serwisu z zastrzeżeniem ust. 12-13 poniżej.</h6>

            <h6>
                4. Usługodawca na stronach internetowych Serwisu prezentuje nieodpłatnie na rzecz Użytkowników Zarejestrowanych ogólne informacje zgodne
                z charakterem i specyfiką Serwisu, w tym o prowadzonej przez siebie działalności i funkcjonalnościach Serwisu.
                Dostęp do ww. świadczeń wygasa z chwilą zamknięcia Konta przez Użytkownika Zarejestrowanego.
            </h6>

            <h6>
                5. Korzystanie z niektórych Usług Serwisu może wymagać założenia i posiadania aktywnego Konta w Serwisie. Usługa prowadzenia Konta w
                Serwisie Internetowym dostępna jest wyłącznie po dokonaniu rejestracji.
            </h6>

            <h6>
                6. Rejestracja Konta następuje poprzez wypełnienie i zaakceptowanie formularza rejestracyjnego, udostępnianego w Serwisie.
                Do założenia Konta konieczne jest podanie informacji wskazanych jako obowiązkowe. Użytkownik Zarejestrowany w czasie rejestracji
                oświadcza, że prowadzi działalność gospodarczą lub prowadzi działalność w ramach działalności nieewidencjonowanej, o której mowa
                w ustawie z dnia 6 marca 2018 Prawo przedsiębiorców.
            </h6>

            <h6>
                7. Użytkownik Zarejestrowany zakładając Konto wyraża zgodę na umieszczenie zdjęcia profilowego Konta wraz z jego imieniem i
                nazwiskiem lub pseudonimem na stronie głównej Serwisu lub oficjalnym profilu w aplikacji Instagram. Zgoda, o której mowa w zdaniu
                poprzednim udzielana jest nieodpłatnie.
            </h6>

            <h6>
                8. Po zarejestrowaniu Konta, podane podczas rejestracji dane mogą być w każdym czasie zweryfikowane przez Usługodawcę,
                a pozytywna weryfikacja może być warunkiem uzyskania pełnego dostępu do funkcjonalności Konta lub innych Usług Serwisu,
                zgodnie z informacjami prezentowanymi w Serwisie. Użytkownik Zarejestrowany jest zobowiązany do podania Usługodawcy danych
                oznaczonych w Serwisie lub wskazanych mu przez Usługodawcę jako obowiązkowe, w tym w szczególności danych prowadzonego przez
                niego przedsiębiorstwa, na zasadach wskazanych w niniejszym Regulaminie. Usługodawca może zwrócić się do Użytkownika Zarejestrowanego
                o przesłanie drogą elektroniczną wskazanych przez niego dokumentów, w tym w szczególności potwierdzające dane podane przez niego
                w Serwisie, w tym dotyczące jego statusu czy prowadzonej działalności, pod rygorem odmowy nawiązania współpracy lub wypowiedzenia
                Umowy, a w przypadku prowadzenia przez Użytkownika Zarejestrowanego działalności gospodarczej poza granicami Polski – odpowiedników
                tych dokumentów w języku pochodzenia wraz z przysięgłym tłumaczeniem na język polski. Usługodawca zastrzega sobie prawo zwrócenia
                się do Użytkownika Zarejestrowanego o przesłanie dodatkowych dokumentów niewskazanych powyżej lub do przesłania ich w innym formacie.
            </h6>

            <h6>
                9. Użytkownik Zarejestrowany, aby korzystać z niektórych Usług lub funkcjonalności dostępnych w Koncie dla Użytkowników Zalogowanych,
                może być zobowiązany uzupełnić dodatkowe informacje, zgodnie ze wskazaniami Serwisu.
            </h6>

            <h6>
                10. Prowadzenie Konta w Serwisie Internetowym możliwe jest na czas nieoznaczony i ulega rozwiązaniu z chwilą przesłania przez
                Użytkownika Zarejestrowanego żądania usunięcia Konta.
            </h6>
        </div>
    )
}
export default TermsOfUsePage;