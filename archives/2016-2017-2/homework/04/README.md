## Gyakorlo feladat #4
## (Orai feladat folytatasa)

A feladat egy mini-webshop funkcionalitasanak egy reszenek a megvalositasa.
Szeretnenk ha lenne a mini-webshop oldalon az elerheto termekeknek egy listaja, amelyeket lehet nev szerint szurni,
sot egy lenyitlo listabol kategoria szerint is. Tehat az alkalmazas alljon termekek listajabol,
egy szuromezobol es egy lenyilo listabol a kategoriak szerint.
Ezen felul lehessen kivalasztani termekeket, akar egyesevel, akar egyszerre tobbet, amit a kosarba lehet helyezni.
A kosarat lehessen uriteni.

* Egy termeket tobbszor is hozza lehet adni a kosarhoz
* A kategoria szerinti szures es a termek nev szerinti szures alapjan mutassuk a termekek listajat
* A kategoria szerinti szuresnek es a termek nev szerinti szuresnek legyen egy alap allapota, amikor minden termeket
megjelenitunk, ez legyen visszaallithato is (szures torlese)
* A kosar jelenitse meg a benne levo termekek osszerteket (fizetendo osszeg)

Implementacio:
* Az alkalmazast bontsuk komponensekre, amelyek sajat felelossegi korrel rendelkeznek
* Hatarozzuk meg, hogy az alkalmazas (resz)allapota(i)ert mely komponensek a felelosek es azon a szinten modositsuk oket
* Ha ket komponensnek szuksege van valamilyen adatra (legyen az az alkalmazas allapota, vagy egy abbol szamitott ertek)
azt kapja meg a `props`-on keresztul, allapotvaltozast pedig esemenykezelo fuggvenyek meghivasan keresztul kervenyezhetnek
* Hasznaljunk immutable adatszerkezeteket
* Gondoskodjunk arrol, hogy egy komponens csak akkor render-elje ujra magat ha tenylegesen uj allapot jott letre
(React.Component#shouldComponentUpdate)

### Alkalmazas leforditasa es futtatasa:
Mielott barmelyik parancsot futtatnank erdemes a fuggosegeket frissiteni:
```bash
nvm use
npm install
```
Ha csak le szeretnenk forditani es csomagolni az alkalmazas forraskodjat, akkor ezt futtatni:
```bash
npm run homework/04
```
Ha szeretnenk folyamatosan ujraforditani es csomagolni a forraskodunkat, akkor ezt kell futtatni:
```bash
npm run homework/04/watch
```

### Segitseg:
* [State and Lifecycle](https://facebook.github.io/react/docs/state-and-lifecycle.html)
* [React.Component#shouldComponentUpdate](https://facebook.github.io/react/docs/react-component.html#shouldcomponentupdate)
* [Single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
