## Ronaldo Clicker
Ronaldo Clicker er et klikkbasert spill der du samler poeng ved å klikke på Ronaldo-bildet. 
Kjøp verktøy og oppgraderinger for å øke poengsummen din!

Det er laget i Flask (Python), med MariaDB som database. 
Spillet viser mine ferdigheter innen programmering, drift og brukerstøtte.

## Hvordan spille?
Klikk på Ronaldo-bildet → få poeng.
Bruk poengene dine til å kjøpe verktøy i shoppen.
Følg scoren din og prøv å nå målet: 2000 poeng!

## Teknologi jeg har brukt
Backend : Python + Flask
Database : MariaDB
Frontend : HTML, CSS, JavaScript
Sikkerhet : Passord hashet med bcrypt
Versjonskontroll : Git og GitHub

## Installasjon
Krav:
Python 3.x
MariaDB
Flask

## Trinn-for-trinn:
1. Klon repoet
```python
git clone https://github.com/ditt-brukernavn/ronaldo-clicker.git
cd ronaldo-clicker
```

## 2. Installer denne:
```python
pip install -r requirements.txt
```


## 3. Konfigurer databasen
Åpne config.py og endre disse linjene:
```python
DB_HOST = 'localhost'
DB_USER = 'din_brukernavn'  # Bytt ut med ditt brukernavn
DB_PASSWORD = 'din_passord'  # Bytt ut med ditt passord
DB_NAME = 'ronaldo_clicker'
```

## 4. Opprett database og tabeller:
```python
CREATE DATABASE ronaldo_clicker;

USE ronaldo_clicker;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE scores (
    user_id INT,
    score INT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## 5. Åpne spillet i nettleseren
Gå til:
👉 http://localhost:5000


## 📋 Dokumentasjon
## 🎯 Mål med prosjektet
Jeg ville lage et enkelt og morsomt klikkespill i Flask med følgende funksjoner:

Bruker kan logge inn og få sin egen score.
Lagring av data i MariaDB-database.
En "shop" hvor man kan kjøpe automatiske klikk.
Sikker lagring av passord med hashing.

Lage dokumentasjon og laste opp til GitHub.

## 🗓️ Planlegging
## Uke 1–2
Starte med enkle klikkfunksjoner.
Lage knapp som gir poeng.
Vise score på nettsiden.

## Uke 3–4
Legge til registrering og pålogging.
Sette opp MariaDB og lagre data.
Hashe passord med bcrypt.

## Uke 5–6
Lage en shop med oppgraderinger.
Automatisk poeng-inntekt.
Gjøre designet mer brukervennlig.

## Uke 7–8
Teste spillet med ekte bruker.
Lage denne README-en og legge til GitHub.

## 🧪 Brukertesting – Robin
Robin testet spillet og sa dette:

Han syntes det var gøy å klikke på Ronaldo 😄
Lett å forstå hva man skal gjøre.
Likte at scoren lagres når man logger inn.
Foreslo flere oppgraderinger og flerbruker i fremtiden.
