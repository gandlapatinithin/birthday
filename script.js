document.addEventListener('DOMContentLoaded', function() {
    const flowersContainer = document.getElementById('flowers');
    const flowerEmojis = ['🌸', '🌺', '🌷', '🌻', '💐'];

    // Function to create a flower element
    function createFlower() {
        const flower = document.createElement('span');
        flower.classList.add('flower');
        flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = Math.random() * 100 + 'vh';
        flower.style.transform = `translate(-50%, -50%) scale(${Math.random() * 0.5 + 0.5})`;
        flower.style.animationDuration = Math.random() * 3 + 3 + 's';
        flowersContainer.appendChild(flower);

        // Remove the flower after animation ends
        flower.addEventListener('animationend', () => {
            flower.remove();
        });
    }

    // Create multiple flowers
    for (let i = 0; i < 50; i++) {
        createFlower();
    }

    // Create new flowers periodically
    setInterval(createFlower, 1000);
});
