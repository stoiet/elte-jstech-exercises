### Filmek rendezese IMDB pontszam alapjan

Implementalj egy adott mezo szerint rendezo fuggvenyt, ezt a fuggveny a movies.js fajlban talalhato filmek
IMDB pontszamuk szerinti rendezesere fogjuk hasznalni.

A fuggveny neve legyen sortByField es varjon egy mezo parametert, amiben megkapja hogy melyik mezo szerint rendezzen.
(Probaljuk altalanosra megirni a fuggveny, bar egyenlore csak az IMDB pontszamok szerint fogunk rendezni)

A sortByField fuggveny adjon vissza egy olyan fuggvenyt, ami az adatokat (filmeket) varja.

Abban az esetben ha olyan mezovel hivnank meg, ami nem letezik egy film objektumon, akkor adja vissza a kapott adatokat.
Abban az esetben ha imdb mezovel hivtak meg, rendezze a filmeket csokkeno pontszam szerint.

### Tesztek futtatasa:
```bash
npm run lession02/exercise01/script
npm run lession02/exercise01/tests
```
