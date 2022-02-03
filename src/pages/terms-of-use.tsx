import React from 'react';
import { APP_NAME, EMAIL, APP_URL, APP_OWNER } from '../constants';

const TermsOfUsePage: React.FC = () => {
    return (
        <div className="container text-white py-3 py-lg-5">
            <h2>Regulamin Serwisu Internetowego {APP_NAME}</h2>
            <p>Niniejszy Regulamin określa warunki korzystania z serwisu {APP_NAME}</p>
            <hr style={{ borderColor: 'white' }} />

            <section>
                <h4>I. DEFINICJE</h4>
                <ul>
                    <li>
                        <p>
                            <b>Czas Realizacji</b> - czas, w którym Zamówienie jest realizowane, czego efektem końcowym jest gotowy do wysyłki Film.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Film</b> - nagranie wideo z udziałem Influencera i uzupełnione o Treści, zrealizowane i wytworzone za pośrednictwem {APP_NAME}
                            przez Użytkownika, stanowiące przedmiot Zamówienia.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>{APP_NAME}</b> - serwis dostępny pod adresem witryny internetowej {APP_URL}, którego właścicielem i administratorem jest Usługodawca.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Influencer</b> - osoba fizyczna, która wykorzystuje swój wizerunek w Filmie w celach komercyjnych oraz prowadzi działalność gospodarczą.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Konsument</b> - osoba fizyczna dokonująca z przedsiębiorcą (tj. z Usługodawcą) czynności prawnej, niezwiązanej
                            bezpośrednio z jej działalnością gospodarczą lub zawodową.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Konto</b> - bezpłatna Usługa świadczona drogą elektroniczną przez Usługodawcę, wydzielona indywidualnie Influencerowi część {APP_NAME}.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Odbiorca</b> - osoba lub osoby wybrane przez Użytkownika, do których kierowany jest Film.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Ochrona danych osobowych i Polityka Prywatności</b>
                            - dokument regulujący bezpieczeństwo ochrony prywatności i przetwarzania danych osobowych Użytkowników. Polityka Prywatności
                            stanowi uzupełnienie niniejszego Regulaminu i dostępna jest na witrynie internetowej {APP_NAME} {APP_URL}.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Regulamin</b> - niniejszy regulamin świadczenia Usług za pośrednictwem {APP_NAME}.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Treści</b> - zindywidualizowane treści, takie jak materiały tekstowe, będące elementami Filmu, dostarczone przez Użytkownika.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Umowa</b> - umowa o świadczenie Usług zawarta pomiędzy Usługodawcą a Usługobiorcą, której ogólne postanowienia określa niniejszy Regulamin.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Usługi</b>
                            - usługi świadczone drogą elektroniczną przez Usługodawcę na podstawie Umowy, polegające na udostępnianiu funkcjonalności
                            {APP_NAME}, w tym funkcjonalności umożliwiających tworzenie Filmu z wybranymi przez Użytkownika Treściami oraz udostępnianie tego Filmu Odbiorcy.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Użytkownik</b>
                            - Użytkownik lub podmiot reprezentowany przez Użytkownika, zawierający z Usługodawcą umowy, na rzecz którego składane jest Zamówienie.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Usługodawca</b> – Właściciel i administrator serwisu {APP_NAME} – {APP_OWNER}
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Użytkownik</b>
                            - osoba fizyczna posiadająca pełną lub ograniczoną zdolność do czynności prawnych, korzystająca z {APP_NAME} na zasadach wskazanych w Regulaminie.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Zamówienie</b>
                            - oświadczenie woli Użytkownika prowadzące bezpośrednio do zawarcia umowy o Film i wskazujące istotne jej warunki,
                            w tym szczegóły dotyczące formy Filmu, Odbiorcy, Treści, a także wybór Influencera.
                        </p>
                    </li>
                </ul>
            </section>
            <section>
                <h4>II.  POSTANOWIENIA WSTĘPNE</h4>
                <ul>
                    <li>
                        <p>
                            Niniejszy Regulamin określa warunki korzystania z {APP_NAME}, warunki wykonywania Usług na rzecz Użytkowników, jak również
                            prawa i obowiązki Użytkowników i Usługodawcy, w tym tryb postępowania reklamacyjnego.
                        </p>
                    </li>
                    <li>
                        <p>
                            Usługodawca udostępnia w ramach {APP_NAME} nieodpłatnie każdemu Użytkownikowi niniejszy Regulamin przed zawarciem Umowy,
                            a także – na jego żądanie – w taki sposób, który umożliwia pozyskanie, odtwarzanie i utrwalanie treści Regulaminu za
                            pomocą systemu teleinformatycznego, którym posługuje się Użytkownik.
                        </p>
                    </li>
                    <li>
                        <p>
                            Użytkownik może korzystać z {APP_NAME} wyłącznie po uprzednim zapoznaniu się z treścią Regulaminu oraz wyrażeniu zgody na
                            określone w nim warunki. Jeżeli Użytkownik nie akceptuje Regulaminu, nie może on korzystać z {APP_NAME}.
                        </p>
                    </li>
                    <li>
                        <p>
                            Usługodawca oświadcza, iż w ramach sprzedaży Filmów, 20% opłaty uiszczonej przez Użytkownika stanowi prowizję serwisu {APP_NAME},
                            a 80% opłaty trafia na konto Infuencera, który zrealizował Zamówienie Użytkownika.
                        </p>
                    </li>
                </ul>
            </section>
            <section>
                <h4>III. OGÓLNE WARUNKI KORZYSTANIA Z USŁUG</h4>
                <ul>
                    <li>
                        <p>
                            W ramach {APP_NAME} świadczone są następujące Usługi: prowadzenie i świadczenie funkcjonalności Konta, tworzenie i udostępnianie
                            Filmów, przechowywanie Filmów, przesyłanie powiadomień dotyczących Odbiorców, przechowywanie Treści.
                        </p>
                    </li>
                    <li>
                        <p>
                            W celu korzystania ze wszystkich funkcjonalności {APP_NAME}, po stronie Użytkownika i Odbiorcy spełnione muszą zostać
                            następujące minimalne wymagania techniczne: (a) urządzenie z dostępem do Internetu umożliwiające prawidłowe wyświetlenie
                            interfejsu {APP_NAME}, (b) aktywne konto poczty elektronicznej (email); (c) zainstalowana i zaktualizowana do najnowszej
                            wersji przeglądarka internetowa Chrome, FireFox, Internet Explorer, Safari lub Opera.
                        </p>
                    </li>
                    <li>
                        <p>
                            Zabrania się korzystania z {APP_NAME} w sposób sprzeczny z postanowieniami niniejszego Regulaminu, obowiązującymi przepisami prawa,
                            dobrymi obyczajami lub zasadami współżycia społecznego. Użytkownika obowiązuje zakaz dostarczania treści o charakterze bezprawnym.
                        </p>
                    </li>
                    <li>
                        <p>
                            Usługodawca nie zamieszcza w {APP_NAME} ofert składanych w formie elektronicznej w rozumieniu przepisów Kodeksu cywilnego.
                            W szczególności nie mają zastosowania przepisy dotyczące złożenia oferty w postaci elektronicznej.
                        </p>
                    </li>
                    <li>
                        <p>
                            {APP_NAME} oraz jego elementy składowe, w tym design i treści, a także wizerunek Influencerów, chronione są prawem autorskim
                            i/lub innymi prawami dotyczącymi własności intelektualnej. Elementy te nie mogą być przez Użytkownika reprodukowane,
                            rozpowszechniane lub publikowane, częściowo lub w całości bez zgody Usługodawcy lub Influencera określonej funkcjonalnościami Usług.
                            W szczególności Umowa nie pozwala Użytkownikowi na reprodukowanie, rozpowszechnianie, wypożyczenie, zbywanie oraz każdy inny
                            sposób redystrybucji pośredniej i bezpośredniej, zarówno odpłatnie, jak i nieodpłatnie, z pominięciem Usługodawcy elementów {APP_NAME}.
                            Naruszenie przez Użytkownika powyższych nakazów upoważnia Usługodawcę do żądania zapłaty kary umownej w kwocie 5.000,00 zł
                            (pięć tysięcy złotych) za każdy przypadek naruszenia. Zapłata kary umownej nie wyklucza możliwości dochodzenia przez Usługodawcę
                            naprawienia szkody na zasadach ogólnych w sytuacji, gdy wysokość szkody przewyższa wartość kary umownej.
                        </p>
                    </li>
                    <li>
                        <p>
                            Usługodawca uprawniony jest do zmiany elementów i funkcjonalności {APP_NAME} lub Usług, przy czym zobowiązuje się on, iż nie będą one
                            stanowiły pogorszenia jakości Usług.
                        </p>
                    </li>
                    <li>
                        <p>
                            Szczegółowe zasady funkcjonowania {APP_NAME} i poszczególnych Usług dostępne są na stronie internetowej pod adresem {APP_URL}.
                        </p>
                    </li>
                </ul>
            </section>
            <section>
                <h4>IV. UŻYTKOWNICY</h4>
                <ul>
                    <li>
                        <p>
                            Z zastrzeżeniem punktów poniżej, Użytkownikami mogą być osoby fizyczne, które ukończyły 18 lat i posiadają pełną zdolność do czynności prawnych.
                        </p>
                    </li>
                    <li>
                        <p>
                            Jeżeli Użytkownik jest między 13 a 18 rokiem życia, może korzystać z Usług w zakresie w jakim może nabywać prawa i zaciągać
                            zobowiązania zgodnie z przepisami obowiązującego Usługobiorcę prawa. Jeżeli przepisy obowiązującego Użytkownika prawa wymagają
                            zgody opiekuna prawnego do korzystania z Usług, najpóźniej do momentu zawarcia Umowy, opiekun prawny musi wyrazić zgodę na jej
                            zawarcie i korzystanie z Usług.
                        </p>
                    </li>
                    <li>
                        <p>
                            Opiekun prawny Użytkownika, który jest między 13 a 18 rokiem życia jest zobowiązany na żądanie Usługodawcy przedstawić zgody
                            na zawarcie Umowy i korzystanie z Usług.
                        </p>
                    </li>
                </ul>
            </section>
            <section>
                <h4>V. KONTO</h4>
                <ul>
                    <li>
                        <p>
                            W celu założenia Konta i zawarcia Umowy, Użytkownik dopełnia procedury rejestracji Konta. Rejestracja inicjowana jest za pomocą
                            formularza rejestracyjnego dostępnego na stronie internetowej {APP_NAME}.  Następnie Influencer postępuje zgodnie z komunikatami {APP_NAME}.
                        </p>
                    </li>
                    <li>
                        <p>
                            Jeżeli Konto nie jest zakładane na rzecz osoby fizycznej, to wysyłając zgłoszenie rejestracyjne Konta, Influencer oświadcza,
                            iż działa na zlecenie Usługobiorcy będącego osobą prawną lub inną jednostką organizacyjną i jest odpowiednio umocowany do
                            działania w imieniu i na rzecz Usługobiorcy.
                        </p>
                    </li>
                    <li>
                        <p>
                            Z chwilą potwierdzenia przez Usługodawcę dokonania rejestracji Konta, pomiędzy Usługobiorcą a Usługodawcą zostaje zawarta Umowa
                            na czas nieokreślony, pod warunkiem odpowiedniego uprawnienia i/lub umocowania Użytkownika. Jeżeli Influencer nie jest uprawniony
                            lub nie jest umocowany w odpowiednim zakresie, zawarcie Umowy jest nieskuteczne.
                        </p>
                    </li>
                    <li>
                        <p>
                            Po utworzeniu Konta, na rzecz Influencera będą świadczone m.in. następujące nieodpłatne Usługi: przesyłanie powiadomień dotyczących
                            Odbiorców, dostęp do Zamówień, a także przechowywanie informacji dotyczących Odbiorców.
                        </p>
                    </li>
                    <li>
                        <p>
                            Konto zawiera dane Użytkownika podane przez niego podczas rejestracji. Influencer zobowiązany jest do zachowania aktualności i
                            prawdziwości tych danych przez cały czas trwania Umowy. W przypadku późniejszej ich zmiany, Influencer powinien niezwłocznie
                            zaktualizować je, korzystając z odpowiedniego formularza edycji Konta.
                        </p>
                    </li>
                    <li>
                        <p>
                            Influencer nie może dokonać cesji praw i obowiązków wynikających z Umowy bez zgody Usługodawcy wysyłanej w formie elektronicznej.
                        </p>
                    </li>
                    <li>
                        <p>
                            Influencer nie może korzystać z Kont innych Influencerów oraz udostępniać swojego Konta innym osobom.
                        </p>
                    </li>
                    <li>
                        <p>
                            Konto może zostać usunięte przez Influencera w każdym czasie, poprzez złożenie takiego oświadczenia woli Usługodawcy
                            (za pośrednictwem poczty elektronicznej z zastrzeżeniem, że wówczas musi być to adres email, którym Użytkownik posługiwał
                            się w momencie rejestracji Konta) na adres email:  {EMAIL}. Zgłoszenie Konta do usunięcia jest jednoznaczne
                            z wypowiedzeniem Umowy.
                        </p>
                    </li>
                    <li>
                        <p>
                            Wypowiedzenie Umowy jest skuteczne z chwilą otrzymania takiego oświadczenia przez Usługodawcę. Usługodawca usuwa Konto w ciągu 7 dni roboczych.
                        </p>
                    </li>
                </ul>
            </section>
            <section>
                <h4>VI. ZAMÓWIENIE</h4>
                <ul>
                    <li>
                        <p>
                            Składać Zamówienia mogą Użytkownicy, którzy wypełnią formularz Zamówienia. Celem Zamówienia jest zawarcie umowy o Film, tj. umowy
                            o świadczenie Usługi w postaci stworzenie oraz wysyłki Filmu do Użytkownika.
                        </p>
                    </li>
                    <li>
                        <p>
                            Użytkownik sporządza Zamówienie poprzez samodzielny dobór elementów Usługi, w szczególności poprzez wybór Influencera.
                            Po potwierdzeniu wyboru, Użytkownik podaje Treści w postaci swojego imienia, adresu email, na który otrzyma emaila z
                            Zamówieniem oraz instrukcje do filmu. Po skompletowaniu Zamówienia, Użytkownik zatwierdza je oraz przesyła do Influencera
                            poprzez uaktywnienie przycisku „Zamów i zapłać”, a następnie dokonuje płatności w kwocie odpowiadającej wysokości wynagrodzenia
                            z tytułu umowy o Film.
                        </p>
                    </li>
                    <li>
                        <p>
                            W procesie składania Zamówienia, do chwili dokonania płatności istnieje możliwość wykrywania i korygowania błędów przez Użytkownika
                            w Zamówieniu i jego modyfikacji, poprzez system {APP_NAME}. Po tym momencie, Użytkownik nie może zmienić szczegółów dotyczących Zamówienia.
                        </p>
                    </li>
                    <li>
                        <p>
                            Składając Zamówienie, Użytkownik składa Usługodawcy ofertę zawarcia umowy o Film, na warunkach wskazanych przez niego w Zamówieniu.
                            Użytkownik może też złożyć taką ofertę w imieniu i na rzecz Usługobiorcy. Składając zamówienie, Użytkownik wyraża zgodę na rozpoczęcie
                            świadczenia usługi stworzenia oraz wysyłki Filmu do Użytkownika przed upływem terminu do odstąpienia od umowy o Film, jak również
                            oświadcza, że został poinformowany o utracie prawa do odstąpienia od umowy o Film, stosownie do treści art. 38 pkt 13 Ustawy z dnia
                            30 maja 2014 r. o prawach konsumenta. Zawarcie umowy o Film następuje poprzez przyjęcie tej oferty przez reprezentującego Usługodawcę
                            Influencera, w momencie otrzymania przez Użytkownika potwierdzenia w {APP_NAME} warunków Zamówienia.
                        </p>
                    </li>
                    <li>
                        <p>
                            Czas realizacji Zamówienia wynosi maksymalnie 7 (siedem) dni. Czas realizacji rozpoczyna się w chwili przyjęcia oferty.
                            W sytuacji braku realizacji Zamówienia w zakreślonym terminie, uiszczona kwota wynagrodzenia  z tytułu umowy o Film zostanie
                            niezwłocznie (nie później niż w terminie 14 dni roboczego) zwrócona na konto bankowe Użytkownika, z którego nastąpiła płatność.
                        </p>
                    </li>
                </ul>
            </section>
            <section>
                <h4>VII. FILM</h4>
                <ul>
                    <li>
                        <p>
                            Po zrealizowaniu Zamówienia, Użytkownik otrzymuje link do Filmu na wcześniej podany adres email do odpowiedniego panelu Konta {APP_NAME}.
                        </p>
                    </li>
                    <li>
                        <p>
                            Odbiorca oraz Użytkownik mogą korzystać z Filmu wyłączenie w ramach dozwolonego użytku prywatnego. Każda próba zmiany sposobu
                            udostępniania lub innego wykorzystania Filmu lub wizerunku Influencera, w szczególności lecz nie wyłącznie dla celów komercyjnych,
                            promocyjnych oraz marketingowych stanowić będzie naruszenie Regulaminu.
                        </p>
                    </li>
                    <li>
                        <p>
                            Aktualne informacje dotyczące wystąpienia szczególnych zagrożeń związanych z korzystaniem Usług, funkcjonalności treści cyfrowych
                            oraz środkach ochrony dostępne są w {APP_NAME}.
                        </p>
                    </li>
                    <li>
                        <p>
                            Wyświetlenie Filmu wymaga posiadania dostępu do sieci Internet. Opłaty za Usługę nie obejmują kosztów danych w sieci Internet
                            związanych z korzystaniem z Usługi, które Użytkownik/Odbiorca ponosi zgodnie z taryfą operatora, z którego korzysta.
                        </p>
                    </li>
                </ul>
            </section>
            <section>
                <h4>VIII. CENY I PŁATNOŚCI</h4>
                <ul>
                    <li>
                        <p>
                            Korzystanie z Usług świadczonych przez Usługodawcę w ramach {APP_NAME} jest odpłatne na warunkach i w wysokości, w jakiej określa to cennik.
                        </p>
                    </li>
                    <li>
                        <p>
                            Łączna cena Zamówienia obliczana jest według wyborów dokonanych przez Użytkownika w formularzu Zamówienia, zgodnie ze
                            stawkami tam wskazanymi. Cena wiążąca wskazywana jest Użytkownikowi w podsumowaniu Zamówienia.
                        </p>
                    </li>
                    <li>
                        <p>
                            Użytkownik dokonuje płatności z pośrednictwem zewnętrznego systemu płatności elektronicznej.
                        </p>
                    </li>
                    <li>
                        <p>
                            Ceny ustalane są indywidualnie przez Influencerów przy dodawaniu danej oferty do swojego Konta. Influencer ma możliwość zmiany
                            ceny oferty oraz dodawania bądź usuwania przedmiotów danej oferty w każdym czasie.
                        </p>
                    </li>
                    <li>
                        <p>
                            Użytkownik, który złożył Zamówienie i podczas realizacji Influencer, z którym została zawarta umowa o Film zmienił warunki
                            owej oferty powinien otrzymać Zamówienie na pierwotnych warunkach umowy.
                        </p>
                    </li>
                </ul>
            </section>
            <section>
                <h4>IX. ODSTĄPIENIE</h4>
                <ul>
                    <li>
                        <p>
                            Konsument ma prawo odstąpić od umowy o Film bez podania przyczyny, składając Usługodawcy oświadczenie o odstąpieniu od umowy
                            o Film poprzez złożenie takiego oświadczenia woli Usługodawcy (za pośrednictwem poczty elektronicznej z zastrzeżeniem,
                            że wówczas musi być to adres email, którym Użytkownik posługiwał się w momencie rejestracji Konta) na adres email: {EMAIL}.
                            Termin na odstąpienie od umowy o Film wynosi 14 dni od dnia zawarcia umowy. Do zachowania terminu, o którym stanowi w zdaniu uprzednim,
                            wystarczy wysłanie do Usługodawcy przed jego upływem oświadczenia o odstąpieniu w formie, o której mowa w zdaniu pierwszym niniejszego punktu.
                        </p>
                    </li>
                    <li>
                        <p>
                            Prawo odstąpienia nie przysługuje w przypadku określonym w art. 38 pkt 13 Ustawy z dnia 30 maja 2014 r. o prawach
                            konsumenta, tj. w przypadku umowy o dostarczanie treści cyfrowych, które nie są zapisane na nośniku materialnym, jeżeli spełnianie
                            świadczenia rozpoczęło się za wyraźną zgodą konsumenta przed upływem terminu do odstąpienia od umowy i po poinformowaniu go
                            przez Usługodawcę o utracie prawa odstąpienia od umowy (stosownie do treści art. VI ust. 4 Regulaminu).
                        </p>
                    </li>
                </ul>
            </section>
            <section>
                <h4>X. ODPOWIEDZIALNOŚĆ</h4>
                <ul>
                    <li>
                        <p>
                            Usługodawca udostępnia infrastrukturę teleinformatyczną oraz zapewnia jej sprawne funkcjonowanie techniczne i w tym zakresie
                            jest odpowiedzialny za {APP_NAME} oraz Usługi.
                        </p>
                    </li>
                    <li>
                        <p>
                            Usługodawca nie ponosi odpowiedzialności za jakiekolwiek szkody wynikające z:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    zawinionego naruszenia przez Użytkownika postanowień niniejszego Regulaminu, w szczególności przez podanie nieprawdziwych
                                    danych podczas zakładania Zamówienia bez odpowiedniego umocowania;
                                </p>
                            </li>
                            <li>
                                <p>
                                    zawinionego naruszenia przez Influencera postanowień niniejszego Regulaminu, w szczególności przez podanie nieprawdziwych
                                    danych podczas zakładania Konta oraz realizowania Zamówienia;
                                </p>
                            </li>
                            <li>
                                <p>
                                    niestosowania się przez Użytkownika do wymogów świadczenia Usług;
                                </p>
                            </li>
                            <li>
                                <p>
                                    niestosowania się przez Influelncera do wymogów świadczenia Usług;
                                </p>
                            </li>
                            <li>
                                <p>
                                    udostępnienia przez Influencera loginu lub hasła do jego Konta osobom trzecim;
                                </p>
                            </li>
                            <li>
                                <p>
                                    działania złośliwego/szkodliwego oprogramowania (malware) bezprawnie wprowadzonego do {APP_NAME} przez Influencera lub osoby trzecie;
                                </p>
                            </li>
                            <li>
                                <p>
                                    usunięcia Konta przez Influencera;
                                </p>
                            </li>
                            <li>
                                <p>
                                    rozwiązania Umowy lub umowy o Film przez Usługodawcę w wyniku zawinionego działania lub zaniechania Użytkownika;
                                </p>
                            </li>
                            <li>
                                <p>
                                    krótkotrwałego uniemożliwienia lub utrudnienia w dostępie do {APP_NAME}, spowodowanego koniecznością przeprowadzenia
                                    prac naprawczych, konserwatorskich czy modernizacyjnych w {APP_NAME} lub w jej elementach;
                                </p>
                            </li>
                            <li>
                                <p>
                                    wad, w szczególności prawnych, Treści;
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section>
                <h4>XI. POZIOM TECHNICZNEJ SPRAWNOŚCI {APP_NAME}</h4>
                <ul>
                    <li>
                        <p>
                            Usługodawca podejmuje wszelkie starania, aby zapewnić prawidłowe funkcjonowanie {APP_NAME}.
                        </p>
                    </li>
                    <li>
                        <p>
                            Usługodawca zobowiązuje się do zapewnienia ciągłości działania Usług czasu w roku kalendarzowym w najszerszym możliwym zakresie,
                            co nie obejmuje jednak wydarzeń i ich skutków, związanych z działaniem siły wyższej lub operatora serwerów.
                        </p>
                    </li>
                    <li>
                        <p>
                            W celu zapewnienia lepszej jakości Usług i satysfakcjonującego działania {APP_NAME}, Usługodawca okazjonalnie przeprowadza czynności
                            konserwacyjne lub modernizacyjne {APP_NAME}. Dlatego Usługodawca zastrzega sobie prawo do przerw w realizacji Usług koniecznych dla
                            przeprowadzenia prac technicznych, nie dłuższych jednorazowo niż 12 godzin. O każdej takiej przerwie Usługodawca poinformuje
                            Użytkowników z co najmniej 24-godzinnym wyprzedzeniem.
                        </p>
                    </li>
                </ul>
            </section>
            <section>
                <h4>XII. NARUSZENIE REGULAMINU</h4>
                <ul>
                    <li>
                        <p>
                            Niezależnie od innych środków prawnych przewidzianych w niniejszym Regulaminie, naruszenie postanowień Regulaminu przez
                            Użytkownika/Influencera, w szczególności poprzez działanie przez niego na szkodę Usługodawcy, może pociągnąć za sobą, według
                            uznania Usługodawcy, następujące skutki: (a) ostrzeżenie skierowane do Użytkownika/Influencera przez Usługodawcę, (b) blokada
                            dostępu do Konta, (c) usunięcie dostępu do Filmu z {APP_NAME} przed upływem 30 dni, (d) usunięcie Konta, (f) uniemożliwienie
                            Użytkownikowi/Influencerowi dokonania powtórnego założenia Konta.
                        </p>
                    </li>
                    <li>
                        <p>
                            Usługodawca o usunięciu Konta lub wypowiedzeniu Umowy powiadomi Użytkownika/Influencera w mailu wysłanym na jego adres email
                            podany podczas zawierania Umowy na Film, podając podstawę takiego wypowiedzenia umowy.
                        </p>
                    </li>
                </ul>
            </section>
            <section>
                <h4>XIII. ZGŁOSZENIA NARUSZEŃ I REKLAMACJE</h4>
                <ul>
                    <li>
                        <p>
                            Użytkownik oraz Influencer mają prawo do złożenia reklamacji na funkcjonowanie {APP_NAME} oraz świadczonych za jego pośrednictwem Usług.
                            Zgłoszenie reklamacyjne powinno zawierać co najmniej dane umożliwiające identyfikację Użytkownika/Influencera oraz wskazanie
                            uzasadnionych zastrzeżeń i uwag do {APP_NAME} czy Usług. Reklamację należy wysłać na adres email {EMAIL}.
                        </p>
                    </li>
                    <li>
                        <p>
                            Usługodawca ustosunkuje się do reklamacji w terminie 14 (czternastu) dni roboczych od dnia jej otrzymania, jeżeli reklamacja
                            została prawidłowo złożona. Użytkownik otrzyma odpowiedź na adres, z którego została wysłana reklamacja albo na adres, który
                            podał on w zgłoszeniu reklamacyjnym.
                        </p>
                    </li>
                </ul>
            </section>
            <section>
                <h4>XIV. POSTANOWIENIA SZCZEGÓLNE</h4>
                <ul>
                    <li>
                        <p>
                            Jeżeli Użytkownik nie jest Konsumentem stosują się do niego szczególne, następujące postanowienia:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    Usługodawca ponosi odpowiedzialność wyłącznie za szkody wyrządzone Użytkownikowi/Influencerowi z winy umyślnej, nie ponosi
                                    odpowiedzialności za utracone korzyści, a nadto odpowiedzialność Usługodawcy ograniczona jest zawsze do 1000 PLN;
                                </p>
                            </li>
                            <li>
                                <p>
                                    jeżeli któreś z postanowień Regulaminu są sprzeczne ze sobą lub nieścisłe, Usługodawca ma uprawnienie do wiążącej
                                    Użytkownika/Influencera interpretacji Regulaminu, zaś jeżeli którekolwiek z postanowień niniejszego Regulaminu okaże
                                    się nieważne w całości lub w części, pozostałe postanowienia pozostają w mocy, zaś w miejsce nieważnych postanowień
                                    postanowieniami pozostała część Regulaminu będzie tak interpretowana, aby ich moc prawna i skutek ekonomiczny były jak
                                    najbardziej zbliżone do postanowień nieważnych w sposób wskazany przez Usługodawcę;
                                </p>
                            </li>
                            <li>
                                <p>
                                    cena za Usługę jest w każdym przypadku bezzwrotna.
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section>
                <h4>XV. ZMIANA REGULAMINU</h4>
                <ul>
                    <li>
                        <p>
                            Usługodawca może zmienić niniejszy Regulamin z ważnych powodów prawnych (zmiana powszechnie obowiązujących przepisów prawa
                            dotyczących działalności Usługodawcy lub formy działalności Usługodawcy) lub technicznych (modernizacja infrastruktury {APP_NAME}).
                            Przyczyna zmiany Regulaminu każdorazowo jest wskazywana w sposób wskazany poniżej.
                        </p>
                    </li>
                    <li>
                        <p>
                            Influencerzy i Użytkownicy zostaną poinformowani o zmianie Regulaminu w wiadomości e-mail, wysłanej na 7 (siedem) dni przed
                            wejściem w życie Regulaminu w nowym brzmieniu. W tym czasie, Użytkownik/Influencer, ponownie musi zaakceptować Regulamin.
                        </p>
                    </li>
                    <li>
                        <p>
                            Zamówienia złożone przed wejściem w życie zmian Regulaminu realizowane są zgodnie z dotychczasową treścią Regulaminu.
                            Zmiany Regulaminu nie mogą naruszać praw nabytych Użytkowników oraz Influencerów.
                        </p>
                    </li>
                </ul>
            </section>
            <section>
                <h4>XVI. POSTANOWIENIA KOŃCOWE</h4>
                <ul>
                    <li>
                        <p>
                            Niniejszy Regulamin został sporządzony w języku polskim.
                        </p>
                    </li>
                    <li>
                        <p>
                            Żadne z postanowień niniejszego Regulaminu nie może być interpretowane w sposób, który ograniczałby prawa przysługujące
                            Konsumentom stosownie do obowiązujących przepisów prawa.
                        </p>
                    </li>
                    <li>
                        <p>
                            Jeżeli Usługodawca nie wykona prawa lub uprawnienia, gdy jest w stanie to zrobić, nie uniemożliwi to skorzystania z tego prawa
                            lub uprawnienia w przyszłości. W przypadku skorzystania z prawa lub uprawnienia, Usługodawca może to zrobić ponownie w ten sam
                            lub w odmienny sposób.
                        </p>
                    </li>
                    <li>
                        <p>
                            Prawa Usługodawcy, Użytkownika, Influencera oraz środki prawne wynikające z Umowy stanowią uzupełnienie, a nie zrzeczenie
                            się wszelkich innych praw i roszczeń.
                        </p>
                    </li>
                    <li>
                        <p>
                            Jeżeli którekolwiek z postanowień zawartych w Umowie okaże się nieważne, naruszające porządek publiczny lub niemożliwe do
                            wyegzekwowania przez sąd właściwej jurysdykcji i zostanie to prawomocnie stwierdzone po wyczerpaniu wszelkich dostępnych
                            środków odwoławczych, wówczas postanowienie to zostanie zmodyfikowane w zakresie niezbędnym, aby stało się ważne i wykonalne.
                            Jeżeli takie postanowienie nie może zostać w powyższy sposób zmodyfikowane, uznaje się je za wykreślone z Umowy sprzedaży w całości,
                            a pozostała część Umowy pozostaje w mocy.
                        </p>
                    </li>
                    <li>
                        <p>
                            W celu dostosowania treści i usług do indywidualnych potrzeb i zainteresowań Użytkowników, {APP_NAME} wykorzystuje pliki cookie
                            (ciasteczka), tj. informacje zapisywane przez serwer na komputerze Użytkownika/Influencera, które ten serwer może odczytywać
                            przy każdorazowym połączeniu się z tego komputera. Informujemy, że Użytkownicy/Influencerzy mogą w każdej chwili wyłączyć w
                            swojej przeglądarce opcję obsługi plików cookie, co może jednak spowodować utrudnienia w korzystaniu z usług {APP_NAME} i możliwości
                            składania oraz realizowania Zamówień.
                        </p>
                    </li>
                    <li>
                        <p>
                            W jakiejkolwiek sprawie, w szczególności dotyczącej {APP_NAME} albo naszej działalności, możesz się z nami kontaktować korespondencyjnie
                            za pośrednictwem poczty elektronicznej wysyłając wiadomości na adres: {EMAIL}.
                        </p>
                    </li>
                    <li>
                        <p>
                            Ochrona danych osobowych, stanowiąca uzupełnienie Regulaminu, znajduje się na witrynie internetowej {APP_NAME} {APP_URL}.
                        </p>
                    </li>
                    <li>
                        <p>
                            W sprawach nieuregulowanych przez niniejszy Regulamin zastosowanie mają przepisy prawa polskiego, w szczególności ustawy z dnia
                            23 kwietnia 1964 r. – Kodeks cywilny (Dz. U. 1964 Nr 16 poz. 93 ze zm.) oraz ustawy z dnia 30 maja 2014 r o prawach konsumenta
                            (Dz. U. 2017 poz. 683).
                        </p>
                    </li>
                    <li>
                        <p>
                            Wszelkie wątpliwości wynikające z interpretacji Regulaminu należy interpretować w sposób zapewniający zgodność niniejszego
                            Regulaminu z bezwzględnie obowiązującymi przepisami prawa.
                        </p>
                    </li>
                </ul>
            </section>
        </div>
    );
}
export default TermsOfUsePage;