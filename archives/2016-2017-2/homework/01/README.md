## Gyakorlo feladat #1

A feladat egy nagyon egyszeru kis alkalmazas megvalositasa, ami mindossze egy input mezobol
es az input mezo szoveget megjelenito elembol all. A feladat celja, hogy gyakoroltassa a komponensek
letrehozasat, kompozitalasat es az alkalmazas allapotanak kezeleset egy egyszeru peldan keresztul.
Az alkalmazas 3 komponensbol all, maga az alkalmazas komponens (```<Application />```),
a szoveget megjelenito komponens (```<Echo />```), illetve a input mezo (```<TextInput />```).

Az ```<Application />``` komponens felelossege, hogy ki-render-elje az osszes tobbi alkalmazast alkoto komponenst, illetve az alkalmazas allapotat tudja modositani, amit jelenleg csak a szoveg ertekebol all.

Az ```<Echo />``` komponens felelossege, hogy megjelenitse a neki atadott szoveget. Fontos, hogy csak string tipusu erteket fogadhat el, illetve a default ertek legyen a 'Hello World!'. Ez a komponens
azon kivul, hogy megjeleniti a neki atadott szoveget nem csinalhat semmi mast. (Dump Component)

Az ```<TextInput />``` komponens felelossege, az input erteke megvalozasa eseten jelezze azt
az ot tartalmazo komponens fele. (egy callback esemenykezelo uggveny meghivasaval)

### Alkalmazas leforditasa es futtatasa:
Mielott barmelyik parancsot futtatnank erdemes a fuggosegeket frissiteni:
```bash
nvm use
npm install
```
Ha csak le szeretnenk forditani es csomagolni az alkalmazas forraskodjat, akkor ezt futtatni:
```bash
npm run homework/01
```
Ha szeretnenk folyamatosan ujraforditani es csomagolni a forraskodunkat, akkor ezt kell futtatni:
```bash
npm run homework/01/watch
```

### Segitseg:
* [Default komponens parameterek](https://facebook.github.io/react/docs/react-component.html#defaultprops)
* [Komponens parameter validalas](https://facebook.github.io/react/docs/react-component.html#proptypes)
* [Komponens allapotanak modositasa](https://facebook.github.io/react/docs/react-component.html#proptypes)
* [Esemeny kezeles](https://facebook.github.io/react/docs/handling-events.html)
