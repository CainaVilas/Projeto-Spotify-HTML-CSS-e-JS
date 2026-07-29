const artistsData = [
    {
        name: "The Weeknd",
        image: "img SPOTIFY/ab67616d0000b273e0450ba3fd83cf9048446477-4173245964.jpg",
        description: "Artista com voz marcante e hits internacionais.",
        category: "Artista"
    },
    {
        name: "Dua Lipa",
        image: "img SPOTIFY/ab67616d0000b273ddfe430ec4417e80852f6142-10629368.jpg",
        description: "Cantora britânica conhecida por pop moderno e refrões fortes.",
        category: "Artista"
    },
    {
        name: "Billie Eilish",
        image: "img SPOTIFY/ab67616d0000b2730d3449f333a83a25feb423f8-2112618272.jpg",
        description: "Artista com estilo único e voz experimental.",
        category: "Artista"
    }
];

const albumsData = [
    {
        name: "After Hours",
        image: "img SPOTIFY/ab67616d0000b273394048503e3be0e65e962638-2123718747.jpg",
        description: "Álbum com sucessos como Blinding Lights.",
        category: "Álbum"
    },
    {
        name: "Future Nostalgia",
        image: "img SPOTIFY/ab6761610000e5eb77144f838397a467e807df65-2396452887.jpg",
        description: "Álbum pop cheio de energia e personalidade.",
        category: "Álbum"
    },
    {
        name: "Coletânea Essentials",
        image: "img SPOTIFY/c19a9667056d1c63cdb28697abb8de56-1959591593.jpg",
        description: "Coletânea com grandes momentos musicais.",
        category: "Coletânea"
    }
];

function renderCards(containerSelector, items) {
    const container = document.querySelector(containerSelector);

    if (!container) return;

    container.innerHTML = "";

    items.forEach((item) => {
        const card = document.createElement("article");
        card.className = "card-item";

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="card-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span>${item.category}</span>
            </div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderCards(".artists-grid", artistsData);
    renderCards(".albums-grid", albumsData);
});
