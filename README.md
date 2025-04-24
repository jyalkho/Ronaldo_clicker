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
