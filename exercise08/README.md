#### Feladat leirasa:

Szeretnenk egy getCampaignTypes nevu fuggvenyt letrehozni, amely visszaadja a kampany adatok alapjan, hogy milyen kampany tipusok leteznek.
A feladat megoldasahoz hasznaljunk Promise - okat!

#### Feladat reszletezese:

1. Hozzunk letre egy getCampaignTypes nevu fuggvenyt, amelyet elerhetove teszunk mas modulok szamara.
2. Kerdezzuk le az sdk fuggveny konyvtar getCampaignIds fuggveny segitsegevel a kampany azonositokat (id).
3. Terjunk vissza a getCampaignTypes nevu fuggvenyunkben a getCampaignIds fuggveny altal visszaadott Promise - al.
4. A getCampaignIds fuggveny altal visszaadott azonositok alapjan egyesevel kerdezzuk le az sdk fuggveny konyvtar getCampaignById fuggveny segitsegevel a kampanyokat.
5. Figyeljunk arra, hogy a kampany lekerdezesek eredmenyevel egyszerre terjunk vissza! (Promise.all)
6. A visszakapott kampanyok listajabol csak a kampany tipusokkal terjunk vissza.

#### Futtatas:

``` bash
npm run exercise08
```


