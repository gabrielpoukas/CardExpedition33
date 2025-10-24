
const charactersData = [
    { name: "Gustave", category: "Expeditioner", type: "Protagonist", image: "images/gustave.jpg" },
    { name: "Maelle", category: "Expeditioner", type: "Youngest Member", image: "images/maelle.jpg" },
    { name: "Lune", category: "Expeditioner", type: "Pathfinder", image: "images/lune.jpg" },
    { name: "Sciel", category: "Expeditioner", type: "Healer/Tarot", image: "images/sciel.jpg" },
    { name: "Monoco", category: "Gestral", type: "Fighter/Ally", image: "images/monoco.jpg" },
    { name: "Verso", category: "Human", type: "Observer", image: "images/verso.jpg" },
    
    // --- Mobs (Nevrons) ---
    { name: "Abbest", category: "Nevron", type: "Básico", image: "images/abbest.png" },
    { name: "Braseleur", category: "Nevron", type: "Fire Type", image:"images/braseleur.jpg"},
    
];

const characterList = document.getElementById('character-list');
const nameFilter = document.getElementById('name-filter');

/**
 */
function createCharacterCard(item) {
    const infoCategory = item.category || 'Desconhecido';
    const infoType = item.type || 'Sem Info';
    
    const imagePath = item.image || 'images/placeholder.jpg'; 

    return `
        <div class="character-card">
            <div class="card-image-container">
                <img src="${imagePath}" 
                     alt="${item.name}" 
                     onerror="this.onerror=null; this.src='images/placeholder.jpg';">
            </div>
            <div class="card-info">
                <h3>${item.name}</h3>
                <p>${infoCategory} (${infoType})</p>
            </div>
        </div>
    `;
}

/**
 */
function renderCharacters(characters) {
    characterList.innerHTML = '';

    if (characters.length === 0) {
        characterList.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 20px; color: var(--text-muted);">Nenhum item encontrado.</p>';
        return;
    }

    const cardsHtml = characters.map(createCharacterCard).join('');
    characterList.innerHTML = cardsHtml;
}

/**
 */
function filterCharacters() {
    const filterText = nameFilter.value.toLowerCase().trim();

    const filteredItems = charactersData.filter(item => {
        return item.name.toLowerCase().includes(filterText);
    });

    renderCharacters(filteredItems);
}

renderCharacters(charactersData);

nameFilter.addEventListener('input', filterCharacters);
