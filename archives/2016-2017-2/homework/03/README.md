## Gyakorlo feladat #3

Legyen egy olyan alkalmazasunk, ami tartalmaz egy textarea-t, amiben csak korlatozott szamu szoveget
tudunk felvinni. A karakterek szamanak maximuma legyen: 80. Az aktualis karakterszamot jelenitsuk meg a
maximalis limittel egyutt, amit minden egyes szovegvaltoztatasra frissitunk. Az alkalmazas tartalmazzon
egy gombot is, amivel tudjuk torolni a textarea teljes tartalmat.
Ha a karakterek szama eleri a limitet, akkor ne engedjuk boviteni a szoveget es a karaktereket mutato szamlalo
valtson piros szinure, ezzel jelezve a felhasznalonak a korlatozast!

### Alkalmazas leforditasa es futtatasa:
Mielott barmelyik parancsot futtatnank erdemes a fuggosegeket frissiteni:
```bash
nvm use
npm install
```
Ha csak le szeretnenk forditani es csomagolni az alkalmazas forraskodjat, akkor ezt futtatni:
```bash
npm run homework/03
```
Ha szeretnenk folyamatosan ujraforditani es csomagolni a forraskodunkat, akkor ezt kell futtatni:
```bash
npm run homework/03/watch
```

### Segitseg:
* [Controller Components](https://facebook.github.io/react/docs/forms.html#controlled-components)
