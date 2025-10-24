// Dados Mockup dos Personagens E Mobs de CLAIR OBSCURE: EXPEDITION 33
// NOTA: Certifique-se de que os arquivos de imagem (gustave.jpg, maelle.jpg, etc.)
// existam na pasta 'images/' e que o nome coincida exatamente.

const charactersData = [
    // --- Personagens (Expeditioners) ---
    { name: "Gustave", category: "Expeditioner", type: "Protagonist", image: "images/gustave.jpg" },
    { name: "Maelle", category: "Expeditioner", type: "Youngest Member", image: "images/maelle.jpg" },
    { name: "Lune", category: "Expeditioner", type: "Pathfinder", image: "images/lune.jpg" },
    { name: "Sciel", category: "Expeditioner", type: "Healer/Tarot", image: "images/sciel.jpg" },
    { name: "Monoco", category: "Gestral", type: "Fighter/Ally", image: "images/monoco.jpg" },
    { name: "Verso", category: "Human", type: "Observer", image: "images/verso.jpg" },
    
    // --- Mobs (Nevrons) ---
    { name: "Abbest", category: "Nevron", type: "Básico", image: "images/abbest.png" },
    { name: "Braseleur", category: "Nevron", type: "Fire Type", image:"images/braseleur.jpg"},
    
    // Adicione mais Mobs e Personagens aqui!
];

const characterList = document.getElementById('character-list');
const nameFilter = document.getElementById('name-filter');

/**
 * Cria o elemento HTML (card) para um único personagem/mob.
 */
function createCharacterCard(item) {
    // Usamos 'item.category' e 'item.type' na exibição
    const infoCategory = item.category || 'Desconhecido';
    const infoType = item.type || 'Sem Info';
    
    // Caminho da imagem (você deve ter essas imagens na sua pasta /images)
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
 * Renderiza a lista de personagens no DOM.
 */
function renderCharacters(characters) {
    // Limpa o conteúdo atual
    characterList.innerHTML = '';

    if (characters.length === 0) {
        // Mensagem se a busca não encontrar nada
        characterList.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 20px; color: var(--text-muted);">Nenhum item encontrado.</p>';
        return;
    }

    // Cria e insere o HTML dos cards
    const cardsHtml = characters.map(createCharacterCard).join('');
    characterList.innerHTML = cardsHtml;
}

/**
 * Função de filtro (chamada sempre que o texto da busca muda).
 */
function filterCharacters() {
    const filterText = nameFilter.value.toLowerCase().trim();

    const filteredItems = charactersData.filter(item => {
        // Filtra por nome
        return item.name.toLowerCase().includes(filterText);
    });

    renderCharacters(filteredItems);
}

// 1. Renderiza a lista inicial ao carregar a página
renderCharacters(charactersData);

// 2. Adiciona o listener para a caixa de filtro
nameFilter.addEventListener('input', filterCharacters);