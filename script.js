// /script.js
// /script.js

// Register the service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/solar2/service-worker.js');
            .then((registration) => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch((error) => {
                console.log('Service Worker registration failed:', error);
            });
    });
}



// Sample data for planets
const planets = [
    { name: "Mercury", image: "assets/planets/mercury.png", distance: "57.91 million km", dayLength: "58.6 Earth days", yearLength: "88 Earth days", moons: 0, funFact: "Mercury is the smallest planet." },
    { name: "Venus", image: "assets/planets/venus.png", distance: "108.2 million km", dayLength: "116 Earth days", yearLength: "225 Earth days", moons: 0, funFact: "Venus is the hottest planet." },
    { name: "Earth", image: "assets/planets/earth.png", distance: "149.6 million km", dayLength: "24 hours", yearLength: "365.25 days", moons: 1, funFact: "Earth is the only planet known to support life." },
    { name: "Mars", image: "assets/planets/mars.png", distance: "227.9 million km", dayLength: "24.6 hours", yearLength: "687 Earth days", moons: 2, funFact: "Mars is known as the Red Planet." },
    { name: "Jupiter", image: "assets/planets/jupiter.png", distance: "778.3 million km", dayLength: "9.9 hours", yearLength: "11.86 Earth years", moons: 79, funFact: "Jupiter is the largest planet in the solar system." },
    { name: "Saturn", image: "assets/planets/saturn.png", distance: "1.429 billion km", dayLength: "10.7 hours", yearLength: "29.46 Earth years", moons: 82, funFact: "Saturn is known for its beautiful rings." },
    { name: "Uranus", image: "assets/planets/uranus.png", distance: "2.871 billion km", dayLength: "17.2 hours", yearLength: "84 Earth years", moons: 27, funFact: "Uranus rotates on its side." },
    { name: "Neptune", image: "assets/planets/neptune.png", distance: "4.495 billion km", dayLength: "16 hours", yearLength: "164.8 Earth years", moons: 14, funFact: "Neptune has the strongest winds in the solar system." },
];

// Render planets to the page
const solarSystem = document.getElementById('solar-system');
planets.forEach(planet => {
    const planetCard = document.createElement('div');
    planetCard.classList.add('planet-card');
    planetCard.innerHTML = `
        <img src="${planet.image}" alt="${planet.name}">
        <div class="planet-name">${planet.name}</div>
    `;
    planetCard.addEventListener('click', () => showModal(planet));
    solarSystem.appendChild(planetCard);
});

// Modal functionality
function showModal(planet) {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = `
        <div class="modal">
            <button id="close-modal" class="close-btn">X</button>
            <h2>${planet.name}</h2>
            <img src="${planet.image}" alt="${planet.name}">
            <p><strong>Distance from Sun:</strong> ${planet.distance}</p>
            <p><strong>Length of Day:</strong> ${planet.dayLength}</p>
            <p><strong>Length of Year:</strong> ${planet.yearLength}</p>
            <p><strong>Number of Moons:</strong> ${planet.moons}</p>
            <p><strong>Fun Fact:</strong> ${planet.funFact}</p>
        </div>
    `;
    modalContainer.style.display = 'block';

    // Close modal on button click
    document.getElementById('close-modal').addEventListener('click', () => {
        modalContainer.style.display = 'none';
    });
}
