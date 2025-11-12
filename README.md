# RedSyntraPXLFloor - Tegelcalculator 🔴

Een professionele webapplicatie voor het berekenen van tegelbehoeften en bijbehorende kosten voor vloerlegprojecten.

## 📋 Overzicht

RedSyntraPXLFloor is een interactieve tegelcalculator die vloerleggers en klanten helpt bij het nauwkeurig berekenen van:
- Aantal benodigde tegeldozen
- Hoeveelheid tegellijm
- Totale projectkosten met automatische kortingen

## ✨ Functionaliteiten

### Hoofdfuncties
- **Oppervlakteberekening**: Bereken het aantal tegels op basis van vierkante meters
- **Tegelformaten**: Ondersteuning voor meerdere tegelgroottes (30x30 tot 80x80 cm)
- **Voegcompensatie**: Nauwkeurige berekening inclusief voegbreedte (1-10mm)
- **Automatische korting**: Progressief kortingssysteem op basis van ordergrootte
- **Real-time berekening**: Directe prijsweergave na invoer

### Kortingssysteem
- **0-€1.000**: 2% korting
- **€1.000-€5.000**: 5% korting
- **Boven €5.000**: 10% korting

## 🛠️ Technische Specificaties

### Technologieën
- **HTML5**: Semantische opmaak
- **CSS3**: Modern responsive design met gradients en animaties
- **Vanilla JavaScript**: Pure JavaScript zonder frameworks
- **Bootstrap 5.3.0**: Grid systeem en componenten

### Prijsconstanten
```javascript
PRIJS_PER_M2 = €45          // Tegelprijs per vierkante meter
PRIJS_LIJM_PER_KG = €2.50   // Lijmprijs per kilogram
LIJM_PER_M2 = 3.5 kg        // Lijmverbruik per vierkante meter
TEGELS_PER_DOOS = 10        // Aantal tegels per doos
```

## 📁 Projectstructuur

```
vakman/
├── index.html      # Hoofdpagina met formulier en resultatenweergave
├── core.js         # JavaScript logica voor berekeningen
├── custom.css      # Aangepaste styling en branding
└── README.md       # Deze documentatie
```

## 🚀 Installatie & Gebruik

### Installatie
1. Clone of download het project:
   ```bash
   git clone https://github.com/mdenitti/vakman.git
   ```
   
2. Open het project in je favoriete code-editor

3. Open `index.html` in een moderne webbrowser

### Gebruik
1. Voer de **oppervlakte** in vierkante meters in
2. Selecteer de gewenste **tegelgrootte** uit het dropdown menu
3. Pas de **voegbreedte** aan (standaard 3mm)
4. Klik op **"Bereken Prijs"**
5. Bekijk de gedetailleerde kostenopstelling

## 💡 Berekeningslogica

### Stappenplan van de calculator:

1. **Tegeloppervlakte berekenen**
   ```javascript
   tegelGrootteM = tegelGrootte / 100
   oppervlakteTegel = tegelGrootteM × tegelGrootteM
   ```

2. **Effectieve tegelgrootte (incl. voeg)**
   ```javascript
   voegBreedteM = voegBreedte / 1000
   effectieveTegelGrootte = (tegelGrootteM + voegBreedteM)²
   ```

3. **Aantal tegels & dozen**
   ```javascript
   aantalTegels = Math.ceil(oppervlakte / effectieveTegelGrootte)
   aantalDozen = Math.ceil(aantalTegels / TEGELS_PER_DOOS)
   ```

4. **Lijm & kosten**
   ```javascript
   lijmKg = Math.ceil(oppervlakte × LIJM_PER_M2)
   werkelijkeOppervlakte = aantalTegels × oppervlakteTegel
   prijsTegels = werkelijkeOppervlakte × PRIJS_PER_M2
   prijsLijm = lijmKg × PRIJS_LIJM_PER_KG
   ```

## 🎨 Design Features

- **Modern UI**: Gradient achtergronden en smooth animaties
- **Responsive Design**: Werkt op desktop, tablet en mobiel
- **Visuele Feedback**: Kleurcodes voor verschillende resultaatsecties
- **Smooth Scrolling**: Automatisch scrollen naar resultaten
- **Hover Effects**: Interactieve knoppen met transformaties

## 📱 Browser Compatibiliteit

- ✅ Chrome (aanbevolen)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

*Vereist een moderne browser met ES6+ ondersteuning*

## 🔧 Aanpassingsmogelijkheden

### Prijzen aanpassen
Wijzig de constanten in `core.js`:
```javascript
const PRIJS_PER_M2 = 45;        // Pas tegelprijs aan
const PRIJS_LIJM_PER_KG = 2.50; // Pas lijmprijs aan
const LIJM_PER_M2 = 3.5;        // Pas lijmverbruik aan
```

### Kortingspercentages aanpassen
Bewerk de `berekenKorting()` functie in `core.js`:
```javascript
function berekenKorting(prijs) {
    if (prijs > 0 && prijs <= 1000) return 2;
    if (prijs > 1000 && prijs <= 5000) return 5;
    if (prijs > 5000) return 10;
}
```

### Tegelformaten toevoegen
Voeg nieuwe opties toe in `index.html`:
```html
<option value="100">100 x 100 cm</option>
```

## 📊 Voorbeeld Berekening

**Invoer:**
- Oppervlakte: 25 m²
- Tegelgrootte: 60 x 60 cm
- Voegbreedte: 3 mm

**Output:**
- Aantal dozen: 7 dozen (69 tegels)
- Werkelijke tegeloppervlakte: 24,84 m²
- Tegellijm: 88 kg
- Subtotaal: €1.337,80
- Korting: -€66,89 (5%)
- **Totaalprijs: €1.270,91**

## 👨‍💻 Auteur

**RedSyntraPXLFloor**  
Professionele Vloerleggers sinds 2025

## 📄 Licentie

Dit project is ontwikkeld voor educatieve en commerciële doeleinden.

## 🤝 Bijdragen

Verbeteringen en suggesties zijn welkom! Neem contact op via GitHub issues.

## 📞 Contact

Voor vragen of ondersteuning:
- GitHub: [@mdenitti](https://github.com/mdenitti)
- Repository: [vakman](https://github.com/mdenitti/vakman)

---

*© 2025 RedSyntraPXLFloor - Voor al uw vloerwerk*
