const container = document.getElementById('pokemon-container');
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const renderPage = async (url) => {
    const response = await fetch(url);
    const res = await response.json();

    const prevBtn = createButton('Previous', res.previous);
    const nextBtn = createButton('Next', res.next);
    
    container.appendChild(prevBtn);
    container.appendChild(nextBtn);

    console.log(res);

    const results = await Promise.all(res.results.map(item => 
        fetch(item.url).then(response => response.json())    
    ))

    console.log(results);

    results.map((item) => {
        const pokemonInfo = document.createElement('div');

        pokemonInfo.innerHTML = `
            <h5>${item.species.name}</h5>
            <img src="${item.sprites.front_default}" alt="${item.name}" class="pokemon-image" data-pokemon='${JSON.stringify(item)}'>
        `;

        container.appendChild(pokemonInfo);
    })

    document.addEventListener('click', function (e) {
        if(e.target.classList.contains('pokemon-image')) {
            const data = JSON.parse(e.target.getAttribute('data-pokemon'));
            showModal(data);
        }
    })
}

const showModal = (pokemon) => {
    const modal = document.getElementById('myModal');
    const modalContent = document.getElementById('modalContent');

    modalContent.innerHTML = `
        <img src="${pokemon.sprites.front_default}">
        <img src="${pokemon.sprites.back_default}">
    `;

    modal.style.display = 'block';

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}

const createButton = (label, url) => {
    const button = document.createElement('button');
    button.innerHTML = label; 

    if(url) {
        button.addEventListener('click', function() {
            container.innerHTML = '';
            renderPage(url);
        })
    } else {
        button.disabled = true;
    }

    return button;
}

renderPage(baseUrl);


