# AJAX - Asynchronous Javascript And XML
* 2 módszer
    * fetch - 
        * jobban szeretik a fejlesztők,
        * Egyszerű fv -> nekünk kell kezelni egy csomó mindent (fetch -> promise -> visszatér egy osztállyal)
        * js-ben létezik
        * Való életben javaslat - teljesen új dolgot hozol létre
    * XMLHttpRequest
        * régebbi megoldás, 
        * komplex osztály
        * böngészőben létezik
        * Való életben javaslat - ahol implementálva van, ahol beleírsz pluszba dolgokat

## HTTP request
A HTTP egy sor kérésmódszert határoz meg, amelyek jelzik a kérés célját és azt, hogy mi várható, ha a kérés sikeres. Bár ezek főnevek is lehetnek, ezeket a kérésmódszereket néha HTTP-igéknek is nevezik. Minden kérésmódszernek megvan a maga szemantikája, de egyes jellemzők több módszerre is kiterjednek, konkrétan a kérésmódszerek lehetnek biztonságosak, idempotensek vagy cache-elhetőek.
* __GET__
    * megadott erőforrás ábrázolását kéri.
    * módszert használó kérések csak adatokat szerezhetnek be, és nem tartalmazhatnak kérés tartalmat
* __POST__
    * egy entitást küld a megadott erőforrásnak, ami gyakran állapotváltozást vagy mellékhatásokat okoz a szerveren.
* __PUT__
    * a cél erőforrás összes aktuális ábrázolását a kérés tartalmával helyettesíti.
* __DELETE__
    *  törli a megadott erőforrást

## XMLRequest
* először példányosítani kell: `const xhr = new XMLHttpRequest()`
### Instance properties (példány tulajdonságok)
#### readyState
| Érték | Állapot | Leírás |
| :---: | :--- | :--- |
| **0** | **UNSENT** | Az ügyfél létrehozásra került. Az `open()` még nem lett meghívva. |
| **1** | **OPENED** | Az `open()` meg lett hívva. Ebben az állapotban a kérés fejlécei a `setRequestHeader()` metódussal állíthatók be, és meghívható a `send()` metódus, amely elindítja a lekérdezést. |
| **2** | **HEADERS_RECEIVED** | A `send()` meg lett hívva, és a fejlécek és az állapot elérhetőek. Minden átirányítás végrehajtásra került, és a válasz fejlécét megkaptuk. |
| **3** | **LOADING** | Letöltés folyamatban; a `responseText` részleges adatokat tartalmaz. Ha a `responseType` értéke "text" vagy üres, a részleges válasz már olvasható. |
| **4** | **DONE** | A művelet befejeződött. Ez azt jelenti, hogy az adatátvitel lezárult (sikeresen vagy sikertelenül). |
#### responseText 
* __visszaadja a kérés elküldése után a szervertől kapott szöveget.__
*Egy karakterlánc, amely vagy az XMLHttpRequest segítségével kapott szöveges adatokat tartalmazza, __vagy „” értéket, ha a kérés sikertelen volt, vagy még nem érkezett meg tartalom.__
*__Aszinkron kérés feldolgozása közben a responseText értéke mindig a szerverről kapott aktuális tartalmat tartalmazza__, még akkor is, ha az adat még nem érkezett meg teljesen, és ezért hiányos.
* A teljes tartalom beérkezéséről akkor lehet biztosan tudni, amikor a readyState értéke XMLHttpRequest.DONE (4) lesz, és a status értéke 200 („OK”) lesz.\
__Kivételek__\
InvalidStateError DOMException
Akkor dobódik, ha az XMLHttpRequest.responseType értéke nem üres karakterlánc vagy „text”. Mivel a responseText tulajdonság csak szöveges tartalomra érvényes, minden más érték hibaállapotot jelent.\
__Példa__
```
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

// If specified, responseType must be empty string or "text"
xhr.responseType = "text";

xhr.onload = () => {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.response);
      console.log(xhr.responseText);
    }
  }
};

xhr.send(null);
```

### Methodes

#### open - küldjön egy get-et 
Az XMLHttpRequest open() metódus egy újonnan létrehozott kérést inicializál, vagy egy meglévőt újra inicializál.

Megjegyzés: Ez a metódus már aktív kérés esetén (amelyre már hívták az open() metódust) az abort() metódus hívásával egyenértékű.
__Paraméterek__
* method - kötelező
    * A használni kívánt HTTP-kérés módszere, például „GET”, „POST”, „PUT”, „DELETE” stb. Nem HTTP(S) URL-ek esetén figyelmen kívül hagyható.
* url - kötelező
    * Egy karakterlánc vagy bármely más karakterlánc-konvertálóval rendelkező objektum – beleértve az URL-objektumot is –, amely megadja a kérés elküldésének célját képező erőforrás URL-jét.
* async - opcionális
    * Opcionális Boolean paraméter, alapértelmezés szerint true, amely jelzi, hogy a műveletet aszinkron módon kell-e végrehajtani. Ha ez az érték false, a send() metódus nem tér vissza, amíg a válasz meg nem érkezik. Ha true, az eseményfigyelők segítségével értesítést kapunk a tranzakció befejezéséről. Eznek true-nak kell lennie, ha a multipart attribútum true, különben kivétel keletkezik.\

Megjegyzés: A fő szálon végzett szinkron kérések könnyen zavarhatják a felhasználói élményt, ezért kerülni kell őket; valójában sok böngésző teljesen elavultnak tekinti a fő szálon végzett szinkron XHR támogatást. A szinkron kérések megengedettek a Workers-ben.

* user - opcionális
    * Az azonosításhoz használható opcionális felhasználónév; alapértelmezés szerint ez null érték.
* password - opcionális
    * Az azonosításhoz használható opcionális jelszó; alapértelmezés szerint ez null érték.
__Return value__
None (undefined).

#### send 
* __Az XMLHttpRequest send() metódus elküldi a kérést a szervernek.__
* __Ha a kérés aszinkron__ (ez az alapértelmezett), akkor ez a __metódus a kérés elküldése után azonnal visszatér__, és az __eredményt események segítségével továbbítja.__ 
* __Ha a kérés szinkron__, akkor ez a __metódus csak a válasz megérkezése után tér vissza.__
* A send() egy opcionális paramétert fogad el, amely lehetővé teszi a kérés testének megadását; ezt elsősorban olyan kéréseknél használják, mint a PUT. Ha a kérés módszere GET vagy HEAD, a test paramétert figyelmen kívül hagyják, és a kérés testét nullára állítják.
* Ha a setRequestHeader() segítségével nem állítottak be Accept fejléceket, akkor egy „*/*” (bármilyen típusú) típusú Accept fejlécet küldenek.
__Paraméterek__
* body - opcionális
    * Az XHR kérésben elküldendő adat test. Ez lehet:
        * Egy dokumentum, amely esetben elküldés előtt sorosítva lesz.
        * Egy XMLHttpRequestBodyInit, amely a Fetch specifikáció szerint lehet Blob, ArrayBuffer, TypedArray, DataView, FormData, URLSearchParams vagy string.
        * null\
Ha a testre nincs megadva érték, akkor az alapértelmezett null érték kerül felhasználásra.\

A bináris tartalom (pl. fájlfeltöltés) küldésének legjobb módja a TypedArray, a DataView vagy a Blob objektumok használata a send() metódussal együtt.

__Visszatérési érték__
None (undefined).

### Event
#### onreadystatechange
A readystatechange esemény __akkor válik aktívvá, amikor az XMLHttpRequest readyState tulajdonsága megváltozik.__\

Figyelem: Ezt nem szabad szinkron kérésekkel használni, és nem szabad natív kódból használni.\

__Példa__

```
const xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.readyState); // readyState will be 0

xhr.open("GET", "/api", true);
console.log("OPENED", xhr.readyState); // readyState will be 1

xhr.onprogress = () => {
  console.log("LOADING", xhr.readyState); // readyState will be 3
};

xhr.onload = () => {
  console.log("DONE", xhr.readyState); // readyState will be 4
};

xhr.send(null);
```