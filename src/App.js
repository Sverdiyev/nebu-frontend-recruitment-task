import { useEffect } from 'react';
import Card from './UI/Card/Card.js';
import Email from './components/Inputs/Email.js';
import Password from './components/Inputs/Password.js';
import login from './login.png';
import spiral from './spiral/spiral.png';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.js';
import Button from './components/Button/Button.js';
import Heading from './components/Heading/Heading.js';
import Line from './components/Line/Line.js';

const buttonTypes = {
	signIn: 'signIn',
	signUp: 'signUp',
	switchToSignUp: 'switchToSignUp',
	switchToSignIn: 'switchToSignIn',
};
function App() {
	/**
	 * open console to see how backend is structured
	 */
	useEffect(() => {
		fetch('/users')
			.then((res) => res.json())
			.then(console.log);
	}, []);

	return (
		<div className='App'>
			<div style={{ display: 'flex', alignItems: 'flex-start' }}>
				<Card>
					<Heading></Heading> <Email />
					<Password />
					<ForgotPassword />
					<Button type={buttonTypes.signIn} />
					<Line />
					<Button type={buttonTypes.switchToSignUp} />
				</Card>
				<img src={login} alt='login' />
			</div>
			<div className='content'>
				<h1>Zadanie 1</h1>
				<p>
					Zadanie polega na wykonaniu mini aplikacji z formularzem do
					logowania/rejestracji i sciezkami do wyświetlenia uzytkownikow,
					szczegółami konkretnego uzytkownika i ekranem wyswietlenia followanych
					uzytkownikow.
				</p>
				<p>
					Aplikacja powinna uzywać bibliotek Redux/Redux Toolkit i React Router
				</p>
				<h4>Część pierwsza</h4>
				<p>Wykonaj formularz do logowania ze zdjęcia</p>
				<img src={login} alt='login' />
				<p>wytyczne:</p>
				<ul>
					<li> formularz powinien wyglądać jak na zdjęciu</li>
					<li>
						{' '}
						proszę nie korzystać z frameworkow do stylowania, ani nie uzywać
						klasy "content" na zadnym z elementów
					</li>
					<li>
						{' '}
						zamiast przycisku "Sign in with Apple" proszę umiescić "Switch to
						Sign up" / "Switch to Sign in" który podmieni formularze
					</li>
					<li>Formularz Sign up ma mieć dodatkowo pole "Username"</li>
					<li>Email i hasło powinny mieć ustawiona walidacje</li>
					<li>
						Wykonaj tylko funkcjonalność logowania. Żeby wylistować uzytkowników
						wyslij zapytanie na "/users", zeby zobaczyc usera o id 1 na
						"/users/1". Jesli wysyłasz request z zewn. aplikacji (np. z konsoli
						przegladarki) uzyj pełnego adresu: "http://localhost:3001/users"
					</li>
					<li>
						Logowanie ma polegać na znalezieniu uzytkownika po emailu i hasle
						oraz zwroceniu znalezionego uzytkownika/null
					</li>
				</ul>
				<h4>Część druga</h4>
				<p>Stwórz aplikacje</p>
				<p>wytyczne:</p>
				<ul>
					<li>
						składa sie z 4 ekranow: logowania/rejestracji (z wykonanym wczesniej
						formularzem), listy uzytkownikow(tylko username), konkretnego
						uzytkownika (username, email) i listy followanych (username, email)
						uzytkownikow
					</li>
					<li>
						api mozna podejrzec w pliku db.json, albo po uruchomieniu aplikacji
						(npm start), pod <code>GET /users</code>
					</li>
					<li>ekrany poza formularzem do logowania nie maja zadnych styli</li>
					<li>
						powinna miec w globalnym stanie (redux) uzytkowników i zalogowanego
						uzytkownika
					</li>
					<li>
						ekran loginu jest dostępny dla wszystkich, ekrany listy i szczegolów
						uzytkowników tylko dla zalogowanych uzytkownikow, ekran followanych
						uzytkownikow tylko dla zalogowanego uzytkownika (jako zalogowany
						moge zobaczyc tylko kogo followuje ja, nie mam dostepu do tej listy
						u innych uzytkownikow)
					</li>
					<li>
						nawigacja powinna sie skladac z linkow do: "users", "me", "followed"
						i "logout"
					</li>
					<li>
						niezalogowany uzytkownik, nie widzi nawigacji i ma dostep jedynie do
						ekranu z loginem/rejestracja
					</li>
					<li>
						Na ekranie listy uzytkownikow widnieja linki do ekranow szegolowych
						dla kazdego uzytkownika
					</li>
					<li>
						Z zakladki "me" która wyświetla ekran szczegołów zalogowanego
						uzytkownika mozna przez link przejsc do ekranu z followanymi
						uzytkownikami
					</li>
				</ul>
				<h1>Zadanie 2</h1>
				<p>
					{' '}
					W pliku "/src/spiral.js" dokończ klasę, która w konstruktorze
					otrzymuje dwuwymiarową tablice <code>n x n</code> np:
				</p>
				<pre>
					<code>
						{`array = 
            [[1,2,3],
             [8,9,4],
             [7,6,5]]`}
					</code>
				</pre>
				<p>
					i definiuje metodę "run", która zwraca jednowymiarową tablicę
					posortowanych liczb zgodnie z ruchem po spirali:
				</p>
				<pre>
					<code>array=[1,2,3,4,5,6,7,8,9]</code>
				</pre>
				<p>obrazek dla wyjaśnienia:</p>
				<img src={spiral} alt='spiral' />
				<h1>Powodzenia</h1>
			</div>
		</div>
	);
}

export default App;
