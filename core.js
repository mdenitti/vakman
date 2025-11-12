// Constanten
const PRIJS_PER_M2 = 45; // Euro per vierkante meter
const PRIJS_LIJM_PER_KG = 2.50; // Euro per kilogram
const LIJM_PER_M2 = 3.5; // Kilogram lijm per vierkante meter
const TEGELS_PER_DOOS = 10; // Aantal tegels in één doos

// Haal het formulier op
const form = document.getElementById('tegelForm');

// Luister naar het submit event
form.addEventListener('submit', function(event) {
    // Voorkom dat de pagina herlaadt
    event.preventDefault();
    
    // Haal de waarden op uit het formulier
    let oppervlakte = document.getElementById('oppervlakte').value;
    let tegelGrootte = document.getElementById('tegelGrootte').value;
    let voegBreedte = document.getElementById('voegBreedte').value;
    
    // Zet de string waarden om naar getallen
    oppervlakte = parseFloat(oppervlakte);
    tegelGrootte = parseFloat(tegelGrootte);
    voegBreedte = parseFloat(voegBreedte);
    
    // Roep de bereken functie aan
    berekenPrijs(oppervlakte, tegelGrootte, voegBreedte);
});

// Functie om de prijs te berekenen
function berekenPrijs(oppervlakte, tegelGrootte, voegBreedte) {
    // Bereken de oppervlakte van 1 tegel in vierkante meters
    // tegelGrootte is in cm, dus delen door 100 om naar meters te gaan
    const tegelGrootteM = tegelGrootte / 100;
    const oppervlakteTegel = tegelGrootteM * tegelGrootteM;
    
    // Bereken de voeg in meters
    const voegBreedteM = voegBreedte / 1000;
    
    // Bereken de effectieve tegelgrootte inclusief voeg
    const effectieveTegelGrootte = (tegelGrootteM + voegBreedteM) * (tegelGrootteM + voegBreedteM);
    
    // Bereken hoeveel tegels we nodig hebben
    let aantalTegels = oppervlakte / effectieveTegelGrootte;
    
    // Rond naar boven af (we kunnen geen halve tegel bestellen)
    aantalTegels = Math.ceil(aantalTegels);
    
    // Bereken het aantal dozen (rond naar boven)
    const aantalDozen = Math.ceil(aantalTegels / TEGELS_PER_DOOS);
    
    // Bereken hoeveel lijm we nodig hebben
    let lijmKg = oppervlakte * LIJM_PER_M2;
    lijmKg = Math.ceil(lijmKg); // Rond naar boven
    
    // Bereken de prijzen
    // Bereken de werkelijke oppervlakte van de gekochte tegels
    const werkelijkeOppervlakte = aantalTegels * oppervlakteTegel;
    const prijsTegels = werkelijkeOppervlakte * PRIJS_PER_M2;
    const prijsLijm = lijmKg * PRIJS_LIJM_PER_KG;
    const subtotaal = prijsTegels + prijsLijm;
    
    // Bereken de korting
    const kortingsPercentage = berekenKorting(subtotaal);
    const kortingsBedrag = subtotaal * (kortingsPercentage / 100);
    const totaalprijs = subtotaal - kortingsBedrag;
    
    // Toon de resultaten
    toonResultaten(aantalDozen, lijmKg, subtotaal, kortingsPercentage, kortingsBedrag, totaalprijs);
}

// Functie om de korting te berekenen
function berekenKorting(prijs) {
    let korting = 0;
    
    if (prijs > 0 && prijs <= 1000) {
        korting = 2;
    } else if (prijs > 1000 && prijs <= 5000) {
        korting = 5;
    } else if (prijs > 5000) {
        korting = 10;
    }
    
    return korting;
}

// Functie om de resultaten te tonen
function toonResultaten(aantalDozen, lijmKg, subtotaal, kortingsPercentage, kortingsBedrag, totaalprijs) {
    // Haal de resultaat elementen op
    const resultatenDiv = document.getElementById('resultaten');
    const aantalDozenElement = document.getElementById('aantalDozen');
    const tegellijmElement = document.getElementById('tegellijm');
    const subtotaalElement = document.getElementById('subtotaal');
    const kortingRij = document.getElementById('kortingRij');
    const kortingElement = document.getElementById('korting');
    const totaalprijsElement = document.getElementById('totaalprijs');
    
    // Vul de waarden in
    aantalDozenElement.innerHTML = aantalDozen + ' dozen';
    tegellijmElement.innerHTML = lijmKg + ' kg';
    subtotaalElement.innerHTML = '€ ' + subtotaal.toFixed(2);
    totaalprijsElement.innerHTML = '€ ' + totaalprijs.toFixed(2);
    
    // Toon of verberg de kortingsrij
    if (kortingsPercentage > 0) {
        kortingRij.style.display = 'flex';
        kortingElement.innerHTML = '-€ ' + kortingsBedrag.toFixed(2) + ' (' + kortingsPercentage + '%)';
    } else {
        kortingRij.style.display = 'none';
    }
    
    // Maak het resultaten blok zichtbaar
    resultatenDiv.style.display = 'block';
    
    // Scroll naar de resultaten

    // Waarom gebruiken we dit?
    // Nadat de gebruiker op "Bereken Prijs" klikt, verschijnt het resultatenblok onderaan. Met scrollIntoView() scrollt de pagina automatisch naar beneden zodat de gebruiker de resultaten meteen ziet, zonder zelf te moeten scrollen.

    resultatenDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
