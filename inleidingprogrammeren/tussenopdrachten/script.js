// Variabele om bij te houden of er al een effect bezig is
let isEffectShown = false;

// Variabelen om de beer en het bericht op te slaan
let bear;
let message;

// Constantes voor messages buiten de functie
const messages = {
  rain: ["Aww no, it's rainy!", "It's pouring outside!", "I need an umbrella!"],
  heart: [
    "Hmm, I feel so loved!",
    "Love is in the air!",
    "You are my sunshine!",
  ],
  moon: [
    "I love sleeping, hihi!",
    "Good night, sweet dreams!",
    "Time to snooze!",
  ],
};

// Functie om het spel te starten en de HTML-structuur op te zetten
function startGame() {
  const container = document.getElementById("container"); // Pak het container element
  container.innerHTML = `
        <h1 class="title">BEAR-A-GOCCI</h1>
        <div class="icons">
            <img src="regen.png" class="icon" onclick="showMessage('rain')" alt="Rain Icon">
            <img src="hartje.png" class="icon" onclick="showMessage('heart')" alt="Heart Icon">
            <img src="maantje.png" class="icon" onclick="showMessage('moon')" alt="Moon Icon">
        </div>
        <div class="bear-container">
            <img src="beertje.png" class="bear" id="bear" alt="Bear Image">
            <div id="message" class="message"></div>
        </div>
    `;

  bear = document.getElementById("bear"); // Pak het beer element
  message = document.getElementById("message"); // Pak het message element
}

// Functie om een bericht te laten zien op basis van het type dat is aangeklikt
function showMessage(type) {
  let selectedMessage = ""; // Variabele om het gekozen bericht op te slaan

  // Kijk welk type is aangeklikt en stel de juiste afbeelding en bericht in
  if (type === "rain") {
    bear.src = "regenbeertje.png"; // Verander de afbeelding naar regenbeertje
    selectedMessage =
      messages.rain[Math.floor(Math.random() * messages.rain.length)]; // Kies een willekeurig regenbericht
    document.body.className = "bg-rain"; // Verander de achtergrondkleur naar lichtblauw
  } else if (type === "heart") {
    bear.src = "liefdebeertje.png"; // Verander de afbeelding naar liefdebeertje
    selectedMessage =
      messages.heart[Math.floor(Math.random() * messages.heart.length)]; // Kies een willekeurig hartbericht
    document.body.className = "bg-heart"; // Verander de achtergrondkleur naar roze
  } else if (type === "moon") {
    bear.src = "slaapbeertje.png"; // Verander de afbeelding naar slaapbeertje
    selectedMessage =
      messages.moon[Math.floor(Math.random() * messages.moon.length)]; // Kies een willekeurig maanbericht
    document.body.className = "bg-moon"; // Verander de achtergrondkleur naar donkerblauw
  }

  message.innerText = selectedMessage; // Laat het gekozen bericht zien

  if (!isEffectShown) {
    // Code binnen dit blok wordt uitgevoerd omdat !isEffectShown waar is (isEffectShown is false)
    isEffectShown = true; // Stel in dat er nu een effect wordt weergegeven
    setTimeout(() => {
      bear.src = "beertje.png"; // Zet de beer terug naar de oorspronkelijke afbeelding
      message.innerText = ""; // Wis het bericht
      isEffectShown = false; // Zet de effect status terug naar false
      document.body.className = ""; // Verwijder de achtergrondkleur
    }, 3000);
  }
}
