// import { useEffect } from 'react';

import login from './login.png';
import SignIn from './pages/SignIn.js';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
	/**
	 * open console to see how backend is structured
	 */
	// useEffect(() => {
	// 	fetch('/users')
	// 		.then((res) => res.json())
	// 		.then(console.log);
	// }, []);

	return (
		<>
			<Routes>
				<Route path='login' element={<SignIn type='signIn' />} />
				<Route path='signup' element={<SignIn type='signUp' />} />
				<Route path='/' element={<Navigate to='/login' />} />
				<Route path='*' element={<div>ERROR 404 - not found </div>} />
			</Routes>
			<img src={login} alt='login' />
		</>
	);
}

export default App;

// 	<h1>Zadanie 1</h1>

// 		Zadanie polega na wykonaniu mini aplikacji z formularzem do
// 		logowania/rejestracji i sciezkami do wyświetlenia uzytkownikow,
// 		szczegółami konkretnego uzytkownika i ekranem wyswietlenia followanych
// 		uzytkownikow.

// 		Aplikacja powinna uzywać bibliotek Redux/Redux Toolkit i React Router

// 	<h4>Część pierwsza</h4>

// 			zamiast przycisku "Sign in with Apple" proszę umiescić "Switch to
// 			Sign up" / "Switch to Sign in" który podmieni formularze

// Formularz Sign up ma mieć dodatkowo pole "Username"
//Email i hasło powinny mieć ustawiona walidacje

// 			Wykonaj tylko funkcjonalność logowania. Żeby wylistować uzytkowników
// 			wyslij zapytanie na "/users", zeby zobaczyc usera o id 1 na
// 			"/users/1". Jesli wysyłasz request z zewn. aplikacji (np. z konsoli
// 			przegladarki) uzyj pełnego adresu: "http://localhost:3001/users"

// 			Logowanie ma polegać na znalezieniu uzytkownika po emailu i hasle
// 			oraz zwroceniu znalezionego uzytkownika/null

// 	<h4>Część druga</h4>

// 			składa sie z 4 ekranow: logowania/rejestracji (z wykonanym wczesniej
// 			formularzem), listy uzytkownikow(tylko username), konkretnego
// 			uzytkownika (username, email) i listy followanych (username, email)
// 			uzytkownikow

// 			api mozna podejrzec w pliku db.json, albo po uruchomieniu aplikacji
// 			(npm start), pod <code>GET /users</code>

// 		ekrany poza formularzem do logowania nie maja zadnych styli

// 			powinna miec w globalnym stanie (redux) uzytkowników i zalogowanego
// 			uzytkownika

// 			ekran loginu jest dostępny dla wszystkich, ekrany listy i szczegolów
// 			uzytkowników tylko dla zalogowanych uzytkownikow, ekran followanych
// 			uzytkownikow tylko dla zalogowanego uzytkownika (jako zalogowany
// 			moge zobaczyc tylko kogo followuje ja, nie mam dostepu do tej listy
// 			u innych uzytkownikow)

// 			nawigacja powinna sie skladac z linkow do: "users", "me", "followed"
// 			i "logout"

// 			niezalogowany uzytkownik, nie widzi nawigacji i ma dostep jedynie do
// 			ekranu z loginem/rejestracja

// 			Na ekranie listy uzytkownikow widnieja linki do ekranow szegolowych
// 			dla kazdego uzytkownika

// 			Z zakladki "me" która wyświetla ekran szczegołów zalogowanego
// 			uzytkownika mozna przez link przejsc do ekranu z followanymi
// 			uzytkownikami
