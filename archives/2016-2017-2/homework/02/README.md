## Gyakorlo feladat #2

A feladat egy olyan termek lista megvalositasa, amibol a kivalasztott elemeket tudjuk torolni.
A termekek listaja adott (items.js). Az alkalmazas alljon ```<Application />```, ```<ItemList />```,
```<Item />``` nevu komponensekbol.

* Az alkalmazas minden ujratoltodesenel tartalmazza az osszes termeket
* Epitsuk fel ugy az alkalmazasunkat, hogy az allapothalmaza ket listabol alljon (mert annyi szukseges)
* ```<Application />``` komponens legyen a felelose az alkalmazas allapotanak a karbantartasaert
* ```<Application />``` komponens tartalmazzon egy gombot, amivel a kijelolt lista elemeket tudjuk torolni
* ```<ItemList />``` komponens a neki atadott lista alapjan letrehoz annyi ```<Item />``` elemet, amennyit
meg kell jelenitenie
* ```<Item />``` komponens megjelenit egy termeket es kivalasztas eseten jelzi azt a felette allo komponensnek (callback meghivasa)

Minden komponens bemeneti parametere (prop) legyen validalva, hogy megfelelo tipusu elemet kap!
Ahol szukseges hasznaljunk default erteket. Az alkalmazason kivul egyik komponens sem modosithatja az
alkalmazas allapotat (azaz nem hivhatja setState metodusat, mert az kihatna az alkalmazas egeszenek
allapotara). A termekek listaja legyen immutable.

### Alkalmazas leforditasa es futtatasa:
Mielott barmelyik parancsot futtatnank erdemes a fuggosegeket frissiteni:
```bash
nvm use
npm install
```
Ha csak le szeretnenk forditani es csomagolni az alkalmazas forraskodjat, akkor ezt futtatni:
```bash
npm run homework/02
```
Ha szeretnenk folyamatosan ujraforditani es csomagolni a forraskodunkat, akkor ezt kell futtatni:
```bash
npm run homework/02/watch
```

### Segitseg:
* [Immutability](https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd)
* [React Immutability Helpers](https://facebook.github.io/react/docs/update.html)
* [React Lists](https://facebook.github.io/react/docs/lists-and-keys.html)
