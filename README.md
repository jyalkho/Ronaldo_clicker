## Ronaldo Clicker 👆

Ronaldo Clicker er et klikkbasert spill der du samler poeng ved å klikke på Ronaldo-bildet. Kjøp verktøy og oppgraderinger for å øke poengsummen din!


## Beskrivelse
Ronaldo Clicker er et enkelt spill der du klikker på Ronaldo-bildet for å samle poeng. Du kan også kjøpe oppgraderinger i shoppen for å øke poengsummen automatisk.

## Hvordan spille 🎮
Klikk på Ronaldo-bildet for å samle poeng.
Bruk poengene til å kjøpe verktøy i shoppen.
Følg med på scoren din og prøv å få så høy score som mulig.
Goal : 2000


## Installasjon
Krav:
Python,
MariaDB,
Flask


### Trinn
## 1. **Klon repoet**:
   ```bash
   git clone https://github.com/ditt-brukernavn/ronaldo-clicker.git
   cd ronaldo-clicker
 ```

## 2. Installer denne :
   ```bash
   pip install -r requirements.txt
 ```

## 3. Konfigurer databasen :
Opprett en MariaDB-database og endre innstillinger i config.py-filen:
```python
DB_HOST = 'localhost'
DB_USER = 'din_brukernavn'  # Bytt ut med ditt brukernavn
DB_PASSWORD = 'din_passord'  # Bytt ut med ditt passord
DB_NAME = 'ronaldo_clicker
```

## 4. Start serveren :
Start Flask med kommando:
```python
python app.py
```

## 5. Åpne nettsiden din :
Gå til http://localhost:5000 i nettsiden din for å spille spillet.













..............................................................................



##Dokumentasjon : 

##🎮 Ronaldo Clicker – Årsoppgave (Robin)
Ronaldo Clicker er et klikkespill der man samler poeng ved å klikke på et bilde av Ronaldo. Etter hvert kan man bruke poengene til å kjøpe oppgraderinger som gir flere poeng automatisk.

##🎯 Mål
Lage et enkelt og morsomt klikkespill i Flask.

1. Bruker skal kunne logge inn og få sin egen score.

2. database MariaDB for å lagre brukere og poeng.

3. Legge til en shop der man kan kjøpe automatiske klikk.

4. Sørge for sikker lagring av passord (hashing).

5. Lage README og dokumentasjon for prosjektet.

6. Gjøre prosjektet tilgjengelig på GitHub.

##🔧 Plan for ukene framover
Uke 1–2:

Starte med et enkelt klikkespill i Flask.

Lage en knapp som gir poeng ved klikk.

Vise poengsummen på skjermen.

##Uke 3–4:

Legge til pålogging/registrering med e-post og passord.

Sette opp database med brukere og poeng.

Bruke bcrypt til å hashe passord.

##Uke 5–6:

Lage en shop der man kan bruke poeng.

Implementere auto-click funksjoner.

Gjøre designet mer oversiktlig og lett å bruke.

##Uke 7–8:

Brukertesting og små forbedringer.

Lage README, FAQ og laste opp til GitHub.

##🧪 Brukertesting – Tilbakemelding fra Robin
Robin testet spillet mitt og syntes det var skikkelig kult. Han sa at det var gøy å klikke på Ronaldo og at det var motiverende å samle poeng.

Han likte at det var lett å forstå hva man skulle gjøre og at designet var enkelt og ryddig. Han syntes det var smart at man kunne kjøpe oppgraderinger og at poengene lagres når man logger inn.

##🔒 Personvern
Passordene skal ikke lagres i klartekst, kun som hash. Det skal heller ikke vises sensitiv informasjon, og designet skal være lesbart og lett å bruke.
