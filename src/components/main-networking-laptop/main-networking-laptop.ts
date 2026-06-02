import './main-networking-laptop.css';
import searchIcon from '/src/assets/icons/Search.png';

export const createMainNetworkingLaptop = (): Element | null => {
    const mainNetworkingLaptop = document.createElement('div');
    
    mainNetworkingLaptop.innerHTML = `
    <section class="container-networking-filters">
        <div class="networking-search-box" aria-label="Busqueda de alumnis por nombe">
            <label><img src="${searchIcon}" alt="Icono lupa busqueda"><input id="networking-search" type="search" placeholder="Cercar alumni..."></label>
        </div>
        <div class="networking-filters" aria-label="Filtros de búsqueda">
            <p>Filtres:</p>
            <button data-filter="recent-activity" class="active" type="button">Activitat recent</button>
            <button data-filter="popular" type="button">Popularitat</button>
            <button data-filter="most-connected" type="button">Alta freqüència de connexió</button>
        </div>
    </section>

    <section class="grid-insert-users"></section>
    `;

    const mainNetworkingLaptopElement = mainNetworkingLaptop.firstElementChild;

    return mainNetworkingLaptopElement;
}


